import { cwd } from 'process';
import * as fs from 'fs';
import {
    getFilesFromDirectory,
    getFileNameFromPath,
    hasRelatedMetadataFile,
    isVendorAction,
    buildRichContent,
    filterVendorSpecificRichContent,
    deepcopy,
    IntentConfigItem,
    isNotEmptyArray,
    determineMessages,
    VENDORS,
    requireFile,
} from '../../utils';
import intentConfig from '../intentConfig.json';
import { LogFactory } from '../../logger';
import SkillTemplate from './templates/skillTemplate.json';
import DialogNodeTemplate from './templates/dialogNodeTemplate.json';
import DialogNodeItemTemplate from './templates/dialogNodeItemTemplate.json';

let previousNode;
const channelContextMap = new Map([
    ['facebook', 'FacebookContext'],
    ['apple', 'Apple Business Chat'],
    ['line', 'LINE'],
    ['whatsapp', 'WhatsApp Business'],
    ['gbm', 'Google'],
    ['rcs', 'RCS Business Messaging'],
    ['web', 'WEB_SDK'],
]);

const logger = new LogFactory(VENDORS.IbmWatson).build();

type Intent = {
    intent: string;
    examples: { text: string }[];
    description: '';
};

type DialogNodeItem = {
    values: [
        {
            text: string;
        }
    ];
    response_type: string;
    selection_policy: string;
};

type DialogNode = {
    type: string;
    title: string;
    output: {
        generic: DialogNodeItem[];
    };
    parent: string;
    actions: [];
    context: unknown;
    conditions: string;
    dialog_node: string;
    previous_sibling: string;
    next_steps: unknown;
};

type Skill = {
    intents: Intent[];
    entities: [];
    metadata: {
        api_version: {
            major_version: string;
            minor_version: string;
        };
    };
    dialog_nodes: DialogNode[];
    counterexamples: [];
    system_settings: {
        disambiguation: {
            prompt: string;
            enabled: boolean;
            randomize: boolean;
            max_suggestions: number;
            suggestion_text_policy: string;
            none_of_the_above_prompt: string;
        };
        human_agent_assist: {
            prompt: string;
        };
        intent_classification: {
            training_backend_version: string;
        };
        spelling_auto_correct: boolean;
    };
    learning_opt_out: boolean;
    name: string;
    language: string;
    description: string;
};

/**
 * Builds a single utterance
 * @param entry
 * @return Intent
 */
function buildUtterances(entry: IntentConfigItem): Intent {
    const examples = entry.utterance.map((e) => ({ text: e }));
    return { description: '', intent: entry.intent, examples };
}

/**
 * Builds the singe dialog node item
 * @param payload
 * @param stringify - should the payload be stringified as text
 * @return {DialogNodeItem}
 */
function buildDialogNodeItem(payload, stringify = false): DialogNodeItem {
    const dialogNodeItem = deepcopy(DialogNodeItemTemplate) as DialogNodeItem;
    dialogNodeItem.values[0].text = stringify ? JSON.stringify(payload) : payload;
    return dialogNodeItem;
}

/**
 * Builds the dialog node based on the provided file path
 * @param {DialogNode} dialogNode
 * @param {string} filePath
 * @param {boolean} usesMetadata
 * @returns {Payload}
 */
function buildDialogNode(dialogNode: DialogNode, filePath: string, usesMetadata: boolean): DialogNode {
    const fileContent = requireFile(filePath);
    const fileName = getFileNameFromPath(filePath);
    if (isVendorAction(fileContent)) {
        if (fileName === 'delay') {
            dialogNode.output.generic.push(fileContent);
        } else if (fileName === 'privateMessage') {
            dialogNode.output.generic.push(buildDialogNodeItem(fileContent, true));
        } else if (fileName === 'encodedMetadata') {
            dialogNode.context = fileContent;
        } else {
            dialogNode.actions.push(fileContent as never);
        }
    } else {
        const richContent = buildRichContent(fileContent, fileName, filePath, usesMetadata);
        dialogNode.output.generic.push(buildDialogNodeItem(richContent, true));
    }
    return dialogNode;
}

