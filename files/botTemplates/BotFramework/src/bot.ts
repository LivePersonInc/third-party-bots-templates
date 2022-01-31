// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { ActivityHandler, MessageFactory } from 'botbuilder';
import intents from './intents.json';

export class EchoBot extends ActivityHandler {
    constructor() {
        super();
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {
            const matchedIntent = this.matchIntent(context.activity.text.toLowerCase());
            try {
                const richContent = await import('./richContent');
                const replyText = richContent[matchedIntent]();
                await context.sendActivities(replyText);
                // By calling next() you ensure that the next BotHandler is run.
            } catch {
                await context.sendActivity("Sorry. I couldn't understand you. Could you please rephrase it.");
            }
            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const richContent = await import('./richContent');
            const welcomeText = richContent.welcome();
            for (const member of membersAdded) {
                if (member.id !== context.activity.recipient.id) {
                    await context.sendActivities(welcomeText);
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }

    private matchIntent(text) {
        let matchedIntent: string;
        Object.keys(intents).forEach((key) => {
            const currentIntent = intents[key];
            if (currentIntent.some((e: string) => e === text)) {
                matchedIntent = key;
            }
        });
        return matchedIntent;
    }
}