/**
 * Sets the current dialog node and previous sibling value
 * @param {DialogNode} dialogNode
 * @param {number} index
 * @return {DialogNode}
 */
function setDialogNodeAndSibling(dialogNode: DialogNode, index: number): DialogNode {
    if (index === 0) {
        dialogNode.dialog_node = 'Welcome';
        previousNode = 'Welcome';
        delete dialogNode.previous_sibling;
    } else {
        const nodeName = `node_7_${Math.floor(Math.random() * 10000000000000)}`;
        dialogNode.dialog_node = nodeName;
        dialogNode.previous_sibling = previousNode;
        previousNode = nodeName;
    }
    return dialogNode;
}

/**
 * Iterates through the intentConfig and builds the dialog nodes and intents
 * 1. Iterates over intent config
 * 2. Copy skill template
 * 3. Adds utterances to the skill template
 * 4. Copy dialog node template
 * 5. Parse rich content to dialog node template
 * 6. Adds dialog node to the skill template
 * @returns {Promise<Skill>}
 */
async function createDialogNodeAndIntentPayloads(): Promise<Skill> {
    let files = await getFilesFromDirectory(`${cwd()}/files/richContent`);
    files = filterVendorSpecificRichContent(files, VENDORS.IbmWatson);
    const skillTemplate = deepcopy(SkillTemplate) as Skill;
    intentConfig.forEach((config: IntentConfigItem, index: number) => {
        if (isNotEmptyArray(config.utterance)) {
            skillTemplate.intents.push(buildUtterances(config));
        }
        let dialogNode = deepcopy(DialogNodeTemplate) as DialogNode;
        dialogNode.conditions = `#${config.intent}`;
        dialogNode.title = config.intent;
        const messages = determineMessages(config, VENDORS.IbmWatson);
        if (isNotEmptyArray(messages)) {
            dialogNode = setDialogNodeAndSibling(dialogNode, index);
            messages.forEach((e) => {
                if (e.contentType === 'CustomPayload') {
                    const richContentPath = files.find((path) => path.includes(e.content));
                    dialogNode = buildDialogNode(dialogNode, richContentPath, hasRelatedMetadataFile(files, richContentPath));
                } else {
                    dialogNode.output.generic.push(buildDialogNodeItem(e.content));
                }
            });
            skillTemplate.dialog_nodes.push(dialogNode);
        }
    });
    return skillTemplate;
}

/**
 * Set the condition ($lpEvent) for channel specific intents
 * @param skill
 * @return {Skill}
 */
function setConditionsForChannelSpecificIntents(skill: Skill): Skill {
    skill.dialog_nodes = skill.dialog_nodes.map((dialogNode) => {
        if (dialogNode.title === 'Anything else') {
            dialogNode.conditions = 'anything_else';
            dialogNode.dialog_node = dialogNode.title;
        } else if (dialogNode.title === 'welcome') {
            dialogNode.conditions += ' || welcome';
        } else if (dialogNode.title === 'welcome_Apple') {
            dialogNode.conditions += ' || welcome && $lpEvent.conversationContext.integration=="Apple Business Chat"';
        } else if (dialogNode.title === 'welcome_WhatsApp') {
            dialogNode.conditions += ' || welcome && $lpEvent.conversationContext.integration=="WhatsApp Business"';
        } else if (channelContextMap.has(dialogNode.title)) {
            dialogNode.conditions = `#richContentSelection && $lpEvent.conversationContext.integration == '${channelContextMap.get(
                dialogNode.title
            )}'`;
        }
        return dialogNode;
    });
    return skill;
}

/**
 * Creates the IBM Watson JSON file and saves it to the export folder
 * @export
 * @returns {Promise<void>}
 */
export async function buildIbmWatsonExport(): Promise<void> {
    logger.info(`Started zip file`);
    let skill = await createDialogNodeAndIntentPayloads();
    skill = setConditionsForChannelSpecificIntents(skill);
    fs.writeFileSync(`${cwd()}/export/IbmWatson.json`, JSON.stringify(skill, null, 4), { encoding: 'utf8' });
    logger.info(`Created zip file`);
}
