/* eslint-disable no-template-curly-in-string */
export const intentConfig = [
    {
        intent: 'agentTransfer',
        messages: {
            default: [
                {
                    contentType: 'PlainText',
                    content:
                        'This option transfers the conversation to the particular agent matching the provided agentId and skill. If the agent is not available, the conversation will be transferred to an available agent with the same skill.',
                },
                { contentType: 'PlainText', content: 'You will be transferred to a specific skill and agent.' },
                { contentType: 'CustomPayload', content: 'agentTransfer' },
            ],
        },
        utterance: ['transfer to agent', 'agent transfer', 'transfer agent'],
    },
    {
        intent: 'appleAuth',
        messages: {
            default: [
                {
                    contentType: 'PlainText',
                    content:
                        'The Apple Business Chat messaging channel now allows you to send an authentication request to consumers (only from iOS 12 onwards) using an OAuth 2.0 provider. The consumers then respond to the authentication request with their user/password credentials which can be validated against the OAuth 2.0 provider.',
                },
                {
                    contentType: 'PlainText',
                    content:
                        'Please note that the requestIdentifier field must be unique for each message. Therefore, you should replace the requestIdentifier before testing. You will also need your own public key.',
                },
                { contentType: 'PlainText', content: 'See the following example:' },
                { contentType: 'CustomPayload', content: 'appleAuth' },
                { contentType: 'PlainText', content: 'In what else are you interested?' },
            ],
        },
        utterance: ['apple auth', 'auth'],
    },
    {
        intent: 'endConversation',
        messages: {
            default: [
                { contentType: 'PlainText', content: 'The action "conversation closed" was triggered.' },
                {
                    contentType: 'PlainText',
                    content: 'Thanks for trying out the rich content and vendor actions. Goodbye.',
                },
                { contentType: 'CustomPayload', content: 'endConversation' },
            ],
        },
        utterance: ['close conversation', 'bye', 'cya', 'close'],
    },
    {
        intent: 'delayPauseConversation',
        messages: {
            default: [
                {
                    contentType: 'PlainText',
                    content:
                        'It is possible to send an event of type "delay" before regular content events and actions. This specifies the time the bot will wait before displaying the next message. The delay is given in seconds and typing means if typing indicator while delay is happening.',
                },
                { contentType: 'PlainText', content: 'This message is sent before the 2 seconds delay.' },
                { contentType: 'CustomPayload', content: 'delay' },
                { contentType: 'PlainText', content: 'This message is sent after 2 seconds delay.' },
                { contentType: 'CustomPayload', content: 'delayPauseConversation' },
            ],
        },
        utterance: ['delay', 'delay conversation', 'pause', 'pause conversation', 'delay message'],
    },
    {
        intent: 'encodedMetadata',
        messages: {
            CustomIntegration: [
                {
                    contentType: 'PlainText',
                    content:
                        'The Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing conversation metadata input field.',
                },
                {
                    contentType: 'PlainText',
                    content: 'To use the feature please reach out to a LivePerson employee.',
                },
                { contentType: 'PlainText', content: 'Hello I am a response with encoded metadata!' },
                { contentType: 'CustomPayload', content: 'encodedMetadata' },
            ],
            default: [
                {
                    contentType: 'PlainText',
                    content:
                        'The Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing conversation metadata input field.',
                },
                {
                    contentType: 'PlainText',
                    content: 'To use the feature please reach out to a LivePerson employee.',
                },
                { contentType: 'CustomPayload', content: 'encodedMetadata' },
                { contentType: 'CustomPayload', content: 'encodedMetadataQR' },
            ],
        },
        utterance: ['encoded', 'encoded metadata'],
    },
    {
        intent: 'intentInformation',
        messages: {
            default: [],
            CustomIntegration: [
                {
                    contentType: 'PlainText',
                    content:
                        'To provide some more information and context alongside the messages to the consumer, you can define intent information via the context property. The defined intent will then be displayed in the Agent Escalation Summary Widget.',
                },
                { contentType: 'CustomPayload', content: 'intentInformation' },
            ],
        },
        utterance: [],
    },
    {
        intent: 'invokeFunction',
        messages: {
            CustomIntegration: [
                {
                    contentType: 'PlainText',
                    content:
                        'During a conversation, it is possible to trigger a LivePerson Function that is deployed to the LivePerson Functions (Function as a Service) platform. This provides a way to run custom logic with a bot.',
                },
                {
                    contentType: 'PlainText',
                    content:
                        'For more information about the LivePerson Functions possibilities with Third Party Bots please check out the following link https://developers.liveperson.com/third-party-bots-custom-integration.html',
                },
                { contentType: 'CustomPayload', content: 'invokeFunction' },
            ],
            default: [
                {
                    contentType: 'PlainText',
                    content:
                        'During a conversation, it is possible to trigger a LivePerson Function that is deployed to the LivePerson Functions (Function as a Service) platform. This provides a way to run custom logic with a bot.',
                },
                {
                    contentType: 'PlainText',
                    content:
                        'For more information about the LivePerson Functions possibilities with Third Party Bots please check out the following link https://developers.liveperson.com/third-party-bots-custom-integration.html',
                },
                { contentType: 'CustomPayload', content: 'invokeFunction' },
                { contentType: 'CustomPayload', content: 'invokeFunctionQR' },
            ],
        },
        utterance: ['Invoke function', 'function', 'invoke'],
    },
    {
        intent: 'lineCard',
        messages: {
            CustomIntegration: [
                {
                    contentType: 'PlainText',
                    content:
                        'Use LINE cards to send a message with an image, title, text and multiple buttons with actions.The card contains the following elements: Title, subtitle, image and up to 4 buttons (publish text and link)',
                },
                { contentType: 'CustomPayload', content: 'lineCard' },
            ],
            Lex: [
                {
                    contentType: 'PlainText',
                    content:
                        'Use LINE cards to send a message with an image, title, text and multiple buttons with actions.The card contains the following elements: Title, subtitle, image and up to 4 buttons (publish text and link)',
                },
                { contentType: 'CustomPayload', content: 'lineCard' },
                { contentType: 'CustomPayload', content: 'lineCardQR' },
            ],
            default: [
                {
                    contentType: 'PlainText',
                    content:
                        'Use LINE cards to send a message with an image, title, text and multiple buttons with actions.The card contains the following elements: Title, subtitle, image and up to 4 buttons (publish text and link)',
                },
                { contentType: 'CustomPayload', content: 'lineCard' },
                { contentType: 'CustomPayload', content: 'lineCardQR' },
            ],
        },
        utterance: ['Line card'],
    },
    {
        intent: 'lineCarousel',
        messages: {
            CustomIntegration: [
                {
                    contentType: 'PlainText',
                    content:
                        'The LINE carousel is a horizontally scrollable carousel of up to 10 rich cards. Each card can include the following elements: Title, subtitle, image and up to 3 buttons.',
                },
                {
                    contentType: 'PlainText',
                    content: 'Please note that the carousel items needs to have the same length.',
                },
                { contentType: 'CustomPayload', content: 'lineCarousel' },
            ],
            default: [
                {
                    contentType: 'PlainText',
                    content:
                        'The LINE carousel is a horizontally scrollable carousel of up to 10 rich cards. Each card can include the following elements: Title, subtitle, image and up to 3 buttons.',
                },
                {
                    contentType: 'PlainText',
                    content: 'Please note that the carousel items needs to have the same length.',
                },
                { contentType: 'CustomPayload', content: 'lineCarousel' },
                { contentType: 'CustomPayload', content: 'lineCarouselQR' },
            ],
        },
        utterance: ['line carousel'],
    },
    {
        intent: 'privateMessage',
        messages: {
            CustomIntegration: [
                {
                    contentType: 'PlainText',
                    content:
                        'It is possible to send a private text message from the Live Engage (LE-UI) via agent workspace. This feature can now be used via the Third-Party bots as well. This will allow Brands to define private message text within the conversational flow of the bot. These messages are published into the conversation for other Agent/Manger participants. This enables Brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising on next actions the handover agent should take.',
                },
                {
                    contentType: 'PlainText',
                    content:
                        'Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with a combination of actions (e.g. Transfer) as well.',
                },
                {
                    contentType: 'PlainText',
                    content:
                        'The private message is not visible in the messenger. You can see the private message in the Conversational Cloud.',
                },
                { contentType: 'CustomPayload', content: 'privateMessage' },
            ],
            default: [
                {
                    contentType: 'PlainText',
                    content:
                        'It is possible to send a private text message from the Live Engage (LE-UI) via agent workspace. This feature can now be used via the Third-Party bots as well. This will allow Brands to define private message text within the conversational flow of the bot. These messages are published into the conversation for other Agent/Manger participants. This enables Brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising on next actions the handover agent should take.',
                },
                {
                    contentType: 'PlainText',
                    content:
                        'Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with a combination of actions (e.g. Transfer) as well.',
                },
                {
                    contentType: 'PlainText',
                    content:
                        'The private message is not visible in the messenger. You can see the private message in the Conversational Cloud.',
                },
                { contentType: 'CustomPayload', content: 'privateMessage' },
                { contentType: 'CustomPayload', content: 'privateMessageQR' },
            ],
        },
        utterance: ['private message'],
    },
    {
        intent: 'skillTransfer',
        messages: {
            default: [
                {
                    contentType: 'PlainText',
                    content: 'This option transfers the conversation to the next available agent using the provided skill.',
                },
                { contentType: 'PlainText', content: 'You will be transferred to the given skill.' },
                { contentType: 'CustomPayload', content: 'skillTransfer' },
            ],
        },
        utterance: ['skill transfer', 'transfer to skill', 'transfer skill'],
    },
    {
        intent: 'web',
        messages: {
            CustomIntegration: [],
            default: [{ contentType: 'CustomPayload', content: 'webDefault' }],
        },
        utterance: ['Web', 'web rich content'],
    },
    {
        intent: 'webCard',
        messages: {
            CustomIntegration: [
                {
                    contentType: 'PlainText',
                    content:
                        'The very basic structured content elements that can contain either/or elements, template, styling and actions.',
                },
                { contentType: 'PlainText', content: 'See the following example:' },
                { contentType: 'CustomPayload', content: 'webCard' },
            ],
            default: [
                {
                    contentType: 'PlainText',
                    content:
                        'The very basic structured content elements that can contain either/or elements, template, styling and actions.',
                },
                { contentType: 'PlainText', content: 'See the following example:' },
                { contentType: 'CustomPayload', content: 'webCard' },
                { contentType: 'CustomPayload', content: 'webCardQR' },
            ],
        },
        utterance: ['web card'],
    },
    {
        intent: 'webCarousel',
        messages: {
            CustomIntegration: [
                {
                    contentType: 'PlainText',
                    content:
                        'A horizontal representation of 2-10 Structured Content cards of the same business logic and structure. The carousel format can support a variety of businesses and needs to showcase service offerings, events and more.',
                },
                { contentType: 'PlainText', content: 'See the following example:' },
                { contentType: 'CustomPayload', content: 'webCarousel' },
            ],
            default: [
                {
                    contentType: 'PlainText',
                    content:
                        'A horizontal representation of 2-10 Structured Content cards of the same business logic and structure. The carousel format can support a variety of businesses and needs to showcase service offerings, events and more.',
                },
                { contentType: 'PlainText', content: 'See the following example:' },
                { contentType: 'CustomPayload', content: 'webCarousel' },
                { contentType: 'CustomPayload', content: 'webCarouselQR' },
            ],
        },
        utterance: ['web carousel'],
    },
    {
        intent: 'welcome_Apple',
        messages: {
            IbmWatson: [
                {
                    contentType: 'PlainText',
                    content: "Hello, I'm here to show how RichContent and specific vendor actions are working with IBM Watson.",
                },
                {
                    contentType: 'PlainText',
                    content:
                        'I detected the messaging channel we are communicating on as Apple Business Chat.\n\nUnfortunately, ABC does not offer Quick Reply functionality, so you will have to answer my questions in written form.',
                },
                {
                    contentType: 'PlainText',
                    content: 'What are you interested in?\n\n(Type "Rich Content" or "Vendor Actions")',
                },
            ],
        },
        utterance: ['Hello', 'Hi', 'Welcome'],
    },
    {
        intent: 'welcome_WhatsApp',
        messages: {
            IbmWatson: [
                {
                    contentType: 'PlainText',
                    content: "Hello, I'm here to show how RichContent and specific vendor actions are working with IBM Watson.",
                },
                {
                    contentType: 'PlainText',
                    content:
                        'I detected the messaging channel we are communicating on as WhatsApp.\n\nUnfortunately, WhatsApp does not offer Quick Reply functionality, so you will have to answer my questions in written form.',
                },
                {
                    contentType: 'PlainText',
                    content: 'What are you interested in?\n\n(Type "Rich Content" or "Vendor Actions")',
                },
            ],
        },
        utterance: ['Hello', 'Hi', 'Welcome'],
    },
    {
        intent: 'welcome',
        messages: {
            CustomIntegration: [],
            IbmWatson: [
                {
                    contentType: 'PlainText',
                    content: "Hello, I'm here to show how RichContent and specific vendor actions are working with IBM Watson.",
                },
                { contentType: 'CustomPayload', content: 'welcome' },
            ],
            DialogflowES: [
                {
                    contentType: 'PlainText',
                    content: "Hello, I'm here to show how RichContent and specific vendor actions are working with Dialogflow ES.",
                },
                {
                    contentType: 'PlainText',
                    content:
                        'If you don\'t see quick replies below the next message, you are probably coming from WhatsApp or Apple Business Chat. They don\'t support quick replies, so you have to type in the options: "Rich Content text based" or "Vendor Actions text based".',
                },
                { contentType: 'CustomPayload', content: 'welcome' },
            ],
            Composer: [
                {
                    contentType: 'PlainText',
                    content: "Hello, I'm here to show how RichContent and specific vendor actions are working with Microsoft Composer.",
                },
                {
                    contentType: 'PlainText',
                    content:
                        'If you don\'t see quick replies below the next message, you are probably coming from WhatsApp or Apple Business Chat. They don\'t support quick replies, so you have to type in the options: "Rich Content text based" or "Vendor Actions text based".',
                },
                { contentType: 'CustomPayload', content: 'welcome' },
            ],
            BotFramework: [
                {
                    contentType: 'PlainText',
                    content:
                        "Hello, I'm here to show how RichContent and specific vendor actions are working with the Microsoft Bot Framework",
                },
                {
                    contentType: 'PlainText',
                    content:
                        'If you don\'t see quick replies below the next message, you are probably coming from WhatsApp or Apple Business Chat. They don\'t support quick replies, so you have to type in the options: "Rich Content text based" or "Vendor Actions text based".',
                },
                { contentType: 'CustomPayload', content: 'welcome' },
            ],
            default: [
                {
                    contentType: 'PlainText',
                    content: "Hello, I'm here to show how RichContent and specific vendor actions are working with Amazon Lex.",
                },
                {
                    contentType: 'PlainText',
                    content:
                        'If you don\'t see quick replies below the next message, you are probably coming from WhatsApp or Apple Business Chat. They don\'t support quick replies, so you have to type in the options: "Rich Content text based" or "Vendor Actions text based".',
                },
                { contentType: 'CustomPayload', content: 'welcome' },
            ],
        },
        utterance: ['Hello', 'Hi', 'Welcome', 'WELCOME-INTENT'],
    },
    {
        intent: 'Anything else',
        messages: {
            IbmWatson: [
                {
                    contentType: 'PlainText',
                    content: "I didn't understand. You can try rephrasing.",
                },
            ],
        },
        utterance: [],
    },
];

export const lexResult = {
    metadata: {
        schemaVersion: '1.0',
        importType: 'LEX',
        importFormat: 'JSON',
    },
    resource: {
        name: 'AmazonLexTemplates',
        version: '1',
        intents: [
            {
                name: 'agentTransfer',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['transfer to agent', 'agent transfer', 'transfer agent'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content:
                                'This option transfers the conversation to the particular agent matching the provided agentId and skill. If the agent is not available, the conversation will be transferred to an available agent with the same skill.',
                        },
                        {
                            groupNumber: 2,
                            contentType: 'PlainText',
                            content: 'You will be transferred to a specific skill and agent.',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'CustomPayload',
                            content:
                                '{"type":"ACTION","params":{"action":"TRANSFER","data":{"skill":"SpecificAgentSkill","agentId":"1005369632"}}}',
                        },
                    ],
                },
            },
            {
                name: 'appleAuth',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['apple auth', 'auth'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content:
                                'The Apple Business Chat messaging channel now allows you to send an authentication request to consumers (only from iOS 12 onwards) using an OAuth 2.0 provider. The consumers then respond to the authentication request with their user/password credentials which can be validated against the OAuth 2.0 provider.',
                        },
                        {
                            groupNumber: 2,
                            contentType: 'PlainText',
                            content:
                                'Please note that the requestIdentifier field must be unique for each message. Therefore, you should replace the requestIdentifier before testing. You will also need your own public key.',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'PlainText',
                            content: 'See the following example:',
                        },
                        {
                            groupNumber: 4,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[{"type":"BusinessChatMessage","receivedMessage":{"title":"Sign In to LivePerson","subtitle":"Thank you","imageURL":"https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png","style":"small"},"replyMessage":{"title":"You Signed in","subtitle":"Thank you","imageURL":"https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png","style":"small"}},{"type":"ConnectorAuthenticationRequest","requestIdentifier":"72af1629-54f1-4dba-a0f6-90f606896bd5","apple":{"oauth2":{"responseEncryptionKey":"AAAAC3NzaC1lZDI1NTE5AAAAIPQwXxHgHXafKYObBs6n45BKtMlPCAa1ddeIYqWTMigh"}}}],"structuredContent":{"tag":"authentication","type":"horizontal","elements":[{"type":"image","url":"https://i.imgur.com/8meDl0W.jpeg"},{"type":"text","text":"authentication details"}]}}',
                        },
                        {
                            groupNumber: 5,
                            contentType: 'PlainText',
                            content: 'In what else are you interested?',
                        },
                    ],
                },
            },
            {
                name: 'endConversation',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['close conversation', 'bye', 'cya', 'close'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content: 'The action "conversation closed" was triggered.',
                        },
                        {
                            groupNumber: 2,
                            contentType: 'PlainText',
                            content: 'Thanks for trying out the rich content and vendor actions. Goodbye.',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'CustomPayload',
                            content: '{"type":"ACTION","params":{"action":"CLOSE_CONVERSATION"}}',
                        },
                    ],
                },
            },
            {
                name: 'delayPauseConversation',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['delay', 'delay conversation', 'pause', 'pause conversation', 'delay message'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content:
                                'It is possible to send an event of type "delay" before regular content events and actions. This specifies the time the bot will wait before displaying the next message. The delay is given in seconds and typing means if typing indicator while delay is happening.',
                        },
                        {
                            groupNumber: 2,
                            contentType: 'PlainText',
                            content: 'This message is sent before the 2 seconds delay.',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'CustomPayload',
                            content: '{"delay":2,"typing":true}',
                        },
                        {
                            groupNumber: 4,
                            contentType: 'PlainText',
                            content: 'This message is sent after 2 seconds delay.',
                        },
                        {
                            groupNumber: 5,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Rich Content","click":{"actions":[{"type":"publishText","text":"Rich Content"}],"metadata":[]}}]},"message":"In what else are you interested?"}}',
                        },
                    ],
                },
            },
            {
                name: 'encodedMetadata',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['encoded', 'encoded metadata'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content:
                                'The Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing conversation metadata input field.',
                        },
                        {
                            groupNumber: 2,
                            contentType: 'PlainText',
                            content: 'To use the feature please reach out to a LivePerson employee.',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'CustomPayload',
                            content:
                                '{"textResponse":"Hello I am a text response with encoded metadata!","encodedMetadata":"ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ=="}',
                        },
                        {
                            groupNumber: 4,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Rich Content","click":{"actions":[{"type":"publishText","text":"Rich Content"}],"metadata":[]}}]},"message":"In what else are you interested?"}}',
                        },
                    ],
                },
            },
            {
                name: 'invokeFunction',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['Invoke function', 'function', 'invoke'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content:
                                'During a conversation, it is possible to trigger a LivePerson Function that is deployed to the LivePerson Functions (Function as a Service) platform. This provides a way to run custom logic with a bot.',
                        },
                        {
                            groupNumber: 2,
                            contentType: 'PlainText',
                            content:
                                'For more information about the LivePerson Functions possibilities with Third Party Bots please check out the following link https://developers.liveperson.com/third-party-bots-custom-integration.html',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'CustomPayload',
                            content:
                                '{"type":"ACTION","params":{"action":"INVOCATION","data":{"lambdaUuid":"6ade2140-617a-4062-bdf5-cd0e2dab8b81","payload":{"message":"Message from a FaaS Function"},"failOnError":false}}}',
                        },
                        {
                            groupNumber: 4,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Rich Content","click":{"actions":[{"type":"publishText","text":"Rich Content"}],"metadata":[]}}]},"message":"In what else are you interested?"}}',
                        },
                    ],
                },
            },
            {
                name: 'lineCard',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['Line card'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content:
                                'Use LINE cards to send a message with an image, title, text and multiple buttons with actions.The card contains the following elements: Title, subtitle, image and up to 4 buttons (publish text and link)',
                        },
                        {
                            groupNumber: 2,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"type":"vertical","tag":"generic","alt":"LivePerson","elements":[{"type":"vertical","elements":[{"type":"image","url":"https://i.imgur.com/8meDl0W.jpeg","tooltip":"LivePerson"},{"type":"text","tag":"title","text":"LivePerson","tooltip":"Title"},{"type":"text","tag":"subtitle","text":"Connecting Brands to people","tooltip":"subtitle"},{"type":"button","tooltip":"","title":"Publish text example","click":{"actions":[{"type":"publishText","text":"Publish text example"}]}},{"type":"button","tooltip":"LivePerson Homepage","title":"LivePerson Homepage","click":{"actions":[{"type":"link","name":"URL button tap","uri":"https://www.liveperson.com"}]}}]}]}}',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Carousel","click":{"actions":[{"type":"publishText","text":"Line Carousel"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}}]},"message":"In what else are you interested?"}}',
                        },
                    ],
                },
            },
            {
                name: 'lineCarousel',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['line carousel'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content:
                                'The LINE carousel is a horizontally scrollable carousel of up to 10 rich cards. Each card can include the following elements: Title, subtitle, image and up to 3 buttons.',
                        },
                        {
                            groupNumber: 2,
                            contentType: 'PlainText',
                            content: 'Please note that the carousel items needs to have the same length.',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"type":"carousel","padding":10,"alt":"LivePerson","elements":[{"type":"vertical","tag":"generic","elements":[{"type":"vertical","elements":[{"type":"image","url":"https://i.imgur.com/8meDl0W.jpeg","tooltip":"LivePerson"},{"type":"text","tag":"title","text":"LivePerson"},{"type":"text","tag":"subtitle","text":"Custom AI-Powered Messaging","tooltip":"Custom AI-Powered Messaging"},{"type":"button","title":"Follow Link","click":{"actions":[{"name":"LivePerson HomePage","type":"link","uri":"https://www.liveperson.com"}]}}]}]},{"type":"vertical","tag":"generic","elements":[{"type":"vertical","elements":[{"type":"image","url":"https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg","tooltip":"Bella"},{"type":"text","tag":"title","text":"Bella"},{"type":"text","tag":"subtitle","text":"Bella loves me"},{"type":"button","title":"Follow Link","click":{"actions":[{"type":"link","name":"Flowers","uri":"https://bellaloves.me"}]}}]}]}]}}',
                        },
                        {
                            groupNumber: 4,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Card","click":{"actions":[{"type":"publishText","text":"Line Card"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}}]},"message":"In what else are you interested?"}}',
                        },
                    ],
                },
            },
            {
                name: 'privateMessage',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['private message'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content:
                                'It is possible to send a private text message from the Live Engage (LE-UI) via agent workspace. This feature can now be used via the Third-Party bots as well. This will allow Brands to define private message text within the conversational flow of the bot. These messages are published into the conversation for other Agent/Manger participants. This enables Brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising on next actions the handover agent should take.',
                        },
                        {
                            groupNumber: 2,
                            contentType: 'PlainText',
                            content:
                                'Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with a combination of actions (e.g. Transfer) as well.',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'PlainText',
                            content:
                                'The private message is not visible in the messenger. You can see the private message in the Conversational Cloud.',
                        },
                        {
                            groupNumber: 4,
                            contentType: 'CustomPayload',
                            content:
                                '{"messageAudience":"AGENTS_AND_MANAGERS","text":"This is a private message for a Conversational Cloud agent from a third party bot."}',
                        },
                        {
                            groupNumber: 5,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Rich Content","click":{"actions":[{"type":"publishText","text":"Rich Content"}],"metadata":[]}}]},"message":"In what else are you interested?"}}',
                        },
                    ],
                },
            },
            {
                name: 'skillTransfer',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['skill transfer', 'transfer to skill', 'transfer skill'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content: 'This option transfers the conversation to the next available agent using the provided skill.',
                        },
                        {
                            groupNumber: 2,
                            contentType: 'PlainText',
                            content: 'You will be transferred to the given skill.',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'CustomPayload',
                            content: '{"type":"ACTION","params":{"action":"TRANSFER","data":{"skill":"AgentSkill"}}}',
                        },
                    ],
                },
            },
            {
                name: 'web',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['Web', 'web rich content'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Card","click":{"actions":[{"type":"publishText","text":"Web Card"}]}},{"type":"button","tooltip":"","title":"Carousel","click":{"actions":[{"type":"publishText","text":"Web Carousel"}]}},{"type":"button","tooltip":"","title":"Date Picker","click":{"actions":[{"type":"publishText","text":"Web Date Picker"}]}},{"type":"button","tooltip":"","title":"Schedule Slot List","click":{"actions":[{"type":"publishText","text":"Web Schedule Slot List"}]}},{"type":"button","tooltip":"","title":"Multiple Checklist","click":{"actions":[{"type":"publishText","text":"Web Multiple Checklist"}]}}]},"message":"Which type of rich content do you want to see?"}}',
                        },
                    ],
                },
            },
            {
                name: 'webCard',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['web card'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content:
                                'The very basic structured content elements that can contain either/or elements, template, styling and actions.',
                        },
                        {
                            groupNumber: 2,
                            contentType: 'PlainText',
                            content: 'See the following example:',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"type":"vertical","elements":[{"type":"image","url":"https://i.imgur.com/8meDl0W.jpeg","tooltip":"image tooltip"},{"type":"text","text":"LivePerson","tooltip":"text tooltip"},{"type":"text","text":"Connecting Brands to people","tooltip":"text tooltip"},{"type":"button","tooltip":"LivePerson Homepage","title":"LivePerson Homepage","click":{"actions":[{"type":"link","name":"URL button tap","uri":"https://www.liveperson.com"}]}},{"type":"button","title":"Start Navigation","click":{"actions":[{"type":"navigate","lo":40.75614,"la":-73.99924}]}}]}}',
                        },
                        {
                            groupNumber: 4,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Carousel","click":{"actions":[{"type":"publishText","text":"Web Carousel"}]}},{"type":"button","tooltip":"","title":"Date Picker","click":{"actions":[{"type":"publishText","text":"Web Date Picker"}]}},{"type":"button","tooltip":"","title":"Schedule Slot List","click":{"actions":[{"type":"publishText","text":"Web Schedule Slot List"}]}},{"type":"button","tooltip":"","title":"Multiple Checklist","click":{"actions":[{"type":"publishText","text":"Web Multiple Checklist"}]}},{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}]}}]},"message":"Which type of rich content do you want to see?"}}',
                        },
                    ],
                },
            },
            {
                name: 'webCarousel',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['web carousel'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content:
                                'A horizontal representation of 2-10 Structured Content cards of the same business logic and structure. The carousel format can support a variety of businesses and needs to showcase service offerings, events and more.',
                        },
                        {
                            groupNumber: 2,
                            contentType: 'PlainText',
                            content: 'See the following example:',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"image","url":"https://i.imgur.com/8meDl0W.jpeg","tooltip":"image tooltip"},{"type":"text","text":"LivePerson","tooltip":"text tooltip"},{"type":"text","text":"Connecting Brands to people","tooltip":"text tooltip"},{"type":"button","tooltip":"LivePerson Homepage","title":"LivePerson Homepage","click":{"actions":[{"type":"link","name":"URL button tap","uri":"https://www.liveperson.com"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg","tooltip":"image tooltip"},{"type":"text","text":"Bella","tooltip":"text tooltip"},{"type":"text","text":"Bella loves me","tooltip":"text tooltip"},{"type":"button","tooltip":"Bella Homepage","title":"Bella Homepage","click":{"actions":[{"type":"link","name":"URL button tap","uri":"https://bellaloves.me/"}]}}]}]}}',
                        },
                        {
                            groupNumber: 4,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Card","click":{"actions":[{"type":"publishText","text":"Web Card"}]}},{"type":"button","tooltip":"","title":"Date Picker","click":{"actions":[{"type":"publishText","text":"Web Date Picker"}]}},{"type":"button","tooltip":"","title":"Schedule Slot List","click":{"actions":[{"type":"publishText","text":"Web Schedule Slot List"}]}},{"type":"button","tooltip":"","title":"Multiple Checklist","click":{"actions":[{"type":"publishText","text":"Web Multiple Checklist"}]}},{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}]}}]},"message":"Which type of rich content do you want to see?"}}',
                        },
                    ],
                },
            },
            {
                name: 'welcome',
                version: '1',
                fulfillmentActivity: {
                    type: 'ReturnIntent',
                },
                sampleUtterances: ['Hello', 'Hi', 'Welcome', 'WELCOME-INTENT'],
                slots: [],
                conclusionStatement: {
                    messages: [
                        {
                            groupNumber: 1,
                            contentType: 'PlainText',
                            content: "Hello, I'm here to show how RichContent and specific vendor actions are working with Amazon Lex.",
                        },
                        {
                            groupNumber: 2,
                            contentType: 'PlainText',
                            content:
                                'If you don\'t see quick replies below the next message, you are probably coming from WhatsApp or Apple Business Chat. They don\'t support quick replies, so you have to type in the options: "Rich Content text based" or "Vendor Actions text based".',
                        },
                        {
                            groupNumber: 3,
                            contentType: 'CustomPayload',
                            content:
                                '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Rich Content","click":{"actions":[{"type":"publishText","text":"Rich Content"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}}]},"message":"What are you interested in?"}}',
                        },
                    ],
                },
            },
        ],
        voiceId: '0',
        childDirected: false,
        locale: 'en-US',
        idleSessionTTLInSeconds: 300,
        clarificationPrompt: {
            messages: [
                {
                    contentType: 'PlainText',
                    content: 'Sorry, can you please repeat that? Or type rich content or vendor actions.',
                },
            ],
            maxAttempts: 5,
        },
        abortStatement: {
            messages: [
                {
                    contentType: 'PlainText',
                    content: 'Sorry, I could not understand. Goodbye.',
                },
            ],
        },
        detectSentiment: false,
        enableModelImprovements: true,
    },
};

export const customIntegrationResult = [
    {
        fileName: 'apple.js',
        content:
            'function lambda(input, callback) {\n\n    const appleAuth = {\n        "messages": [\n            "The Apple Business Chat messaging channel now allows you to send an authentication request to consumers (only from iOS 12 onwards) using an OAuth 2.0 provider. The consumers then respond to the authentication request with their user/password credentials which can be validated against the OAuth 2.0 provider.",\n            "Please note that the requestIdentifier field must be unique for each message. Therefore, you should replace the requestIdentifier before testing. You will also need your own public key.",\n            "See the following example:",\n            {\n                "metadata": [\n                    {\n                        "type": "BusinessChatMessage",\n                        "receivedMessage": {\n                            "title": "Sign In to LivePerson",\n                            "subtitle": "Thank you",\n                            "imageURL": "https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png",\n                            "style": "small"\n                        },\n                        "replyMessage": {\n                            "title": "You Signed in",\n                            "subtitle": "Thank you",\n                            "imageURL": "https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png",\n                            "style": "small"\n                        }\n                    },\n                    {\n                        "type": "ConnectorAuthenticationRequest",\n                        "requestIdentifier": "72af1629-54f1-4dba-a0f6-90f606896bd5",\n                        "apple": {\n                            "oauth2": {\n                                "responseEncryptionKey": "AAAAC3NzaC1lZDI1NTE5AAAAIPQwXxHgHXafKYObBs6n45BKtMlPCAa1ddeIYqWTMigh"\n                            }\n                        }\n                    }\n                ],\n                "structuredContent": {\n                    "tag": "authentication",\n                    "type": "horizontal",\n                    "elements": [\n                        {\n                            "type": "image",\n                            "url": "https://i.imgur.com/8meDl0W.jpeg"\n                        },\n                        {\n                            "type": "text",\n                            "text": "authentication details"\n                        }\n                    ]\n                }\n            },\n            "In what else are you interested?"\n        ],\n        "context": {}\n    }\n\n    callback(null, appleAuth);\n}',
    },
    {
        fileName: 'facebook.js',
        content: 'function lambda(input, callback) {\n\n    callback(null, undefined);\n}',
    },
    {
        fileName: 'gbm.js',
        content: 'function lambda(input, callback) {\n\n    callback(null, undefined);\n}',
    },
    {
        fileName: 'line.js',
        content:
            'function lambda(input, callback) {\n\n    const lineCard = {\n        "messages": [\n            "Use LINE cards to send a message with an image, title, text and multiple buttons with actions.The card contains the following elements: Title, subtitle, image and up to 4 buttons (publish text and link)",\n            {\n                "metadata": [],\n                "structuredContent": {\n                    "type": "vertical",\n                    "tag": "generic",\n                    "alt": "LivePerson",\n                    "elements": [\n                        {\n                            "type": "vertical",\n                            "elements": [\n                                {\n                                    "type": "image",\n                                    "url": "https://i.imgur.com/8meDl0W.jpeg",\n                                    "tooltip": "LivePerson"\n                                },\n                                {\n                                    "type": "text",\n                                    "tag": "title",\n                                    "text": "LivePerson",\n                                    "tooltip": "Title"\n                                },\n                                {\n                                    "type": "text",\n                                    "tag": "subtitle",\n                                    "text": "Connecting Brands to people",\n                                    "tooltip": "subtitle"\n                                },\n                                {\n                                    "type": "button",\n                                    "tooltip": "",\n                                    "title": "Publish text example",\n                                    "click": {\n                                        "actions": [\n                                            {\n                                                "type": "publishText",\n                                                "text": "Publish text example"\n                                            }\n                                        ]\n                                    }\n                                },\n                                {\n                                    "type": "button",\n                                    "tooltip": "LivePerson Homepage",\n                                    "title": "LivePerson Homepage",\n                                    "click": {\n                                        "actions": [\n                                            {\n                                                "type": "link",\n                                                "name": "URL button tap",\n                                                "uri": "https://www.liveperson.com"\n                                            }\n                                        ]\n                                    }\n                                }\n                            ]\n                        }\n                    ]\n                }\n            }\n        ],\n        "context": {}\n    }\n\n    const lineCarousel = {\n        "messages": [\n            "The LINE carousel is a horizontally scrollable carousel of up to 10 rich cards. Each card can include the following elements: Title, subtitle, image and up to 3 buttons.",\n            "Please note that the carousel items needs to have the same length.",\n            {\n                "metadata": [],\n                "structuredContent": {\n                    "type": "carousel",\n                    "padding": 10,\n                    "alt": "LivePerson",\n                    "elements": [\n                        {\n                            "type": "vertical",\n                            "tag": "generic",\n                            "elements": [\n                                {\n                                    "type": "vertical",\n                                    "elements": [\n                                        {\n                                            "type": "image",\n                                            "url": "https://i.imgur.com/8meDl0W.jpeg",\n                                            "tooltip": "LivePerson"\n                                        },\n                                        {\n                                            "type": "text",\n                                            "tag": "title",\n                                            "text": "LivePerson"\n                                        },\n                                        {\n                                            "type": "text",\n                                            "tag": "subtitle",\n                                            "text": "Custom AI-Powered Messaging",\n                                            "tooltip": "Custom AI-Powered Messaging"\n                                        },\n                                        {\n                                            "type": "button",\n                                            "title": "Follow Link",\n                                            "click": {\n                                                "actions": [\n                                                    {\n                                                        "name": "LivePerson HomePage",\n                                                        "type": "link",\n                                                        "uri": "https://www.liveperson.com"\n                                                    }\n                                                ]\n                                            }\n                                        }\n                                    ]\n                                }\n                            ]\n                        },\n                        {\n                            "type": "vertical",\n                            "tag": "generic",\n                            "elements": [\n                                {\n                                    "type": "vertical",\n                                    "elements": [\n                                        {\n                                            "type": "image",\n                                            "url": "https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg",\n                                            "tooltip": "Bella"\n                                        },\n                                        {\n                                            "type": "text",\n                                            "tag": "title",\n                                            "text": "Bella"\n                                        },\n                                        {\n                                            "type": "text",\n                                            "tag": "subtitle",\n                                            "text": "Bella loves me"\n                                        },\n                                        {\n                                            "type": "button",\n                                            "title": "Follow Link",\n                                            "click": {\n                                                "actions": [\n                                                    {\n                                                        "type": "link",\n                                                        "name": "Flowers",\n                                                        "uri": "https://bellaloves.me"\n                                                    }\n                                                ]\n                                            }\n                                        }\n                                    ]\n                                }\n                            ]\n                        }\n                    ]\n                }\n            }\n        ],\n        "context": {}\n    }\n\n    callback(null, lineCard);\n}',
    },
    {
        fileName: 'rcs.js',
        content: 'function lambda(input, callback) {\n\n    callback(null, undefined);\n}',
    },
    {
        fileName: 'web.js',
        content:
            'function lambda(input, callback) {\n\n    const webCard = {\n        "messages": [\n            "The very basic structured content elements that can contain either/or elements, template, styling and actions.",\n            "See the following example:",\n            {\n                "metadata": [],\n                "structuredContent": {\n                    "type": "vertical",\n                    "elements": [\n                        {\n                            "type": "image",\n                            "url": "https://i.imgur.com/8meDl0W.jpeg",\n                            "tooltip": "image tooltip"\n                        },\n                        {\n                            "type": "text",\n                            "text": "LivePerson",\n                            "tooltip": "text tooltip"\n                        },\n                        {\n                            "type": "text",\n                            "text": "Connecting Brands to people",\n                            "tooltip": "text tooltip"\n                        },\n                        {\n                            "type": "button",\n                            "tooltip": "LivePerson Homepage",\n                            "title": "LivePerson Homepage",\n                            "click": {\n                                "actions": [\n                                    {\n                                        "type": "link",\n                                        "name": "URL button tap",\n                                        "uri": "https://www.liveperson.com"\n                                    }\n                                ]\n                            }\n                        },\n                        {\n                            "type": "button",\n                            "title": "Start Navigation",\n                            "click": {\n                                "actions": [\n                                    {\n                                        "type": "navigate",\n                                        "lo": 40.75614,\n                                        "la": -73.99924\n                                    }\n                                ]\n                            }\n                        }\n                    ]\n                }\n            }\n        ],\n        "context": {}\n    }\n\n    const webCarousel = {\n        "messages": [\n            "A horizontal representation of 2-10 Structured Content cards of the same business logic and structure. The carousel format can support a variety of businesses and needs to showcase service offerings, events and more.",\n            "See the following example:",\n            {\n                "metadata": [],\n                "structuredContent": {\n                    "type": "carousel",\n                    "padding": 10,\n                    "elements": [\n                        {\n                            "type": "vertical",\n                            "elements": [\n                                {\n                                    "type": "image",\n                                    "url": "https://i.imgur.com/8meDl0W.jpeg",\n                                    "tooltip": "image tooltip"\n                                },\n                                {\n                                    "type": "text",\n                                    "text": "LivePerson",\n                                    "tooltip": "text tooltip"\n                                },\n                                {\n                                    "type": "text",\n                                    "text": "Connecting Brands to people",\n                                    "tooltip": "text tooltip"\n                                },\n                                {\n                                    "type": "button",\n                                    "tooltip": "LivePerson Homepage",\n                                    "title": "LivePerson Homepage",\n                                    "click": {\n                                        "actions": [\n                                            {\n                                                "type": "link",\n                                                "name": "URL button tap",\n                                                "uri": "https://www.liveperson.com"\n                                            }\n                                        ]\n                                    }\n                                }\n                            ]\n                        },\n                        {\n                            "type": "vertical",\n                            "elements": [\n                                {\n                                    "type": "image",\n                                    "url": "https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg",\n                                    "tooltip": "image tooltip"\n                                },\n                                {\n                                    "type": "text",\n                                    "text": "Bella",\n                                    "tooltip": "text tooltip"\n                                },\n                                {\n                                    "type": "text",\n                                    "text": "Bella loves me",\n                                    "tooltip": "text tooltip"\n                                },\n                                {\n                                    "type": "button",\n                                    "tooltip": "Bella Homepage",\n                                    "title": "Bella Homepage",\n                                    "click": {\n                                        "actions": [\n                                            {\n                                                "type": "link",\n                                                "name": "URL button tap",\n                                                "uri": "https://bellaloves.me/"\n                                            }\n                                        ]\n                                    }\n                                }\n                            ]\n                        }\n                    ]\n                }\n            }\n        ],\n        "context": {}\n    }\n\n    callback(null, webCard);\n}',
    },
    {
        fileName: 'whatsapp.js',
        content: 'function lambda(input, callback) {\n\n    callback(null, undefined);\n}',
    },
    {
        fileName: 'vendorActions.js',
        content:
            'function lambda(input, callback) {\n\n    const agentTransfer = {\n        "messages": [\n            "This option transfers the conversation to the particular agent matching the provided agentId and skill. If the agent is not available, the conversation will be transferred to an available agent with the same skill.",\n            "You will be transferred to a specific skill and agent."\n        ],\n        "context": {\n            "action": "TRANSFER",\n            "actionParameters": {\n                "skill": "SpecificAgentSkill",\n                "agentId": "3263077432"\n            }\n        }\n    }\n\n    const endConversation = {\n        "messages": [\n            "The action \\"conversation closed\\" was triggered.",\n            "Thanks for trying out the rich content and vendor actions. Goodbye."\n        ],\n        "context": {\n            "action": "CLOSE_CONVERSATION"\n        }\n    }\n\n    const delayPauseConversation = {\n        "messages": [\n            "It is possible to send an event of type \\"delay\\" before regular content events and actions. This specifies the time the bot will wait before displaying the next message. The delay is given in seconds and typing means if typing indicator while delay is happening.",\n            "This message is sent before the 2 seconds delay.",\n            {\n                "delay": 2,\n                "typing": true\n            },\n            "This message is sent after 2 seconds delay.",\n            {\n                "metadata": [],\n                "structuredContent": {\n                    "quickReplies": {\n                        "type": "quickReplies",\n                        "itemsPerRow": 8,\n                        "replies": [\n                            {\n                                "type": "button",\n                                "tooltip": "",\n                                "title": "Vendor Actions",\n                                "click": {\n                                    "actions": [\n                                        {\n                                            "type": "publishText",\n                                            "text": "Vendor Actions"\n                                        }\n                                    ],\n                                    "metadata": []\n                                }\n                            },\n                            {\n                                "type": "button",\n                                "tooltip": "",\n                                "title": "Rich Content",\n                                "click": {\n                                    "actions": [\n                                        {\n                                            "type": "publishText",\n                                            "text": "Rich Content"\n                                        }\n                                    ],\n                                    "metadata": []\n                                }\n                            }\n                        ]\n                    },\n                    "message": "In what else are you interested?"\n                }\n            }\n        ],\n        "context": {}\n    }\n\n    const encodedMetadata = {\n        "messages": [\n            "The Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing conversation metadata input field.",\n            "To use the feature please reach out to a LivePerson employee.",\n            "Hello I am a response with encoded metadata!"\n        ],\n        "context": {\n            "encodedMetadata": "ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ=="\n        }\n    }\n\n    const intentInformation = {\n        "messages": [\n            "To provide some more information and context alongside the messages to the consumer, you can define intent information via the context property. The defined intent will then be displayed in the Agent Escalation Summary Widget."\n        ],\n        "context": {\n            "intentId": "intent-info-example",\n            "intentName": "Intent information example.",\n            "confidenceScore": 1\n        }\n    }\n\n    const invokeFunction = {\n        "messages": [\n            "During a conversation, it is possible to trigger a LivePerson Function that is deployed to the LivePerson Functions (Function as a Service) platform. This provides a way to run custom logic with a bot.",\n            "For more information about the LivePerson Functions possibilities with Third Party Bots please check out the following link https://developers.liveperson.com/third-party-bots-custom-integration.html"\n        ],\n        "context": {\n            "action": "INVOCATION",\n            "actionParameters": {\n                "lambdaUuid": "6ade2140-617a-4062-bdf5-cd0e2dab8b81",\n                "payload": {\n                    "message": "Message from a FaaS Function"\n                },\n                "failOnError": false\n            }\n        }\n    }\n\n    const privateMessage = {\n        "messages": [\n            "It is possible to send a private text message from the Live Engage (LE-UI) via agent workspace. This feature can now be used via the Third-Party bots as well. This will allow Brands to define private message text within the conversational flow of the bot. These messages are published into the conversation for other Agent/Manger participants. This enables Brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising on next actions the handover agent should take.",\n            "Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with a combination of actions (e.g. Transfer) as well.",\n            "The private message is not visible in the messenger. You can see the private message in the Conversational Cloud.",\n            {\n                "messageAudience": "AGENTS_AND_MANAGERS",\n                "text": "This is a private message for a Conversational Cloud agent from a third party bot."\n            }\n        ],\n        "context": {}\n    }\n\n    const skillTransfer = {\n        "messages": [\n            "This option transfers the conversation to the next available agent using the provided skill.",\n            "You will be transferred to the given skill."\n        ],\n        "context": {\n            "action": "TRANSFER",\n            "actionParameters": {\n                "skill": "SpecificAgentSkill"\n            }\n        }\n    }\n\n    callback(null, agentTransfer);\n}',
    },
];

export const dialogflowESResult = [
    {
        fileName: 'intents/agentTransfer_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'transfer to agent',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'agent transfer',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'transfer agent',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/agentTransfer.json',
        content: {
            id: 'mockedUUID',
            name: 'agentTransfer',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: 'TRANSFER',
                    affectedContexts: [],
                    parameters: [
                        {
                            id: 'mockedUUID',
                            name: 'skill',
                            required: false,
                            dataType: '',
                            value: 'SpecificAgentSkill',
                            defaultValue: '',
                            isList: false,
                            prompts: [],
                            promptMessages: [],
                            noMatchPromptMessages: [],
                            noInputPromptMessages: [],
                            outputDialogContexts: [],
                        },
                        {
                            id: 'mockedUUID',
                            name: 'agentId',
                            required: false,
                            dataType: '',
                            value: '1005369632',
                            defaultValue: '',
                            isList: false,
                            prompts: [],
                            promptMessages: [],
                            noMatchPromptMessages: [],
                            noInputPromptMessages: [],
                            outputDialogContexts: [],
                        },
                    ],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'This option transfers the conversation to the particular agent matching the provided agentId and skill. If the agent is not available, the conversation will be transferred to an available agent with the same skill.',
                            ],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['You will be transferred to a specific skill and agent.'],
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/appleAuth_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'apple auth',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'auth',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/appleAuth.json',
        content: {
            id: 'mockedUUID',
            name: 'appleAuth',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: '',
                    affectedContexts: [],
                    parameters: [],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'The Apple Business Chat messaging channel now allows you to send an authentication request to consumers (only from iOS 12 onwards) using an OAuth 2.0 provider. The consumers then respond to the authentication request with their user/password credentials which can be validated against the OAuth 2.0 provider.',
                            ],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'Please note that the requestIdentifier field must be unique for each message. Therefore, you should replace the requestIdentifier before testing. You will also need your own public key.',
                            ],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['See the following example:'],
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [
                                    {
                                        type: 'BusinessChatMessage',
                                        receivedMessage: {
                                            title: 'Sign In to LivePerson',
                                            subtitle: 'Thank you',
                                            imageURL: 'https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png',
                                            style: 'small',
                                        },
                                        replyMessage: {
                                            title: 'You Signed in',
                                            subtitle: 'Thank you',
                                            imageURL: 'https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png',
                                            style: 'small',
                                        },
                                    },
                                    {
                                        type: 'ConnectorAuthenticationRequest',
                                        requestIdentifier: '72af1629-54f1-4dba-a0f6-90f606896bd5',
                                        apple: {
                                            oauth2: {
                                                responseEncryptionKey:
                                                    'AAAAC3NzaC1lZDI1NTE5AAAAIPQwXxHgHXafKYObBs6n45BKtMlPCAa1ddeIYqWTMigh',
                                            },
                                        },
                                    },
                                ],
                                structuredContent: {
                                    tag: 'authentication',
                                    type: 'horizontal',
                                    elements: [
                                        {
                                            type: 'image',
                                            url: 'https://i.imgur.com/8meDl0W.jpeg',
                                        },
                                        {
                                            type: 'text',
                                            text: 'authentication details',
                                        },
                                    ],
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['In what else are you interested?'],
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/endConversation_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'close conversation',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'bye',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'cya',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'close',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/endConversation.json',
        content: {
            id: 'mockedUUID',
            name: 'endConversation',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: 'CLOSE_CONVERSATION',
                    affectedContexts: [],
                    parameters: [],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['The action "conversation closed" was triggered.'],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['Thanks for trying out the rich content and vendor actions. Goodbye.'],
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/delayPauseConversation_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'delay',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'delay conversation',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'pause',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'pause conversation',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'delay message',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/delayPauseConversation.json',
        content: {
            id: 'mockedUUID',
            name: 'delayPauseConversation',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: '',
                    affectedContexts: [],
                    parameters: [],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'It is possible to send an event of type "delay" before regular content events and actions. This specifies the time the bot will wait before displaying the next message. The delay is given in seconds and typing means if typing indicator while delay is happening.',
                            ],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['This message is sent before the 2 seconds delay.'],
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                delay: 2,
                                typing: true,
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['This message is sent after 2 seconds delay.'],
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    quickReplies: {
                                        type: 'quickReplies',
                                        itemsPerRow: 8,
                                        replies: [
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Vendor Actions',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Vendor Actions',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Rich Content',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Rich Content',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                        ],
                                    },
                                    message: 'In what else are you interested?',
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/encodedMetadata_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'encoded',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'encoded metadata',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/encodedMetadata.json',
        content: {
            id: 'mockedUUID',
            name: 'encodedMetadata',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: '',
                    affectedContexts: [],
                    parameters: [],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'The Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing conversation metadata input field.',
                            ],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['To use the feature please reach out to a LivePerson employee.'],
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                textResponse: 'Hello I am a text response with encoded metadata!',
                                encodedMetadata: 'ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ==',
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    quickReplies: {
                                        type: 'quickReplies',
                                        itemsPerRow: 8,
                                        replies: [
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Vendor Actions',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Vendor Actions',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Rich Content',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Rich Content',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                        ],
                                    },
                                    message: 'In what else are you interested?',
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/invokeFunction_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'Invoke function',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'function',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'invoke',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/invokeFunction.json',
        content: {
            id: 'mockedUUID',
            name: 'invokeFunction',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: 'INVOCATION',
                    affectedContexts: [],
                    parameters: [
                        {
                            id: 'mockedUUID',
                            name: 'lambdaUuid',
                            required: false,
                            dataType: '',
                            value: '6ade2140-617a-4062-bdf5-cd0e2dab8b81',
                            defaultValue: '',
                            isList: false,
                            prompts: [],
                            promptMessages: [],
                            noMatchPromptMessages: [],
                            noInputPromptMessages: [],
                            outputDialogContexts: [],
                        },
                        {
                            id: 'mockedUUID',
                            name: 'payload',
                            required: false,
                            dataType: '',
                            value: '{ "message": "Message from a FaaS Function" }',
                            defaultValue: '',
                            isList: false,
                            prompts: [],
                            promptMessages: [],
                            noMatchPromptMessages: [],
                            noInputPromptMessages: [],
                            outputDialogContexts: [],
                        },
                        {
                            id: 'mockedUUID',
                            name: 'failOnError',
                            required: false,
                            dataType: '',
                            value: false,
                            defaultValue: '',
                            isList: false,
                            prompts: [],
                            promptMessages: [],
                            noMatchPromptMessages: [],
                            noInputPromptMessages: [],
                            outputDialogContexts: [],
                        },
                    ],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'During a conversation, it is possible to trigger a LivePerson Function that is deployed to the LivePerson Functions (Function as a Service) platform. This provides a way to run custom logic with a bot.',
                            ],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'For more information about the LivePerson Functions possibilities with Third Party Bots please check out the following link https://developers.liveperson.com/third-party-bots-custom-integration.html',
                            ],
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    quickReplies: {
                                        type: 'quickReplies',
                                        itemsPerRow: 8,
                                        replies: [
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Vendor Actions',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Vendor Actions',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Rich Content',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Rich Content',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                        ],
                                    },
                                    message: 'In what else are you interested?',
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/lineCard_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'Line card',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/lineCard.json',
        content: {
            id: 'mockedUUID',
            name: 'lineCard',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: '',
                    affectedContexts: [],
                    parameters: [],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'Use LINE cards to send a message with an image, title, text and multiple buttons with actions.The card contains the following elements: Title, subtitle, image and up to 4 buttons (publish text and link)',
                            ],
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    type: 'vertical',
                                    tag: 'generic',
                                    alt: 'LivePerson',
                                    elements: [
                                        {
                                            type: 'vertical',
                                            elements: [
                                                {
                                                    type: 'image',
                                                    url: 'https://i.imgur.com/8meDl0W.jpeg',
                                                    tooltip: 'LivePerson',
                                                },
                                                {
                                                    type: 'text',
                                                    tag: 'title',
                                                    text: 'LivePerson',
                                                    tooltip: 'Title',
                                                },
                                                {
                                                    type: 'text',
                                                    tag: 'subtitle',
                                                    text: 'Connecting Brands to people',
                                                    tooltip: 'subtitle',
                                                },
                                                {
                                                    type: 'button',
                                                    tooltip: '',
                                                    title: 'Publish text example',
                                                    click: {
                                                        actions: [
                                                            {
                                                                type: 'publishText',
                                                                text: 'Publish text example',
                                                            },
                                                        ],
                                                    },
                                                },
                                                {
                                                    type: 'button',
                                                    tooltip: 'LivePerson Homepage',
                                                    title: 'LivePerson Homepage',
                                                    click: {
                                                        actions: [
                                                            {
                                                                type: 'link',
                                                                name: 'URL button tap',
                                                                uri: 'https://www.liveperson.com',
                                                            },
                                                        ],
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    quickReplies: {
                                        type: 'quickReplies',
                                        itemsPerRow: 8,
                                        replies: [
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Carousel',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Line Carousel',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Vendor Actions',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Vendor Actions',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                        ],
                                    },
                                    message: 'In what else are you interested?',
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/lineCarousel_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'line carousel',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/lineCarousel.json',
        content: {
            id: 'mockedUUID',
            name: 'lineCarousel',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: '',
                    affectedContexts: [],
                    parameters: [],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'The LINE carousel is a horizontally scrollable carousel of up to 10 rich cards. Each card can include the following elements: Title, subtitle, image and up to 3 buttons.',
                            ],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['Please note that the carousel items needs to have the same length.'],
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    type: 'carousel',
                                    padding: 10,
                                    alt: 'LivePerson',
                                    elements: [
                                        {
                                            type: 'vertical',
                                            tag: 'generic',
                                            elements: [
                                                {
                                                    type: 'vertical',
                                                    elements: [
                                                        {
                                                            type: 'image',
                                                            url: 'https://i.imgur.com/8meDl0W.jpeg',
                                                            tooltip: 'LivePerson',
                                                        },
                                                        {
                                                            type: 'text',
                                                            tag: 'title',
                                                            text: 'LivePerson',
                                                        },
                                                        {
                                                            type: 'text',
                                                            tag: 'subtitle',
                                                            text: 'Custom AI-Powered Messaging',
                                                            tooltip: 'Custom AI-Powered Messaging',
                                                        },
                                                        {
                                                            type: 'button',
                                                            title: 'Follow Link',
                                                            click: {
                                                                actions: [
                                                                    {
                                                                        name: 'LivePerson HomePage',
                                                                        type: 'link',
                                                                        uri: 'https://www.liveperson.com',
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'vertical',
                                            tag: 'generic',
                                            elements: [
                                                {
                                                    type: 'vertical',
                                                    elements: [
                                                        {
                                                            type: 'image',
                                                            url: 'https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg',
                                                            tooltip: 'Bella',
                                                        },
                                                        {
                                                            type: 'text',
                                                            tag: 'title',
                                                            text: 'Bella',
                                                        },
                                                        {
                                                            type: 'text',
                                                            tag: 'subtitle',
                                                            text: 'Bella loves me',
                                                        },
                                                        {
                                                            type: 'button',
                                                            title: 'Follow Link',
                                                            click: {
                                                                actions: [
                                                                    {
                                                                        type: 'link',
                                                                        name: 'Flowers',
                                                                        uri: 'https://bellaloves.me',
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    quickReplies: {
                                        type: 'quickReplies',
                                        itemsPerRow: 8,
                                        replies: [
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Card',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Line Card',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Vendor Actions',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Vendor Actions',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                        ],
                                    },
                                    message: 'In what else are you interested?',
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/privateMessage_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'private message',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/privateMessage.json',
        content: {
            id: 'mockedUUID',
            name: 'privateMessage',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: '',
                    affectedContexts: [],
                    parameters: [],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'It is possible to send a private text message from the Live Engage (LE-UI) via agent workspace. This feature can now be used via the Third-Party bots as well. This will allow Brands to define private message text within the conversational flow of the bot. These messages are published into the conversation for other Agent/Manger participants. This enables Brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising on next actions the handover agent should take.',
                            ],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with a combination of actions (e.g. Transfer) as well.',
                            ],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'The private message is not visible in the messenger. You can see the private message in the Conversational Cloud.',
                            ],
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                messageAudience: 'AGENTS_AND_MANAGERS',
                                text: 'This is a private message for a Conversational Cloud agent from a third party bot.',
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    quickReplies: {
                                        type: 'quickReplies',
                                        itemsPerRow: 8,
                                        replies: [
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Vendor Actions',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Vendor Actions',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Rich Content',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Rich Content',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                        ],
                                    },
                                    message: 'In what else are you interested?',
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/skillTransfer_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'skill transfer',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'transfer to skill',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'transfer skill',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/skillTransfer.json',
        content: {
            id: 'mockedUUID',
            name: 'skillTransfer',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: 'TRANSFER',
                    affectedContexts: [],
                    parameters: [
                        {
                            id: 'mockedUUID',
                            name: 'skill',
                            required: false,
                            dataType: '',
                            value: 'AgentSkill',
                            defaultValue: '',
                            isList: false,
                            prompts: [],
                            promptMessages: [],
                            noMatchPromptMessages: [],
                            noInputPromptMessages: [],
                            outputDialogContexts: [],
                        },
                    ],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['This option transfers the conversation to the next available agent using the provided skill.'],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['You will be transferred to the given skill.'],
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/web_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'Web',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'web rich content',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/web.json',
        content: {
            id: 'mockedUUID',
            name: 'web',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: '',
                    affectedContexts: [],
                    parameters: [],
                    messages: [
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    quickReplies: {
                                        type: 'quickReplies',
                                        itemsPerRow: 8,
                                        replies: [
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Card',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Card',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Carousel',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Carousel',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Date Picker',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Date Picker',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Schedule Slot List',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Schedule Slot List',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Multiple Checklist',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Multiple Checklist',
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    message: 'Which type of rich content do you want to see?',
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/webCard_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'web card',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/webCard.json',
        content: {
            id: 'mockedUUID',
            name: 'webCard',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: '',
                    affectedContexts: [],
                    parameters: [],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'The very basic structured content elements that can contain either/or elements, template, styling and actions.',
                            ],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['See the following example:'],
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    type: 'vertical',
                                    elements: [
                                        {
                                            type: 'image',
                                            url: 'https://i.imgur.com/8meDl0W.jpeg',
                                            tooltip: 'image tooltip',
                                        },
                                        {
                                            type: 'text',
                                            text: 'LivePerson',
                                            tooltip: 'text tooltip',
                                        },
                                        {
                                            type: 'text',
                                            text: 'Connecting Brands to people',
                                            tooltip: 'text tooltip',
                                        },
                                        {
                                            type: 'button',
                                            tooltip: 'LivePerson Homepage',
                                            title: 'LivePerson Homepage',
                                            click: {
                                                actions: [
                                                    {
                                                        type: 'link',
                                                        name: 'URL button tap',
                                                        uri: 'https://www.liveperson.com',
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            type: 'button',
                                            title: 'Start Navigation',
                                            click: {
                                                actions: [
                                                    {
                                                        type: 'navigate',
                                                        lo: 40.75614,
                                                        la: -73.99924,
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    quickReplies: {
                                        type: 'quickReplies',
                                        itemsPerRow: 8,
                                        replies: [
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Carousel',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Carousel',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Date Picker',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Date Picker',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Schedule Slot List',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Schedule Slot List',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Multiple Checklist',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Multiple Checklist',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Vendor Actions',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Vendor Actions',
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    message: 'Which type of rich content do you want to see?',
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/webCarousel_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'web carousel',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/webCarousel.json',
        content: {
            id: 'mockedUUID',
            name: 'webCarousel',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: '',
                    affectedContexts: [],
                    parameters: [],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'A horizontal representation of 2-10 Structured Content cards of the same business logic and structure. The carousel format can support a variety of businesses and needs to showcase service offerings, events and more.',
                            ],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ['See the following example:'],
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    type: 'carousel',
                                    padding: 10,
                                    elements: [
                                        {
                                            type: 'vertical',
                                            elements: [
                                                {
                                                    type: 'image',
                                                    url: 'https://i.imgur.com/8meDl0W.jpeg',
                                                    tooltip: 'image tooltip',
                                                },
                                                {
                                                    type: 'text',
                                                    text: 'LivePerson',
                                                    tooltip: 'text tooltip',
                                                },
                                                {
                                                    type: 'text',
                                                    text: 'Connecting Brands to people',
                                                    tooltip: 'text tooltip',
                                                },
                                                {
                                                    type: 'button',
                                                    tooltip: 'LivePerson Homepage',
                                                    title: 'LivePerson Homepage',
                                                    click: {
                                                        actions: [
                                                            {
                                                                type: 'link',
                                                                name: 'URL button tap',
                                                                uri: 'https://www.liveperson.com',
                                                            },
                                                        ],
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            type: 'vertical',
                                            elements: [
                                                {
                                                    type: 'image',
                                                    url: 'https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg',
                                                    tooltip: 'image tooltip',
                                                },
                                                {
                                                    type: 'text',
                                                    text: 'Bella',
                                                    tooltip: 'text tooltip',
                                                },
                                                {
                                                    type: 'text',
                                                    text: 'Bella loves me',
                                                    tooltip: 'text tooltip',
                                                },
                                                {
                                                    type: 'button',
                                                    tooltip: 'Bella Homepage',
                                                    title: 'Bella Homepage',
                                                    click: {
                                                        actions: [
                                                            {
                                                                type: 'link',
                                                                name: 'URL button tap',
                                                                uri: 'https://bellaloves.me/',
                                                            },
                                                        ],
                                                    },
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    quickReplies: {
                                        type: 'quickReplies',
                                        itemsPerRow: 8,
                                        replies: [
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Card',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Card',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Date Picker',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Date Picker',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Schedule Slot List',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Schedule Slot List',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Multiple Checklist',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Web Multiple Checklist',
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Vendor Actions',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Vendor Actions',
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    message: 'Which type of rich content do you want to see?',
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
    {
        fileName: 'intents/welcome_usersays_en.json',
        content: [
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'Hello',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'Hi',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'Welcome',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
            {
                id: 'mockedUUID',
                data: [
                    {
                        text: 'WELCOME-INTENT',
                        userDefined: false,
                    },
                ],
                isTemplate: false,
                count: 0,
                lang: 'en',
                updated: 0,
            },
        ],
    },
    {
        fileName: 'intents/welcome.json',
        content: {
            id: 'mockedUUID',
            name: 'welcome',
            auto: true,
            contexts: [],
            responses: [
                {
                    resetContexts: false,
                    action: '',
                    affectedContexts: [],
                    parameters: [],
                    messages: [
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: ["Hello, I'm here to show how RichContent and specific vendor actions are working with Dialogflow ES."],
                            condition: '',
                        },
                        {
                            type: '0',
                            title: '',
                            textToSpeech: '',
                            lang: 'en',
                            speech: [
                                'If you don\'t see quick replies below the next message, you are probably coming from WhatsApp or Apple Business Chat. They don\'t support quick replies, so you have to type in the options: "Rich Content text based" or "Vendor Actions text based".',
                            ],
                            condition: '',
                        },
                        {
                            type: '4',
                            title: '',
                            payload: {
                                metadata: [],
                                structuredContent: {
                                    quickReplies: {
                                        type: 'quickReplies',
                                        itemsPerRow: 8,
                                        replies: [
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Rich Content',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Rich Content',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                            {
                                                type: 'button',
                                                tooltip: '',
                                                title: 'Vendor Actions',
                                                click: {
                                                    actions: [
                                                        {
                                                            type: 'publishText',
                                                            text: 'Vendor Actions',
                                                        },
                                                    ],
                                                    metadata: [],
                                                },
                                            },
                                        ],
                                    },
                                    message: 'What are you interested in?',
                                },
                            },
                            textToSpeech: '',
                            lang: 'en',
                            condition: '',
                        },
                    ],
                    speech: [],
                },
            ],
            priority: 500000,
            webhookUsed: false,
            webhookForSlotFilling: false,
            fallbackIntent: false,
            events: [],
            conditionalResponses: [],
            condition: '',
            conditionalFollowupEvents: [],
        },
    },
];

export const composerResult = [
    {
        fileName: 'language-generation/en-us/templates/agentTransfer.json',
        content: {
            action: {
                name: 'TRANSFER',
                parameters: {
                    skill: 'SpecificAgentSkill',
                    agentId: '1005369632',
                },
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/appleAuth.json',
        content: {
            metadata: [
                {
                    type: 'BusinessChatMessage',
                    receivedMessage: {
                        title: 'Sign In to LivePerson',
                        subtitle: 'Thank you',
                        imageURL: 'https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png',
                        style: 'small',
                    },
                    replyMessage: {
                        title: 'You Signed in',
                        subtitle: 'Thank you',
                        imageURL: 'https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png',
                        style: 'small',
                    },
                },
                {
                    type: 'ConnectorAuthenticationRequest',
                    requestIdentifier: '72af1629-54f1-4dba-a0f6-90f606896bd5',
                    apple: {
                        oauth2: {
                            responseEncryptionKey: 'AAAAC3NzaC1lZDI1NTE5AAAAIPQwXxHgHXafKYObBs6n45BKtMlPCAa1ddeIYqWTMigh',
                        },
                    },
                },
            ],
            structuredContent: {
                tag: 'authentication',
                type: 'horizontal',
                elements: [
                    {
                        type: 'image',
                        url: 'https://i.imgur.com/8meDl0W.jpeg',
                    },
                    {
                        type: 'text',
                        text: 'authentication details',
                    },
                ],
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/endConversation.json',
        content: {
            action: {
                name: 'CLOSE_CONVERSATION',
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/delayPauseConversation.json',
        content: {
            delay: {
                delay: 2,
                typing: true,
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/delayPauseConversation.json',
        content: {
            metadata: [],
            structuredContent: {
                quickReplies: {
                    type: 'quickReplies',
                    itemsPerRow: 8,
                    replies: [
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Vendor Actions',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Vendor Actions',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Rich Content',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Rich Content',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                    ],
                },
                message: 'In what else are you interested?',
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/encodedMetadata.json',
        content: {
            encodedMetadata: 'ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ==',
        },
    },
    {
        fileName: 'language-generation/en-us/templates/encodedMetadata.json',
        content: {
            metadata: [],
            structuredContent: {
                quickReplies: {
                    type: 'quickReplies',
                    itemsPerRow: 8,
                    replies: [
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Vendor Actions',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Vendor Actions',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Rich Content',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Rich Content',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                    ],
                },
                message: 'In what else are you interested?',
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/invokeFunction.json',
        content: {
            messageAudience: 'AGENTS_AND_MANAGERS',
        },
    },
    {
        fileName: 'language-generation/en-us/templates/invokeFunction.json',
        content: {
            metadata: [],
            structuredContent: {
                quickReplies: {
                    type: 'quickReplies',
                    itemsPerRow: 8,
                    replies: [
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Vendor Actions',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Vendor Actions',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Rich Content',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Rich Content',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                    ],
                },
                message: 'In what else are you interested?',
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/lineCard.json',
        content: {
            metadata: [],
            structuredContent: {
                type: 'vertical',
                tag: 'generic',
                alt: 'LivePerson',
                elements: [
                    {
                        type: 'vertical',
                        elements: [
                            {
                                type: 'image',
                                url: 'https://i.imgur.com/8meDl0W.jpeg',
                                tooltip: 'LivePerson',
                            },
                            {
                                type: 'text',
                                tag: 'title',
                                text: 'LivePerson',
                                tooltip: 'Title',
                            },
                            {
                                type: 'text',
                                tag: 'subtitle',
                                text: 'Connecting Brands to people',
                                tooltip: 'subtitle',
                            },
                            {
                                type: 'button',
                                tooltip: '',
                                title: 'Publish text example',
                                click: {
                                    actions: [
                                        {
                                            type: 'publishText',
                                            text: 'Publish text example',
                                        },
                                    ],
                                },
                            },
                            {
                                type: 'button',
                                tooltip: 'LivePerson Homepage',
                                title: 'LivePerson Homepage',
                                click: {
                                    actions: [
                                        {
                                            type: 'link',
                                            name: 'URL button tap',
                                            uri: 'https://www.liveperson.com',
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/lineCard.json',
        content: {
            metadata: [],
            structuredContent: {
                quickReplies: {
                    type: 'quickReplies',
                    itemsPerRow: 8,
                    replies: [
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Carousel',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Line Carousel',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Vendor Actions',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Vendor Actions',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                    ],
                },
                message: 'In what else are you interested?',
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/lineCarousel.json',
        content: {
            metadata: [],
            structuredContent: {
                type: 'carousel',
                padding: 10,
                alt: 'LivePerson',
                elements: [
                    {
                        type: 'vertical',
                        tag: 'generic',
                        elements: [
                            {
                                type: 'vertical',
                                elements: [
                                    {
                                        type: 'image',
                                        url: 'https://i.imgur.com/8meDl0W.jpeg',
                                        tooltip: 'LivePerson',
                                    },
                                    {
                                        type: 'text',
                                        tag: 'title',
                                        text: 'LivePerson',
                                    },
                                    {
                                        type: 'text',
                                        tag: 'subtitle',
                                        text: 'Custom AI-Powered Messaging',
                                        tooltip: 'Custom AI-Powered Messaging',
                                    },
                                    {
                                        type: 'button',
                                        title: 'Follow Link',
                                        click: {
                                            actions: [
                                                {
                                                    name: 'LivePerson HomePage',
                                                    type: 'link',
                                                    uri: 'https://www.liveperson.com',
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'vertical',
                        tag: 'generic',
                        elements: [
                            {
                                type: 'vertical',
                                elements: [
                                    {
                                        type: 'image',
                                        url: 'https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg',
                                        tooltip: 'Bella',
                                    },
                                    {
                                        type: 'text',
                                        tag: 'title',
                                        text: 'Bella',
                                    },
                                    {
                                        type: 'text',
                                        tag: 'subtitle',
                                        text: 'Bella loves me',
                                    },
                                    {
                                        type: 'button',
                                        title: 'Follow Link',
                                        click: {
                                            actions: [
                                                {
                                                    type: 'link',
                                                    name: 'Flowers',
                                                    uri: 'https://bellaloves.me',
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/lineCarousel.json',
        content: {
            metadata: [],
            structuredContent: {
                quickReplies: {
                    type: 'quickReplies',
                    itemsPerRow: 8,
                    replies: [
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Card',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Line Card',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Vendor Actions',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Vendor Actions',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                    ],
                },
                message: 'In what else are you interested?',
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/privateMessage.json',
        content: {
            messageAudience: 'AGENTS_AND_MANAGERS',
        },
    },
    {
        fileName: 'language-generation/en-us/templates/privateMessage.json',
        content: {
            metadata: [],
            structuredContent: {
                quickReplies: {
                    type: 'quickReplies',
                    itemsPerRow: 8,
                    replies: [
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Vendor Actions',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Vendor Actions',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Rich Content',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Rich Content',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                    ],
                },
                message: 'In what else are you interested?',
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/skillTransfer.json',
        content: {
            action: {
                name: 'TRANSFER',
                parameters: {
                    skill: 'AgentSkill',
                },
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/web.json',
        content: {
            metadata: [],
            structuredContent: {
                quickReplies: {
                    type: 'quickReplies',
                    itemsPerRow: 8,
                    replies: [
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Card',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Card',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Carousel',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Carousel',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Date Picker',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Date Picker',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Schedule Slot List',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Schedule Slot List',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Multiple Checklist',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Multiple Checklist',
                                    },
                                ],
                            },
                        },
                    ],
                },
                message: 'Which type of rich content do you want to see?',
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/webCard.json',
        content: {
            metadata: [],
            structuredContent: {
                type: 'vertical',
                elements: [
                    {
                        type: 'image',
                        url: 'https://i.imgur.com/8meDl0W.jpeg',
                        tooltip: 'image tooltip',
                    },
                    {
                        type: 'text',
                        text: 'LivePerson',
                        tooltip: 'text tooltip',
                    },
                    {
                        type: 'text',
                        text: 'Connecting Brands to people',
                        tooltip: 'text tooltip',
                    },
                    {
                        type: 'button',
                        tooltip: 'LivePerson Homepage',
                        title: 'LivePerson Homepage',
                        click: {
                            actions: [
                                {
                                    type: 'link',
                                    name: 'URL button tap',
                                    uri: 'https://www.liveperson.com',
                                },
                            ],
                        },
                    },
                    {
                        type: 'button',
                        title: 'Start Navigation',
                        click: {
                            actions: [
                                {
                                    type: 'navigate',
                                    lo: 40.75614,
                                    la: -73.99924,
                                },
                            ],
                        },
                    },
                ],
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/webCard.json',
        content: {
            metadata: [],
            structuredContent: {
                quickReplies: {
                    type: 'quickReplies',
                    itemsPerRow: 8,
                    replies: [
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Carousel',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Carousel',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Date Picker',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Date Picker',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Schedule Slot List',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Schedule Slot List',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Multiple Checklist',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Multiple Checklist',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Vendor Actions',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Vendor Actions',
                                    },
                                ],
                            },
                        },
                    ],
                },
                message: 'Which type of rich content do you want to see?',
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/webCarousel.json',
        content: {
            metadata: [],
            structuredContent: {
                type: 'carousel',
                padding: 10,
                elements: [
                    {
                        type: 'vertical',
                        elements: [
                            {
                                type: 'image',
                                url: 'https://i.imgur.com/8meDl0W.jpeg',
                                tooltip: 'image tooltip',
                            },
                            {
                                type: 'text',
                                text: 'LivePerson',
                                tooltip: 'text tooltip',
                            },
                            {
                                type: 'text',
                                text: 'Connecting Brands to people',
                                tooltip: 'text tooltip',
                            },
                            {
                                type: 'button',
                                tooltip: 'LivePerson Homepage',
                                title: 'LivePerson Homepage',
                                click: {
                                    actions: [
                                        {
                                            type: 'link',
                                            name: 'URL button tap',
                                            uri: 'https://www.liveperson.com',
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                    {
                        type: 'vertical',
                        elements: [
                            {
                                type: 'image',
                                url: 'https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg',
                                tooltip: 'image tooltip',
                            },
                            {
                                type: 'text',
                                text: 'Bella',
                                tooltip: 'text tooltip',
                            },
                            {
                                type: 'text',
                                text: 'Bella loves me',
                                tooltip: 'text tooltip',
                            },
                            {
                                type: 'button',
                                tooltip: 'Bella Homepage',
                                title: 'Bella Homepage',
                                click: {
                                    actions: [
                                        {
                                            type: 'link',
                                            name: 'URL button tap',
                                            uri: 'https://bellaloves.me/',
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/webCarousel.json',
        content: {
            metadata: [],
            structuredContent: {
                quickReplies: {
                    type: 'quickReplies',
                    itemsPerRow: 8,
                    replies: [
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Card',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Card',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Date Picker',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Date Picker',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Schedule Slot List',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Schedule Slot List',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Multiple Checklist',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Web Multiple Checklist',
                                    },
                                ],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Vendor Actions',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Vendor Actions',
                                    },
                                ],
                            },
                        },
                    ],
                },
                message: 'Which type of rich content do you want to see?',
            },
        },
    },
    {
        fileName: 'language-generation/en-us/templates/welcome.json',
        content: {
            metadata: [],
            structuredContent: {
                quickReplies: {
                    type: 'quickReplies',
                    itemsPerRow: 8,
                    replies: [
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Rich Content',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Rich Content',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                        {
                            type: 'button',
                            tooltip: '',
                            title: 'Vendor Actions',
                            click: {
                                actions: [
                                    {
                                        type: 'publishText',
                                        text: 'Vendor Actions',
                                    },
                                ],
                                metadata: [],
                            },
                        },
                    ],
                },
                message: 'What are you interested in?',
            },
        },
    },
    {
        fileName: 'language-generation/en-us/ThirdPartyBotTemplates.en-us.lg',
        content:
            '[import](common.lg)\n\n# SendActivity_7hrBzd()\n[Activity\n    Text = ${SendActivity_7hrBzd_text()}\n]\n\n# SendActivity_7hrBzd_text()\n- Sorry, I couldn\'t find anything. Please rephrase it.\n\n# agentTransfer_Activity_1()\n[Activity\n    Text = ${agentTransfer_Text_1()}\n]\n\n# agentTransfer_Text_1()\n- This option transfers the conversation to the particular agent matching the provided agentId and skill. If the agent is not available, the conversation will be transferred to an available agent with the same skill.\n\n# agentTransfer_Activity_2()\n[Activity\n    Text = ${agentTransfer_Text_2()}\n]\n\n# agentTransfer_Text_2()\n- You will be transferred to a specific skill and agent.\n\n# agentTransfer_Activity_3()\n[Activity\n    Text = ${agentTransfer_Text_3()}\n    ChannelData = ${json(fromFile("./templates/agentTransfer.json"))}\n]\n\n# agentTransfer_Text_3()\n- \n\n# appleAuth_Activity_1()\n[Activity\n    Text = ${appleAuth_Text_1()}\n]\n\n# appleAuth_Text_1()\n- The Apple Business Chat messaging channel now allows you to send an authentication request to consumers (only from iOS 12 onwards) using an OAuth 2.0 provider. The consumers then respond to the authentication request with their user/password credentials which can be validated against the OAuth 2.0 provider.\n\n# appleAuth_Activity_2()\n[Activity\n    Text = ${appleAuth_Text_2()}\n]\n\n# appleAuth_Text_2()\n- Please note that the requestIdentifier field must be unique for each message. Therefore, you should replace the requestIdentifier before testing. You will also need your own public key.\n\n# appleAuth_Activity_3()\n[Activity\n    Text = ${appleAuth_Text_3()}\n]\n\n# appleAuth_Text_3()\n- See the following example:\n\n# appleAuth_Activity_4()\n[Activity\n    Text = ${appleAuth_Text_4()}\n    ChannelData = ${json(fromFile("./templates/appleAuth.json"))}\n]\n\n# appleAuth_Text_4()\n- \n\n# appleAuth_Activity_5()\n[Activity\n    Text = ${appleAuth_Text_5()}\n]\n\n# appleAuth_Text_5()\n- In what else are you interested?\n\n# endConversation_Activity_1()\n[Activity\n    Text = ${endConversation_Text_1()}\n]\n\n# endConversation_Text_1()\n- The action "conversation closed" was triggered.\n\n# endConversation_Activity_2()\n[Activity\n    Text = ${endConversation_Text_2()}\n]\n\n# endConversation_Text_2()\n- Thanks for trying out the rich content and vendor actions. Goodbye.\n\n# endConversation_Activity_3()\n[Activity\n    Text = ${endConversation_Text_3()}\n    ChannelData = ${json(fromFile("./templates/endConversation.json"))}\n]\n\n# endConversation_Text_3()\n- \n\n# delayPauseConversation_Activity_1()\n[Activity\n    Text = ${delayPauseConversation_Text_1()}\n]\n\n# delayPauseConversation_Text_1()\n- It is possible to send an event of type "delay" before regular content events and actions. This specifies the time the bot will wait before displaying the next message. The delay is given in seconds and typing means if typing indicator while delay is happening.\n\n# delayPauseConversation_Activity_2()\n[Activity\n    Text = ${delayPauseConversation_Text_2()}\n]\n\n# delayPauseConversation_Text_2()\n- This message is sent before the 2 seconds delay.\n\n# delayPauseConversation_Activity_3()\n[Activity\n    Text = ${delayPauseConversation_Text_3()}\n    ChannelData = ${json(fromFile("./templates/delayPauseConversation.json"))}\n]\n\n# delayPauseConversation_Text_3()\n- \n\n# delayPauseConversation_Activity_4()\n[Activity\n    Text = ${delayPauseConversation_Text_4()}\n]\n\n# delayPauseConversation_Text_4()\n- This message is sent after 2 seconds delay.\n\n# delayPauseConversation_Activity_5()\n[Activity\n    Text = ${delayPauseConversation_Text_5()}\n    ChannelData = ${json(fromFile("./templates/delayPauseConversation.json"))}\n]\n\n# delayPauseConversation_Text_5()\n- \n\n# encodedMetadata_Activity_1()\n[Activity\n    Text = ${encodedMetadata_Text_1()}\n]\n\n# encodedMetadata_Text_1()\n- The Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing conversation metadata input field.\n\n# encodedMetadata_Activity_2()\n[Activity\n    Text = ${encodedMetadata_Text_2()}\n]\n\n# encodedMetadata_Text_2()\n- To use the feature please reach out to a LivePerson employee.\n\n# encodedMetadata_Activity_3()\n[Activity\n    Text = ${encodedMetadata_Text_3()}\n    ChannelData = ${json(fromFile("./templates/encodedMetadata.json"))}\n]\n\n# encodedMetadata_Text_3()\n- Hello I am a text response with encoded metadata!\n\n# encodedMetadata_Activity_4()\n[Activity\n    Text = ${encodedMetadata_Text_4()}\n    ChannelData = ${json(fromFile("./templates/encodedMetadata.json"))}\n]\n\n# encodedMetadata_Text_4()\n- \n\n# invokeFunction_Activity_1()\n[Activity\n    Text = ${invokeFunction_Text_1()}\n]\n\n# invokeFunction_Text_1()\n- During a conversation, it is possible to trigger a LivePerson Function that is deployed to the LivePerson Functions (Function as a Service) platform. This provides a way to run custom logic with a bot.\n\n# invokeFunction_Activity_2()\n[Activity\n    Text = ${invokeFunction_Text_2()}\n]\n\n# invokeFunction_Text_2()\n- For more information about the LivePerson Functions possibilities with Third Party Bots please check out the following link https://developers.liveperson.com/third-party-bots-custom-integration.html\n\n# invokeFunction_Activity_3()\n[Activity\n    Text = ${invokeFunction_Text_3()}\n    ChannelData = ${json(fromFile("./templates/invokeFunction.json"))}\n]\n\n# invokeFunction_Text_3()\n- \n\n# invokeFunction_Activity_4()\n[Activity\n    Text = ${invokeFunction_Text_4()}\n    ChannelData = ${json(fromFile("./templates/invokeFunction.json"))}\n]\n\n# invokeFunction_Text_4()\n- \n\n# lineCard_Activity_1()\n[Activity\n    Text = ${lineCard_Text_1()}\n]\n\n# lineCard_Text_1()\n- Use LINE cards to send a message with an image, title, text and multiple buttons with actions.The card contains the following elements: Title, subtitle, image and up to 4 buttons (publish text and link)\n\n# lineCard_Activity_2()\n[Activity\n    Text = ${lineCard_Text_2()}\n    ChannelData = ${json(fromFile("./templates/lineCard.json"))}\n]\n\n# lineCard_Text_2()\n- \n\n# lineCard_Activity_3()\n[Activity\n    Text = ${lineCard_Text_3()}\n    ChannelData = ${json(fromFile("./templates/lineCard.json"))}\n]\n\n# lineCard_Text_3()\n- \n\n# lineCarousel_Activity_1()\n[Activity\n    Text = ${lineCarousel_Text_1()}\n]\n\n# lineCarousel_Text_1()\n- The LINE carousel is a horizontally scrollable carousel of up to 10 rich cards. Each card can include the following elements: Title, subtitle, image and up to 3 buttons.\n\n# lineCarousel_Activity_2()\n[Activity\n    Text = ${lineCarousel_Text_2()}\n]\n\n# lineCarousel_Text_2()\n- Please note that the carousel items needs to have the same length.\n\n# lineCarousel_Activity_3()\n[Activity\n    Text = ${lineCarousel_Text_3()}\n    ChannelData = ${json(fromFile("./templates/lineCarousel.json"))}\n]\n\n# lineCarousel_Text_3()\n- \n\n# lineCarousel_Activity_4()\n[Activity\n    Text = ${lineCarousel_Text_4()}\n    ChannelData = ${json(fromFile("./templates/lineCarousel.json"))}\n]\n\n# lineCarousel_Text_4()\n- \n\n# privateMessage_Activity_1()\n[Activity\n    Text = ${privateMessage_Text_1()}\n]\n\n# privateMessage_Text_1()\n- It is possible to send a private text message from the Live Engage (LE-UI) via agent workspace. This feature can now be used via the Third-Party bots as well. This will allow Brands to define private message text within the conversational flow of the bot. These messages are published into the conversation for other Agent/Manger participants. This enables Brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising on next actions the handover agent should take.\n\n# privateMessage_Activity_2()\n[Activity\n    Text = ${privateMessage_Text_2()}\n]\n\n# privateMessage_Text_2()\n- Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with a combination of actions (e.g. Transfer) as well.\n\n# privateMessage_Activity_3()\n[Activity\n    Text = ${privateMessage_Text_3()}\n]\n\n# privateMessage_Text_3()\n- The private message is not visible in the messenger. You can see the private message in the Conversational Cloud.\n\n# privateMessage_Activity_4()\n[Activity\n    Text = ${privateMessage_Text_4()}\n    ChannelData = ${json(fromFile("./templates/privateMessage.json"))}\n]\n\n# privateMessage_Text_4()\n- This is a private message for a Conversational Cloud agent from a third party bot.\n\n# privateMessage_Activity_5()\n[Activity\n    Text = ${privateMessage_Text_5()}\n    ChannelData = ${json(fromFile("./templates/privateMessage.json"))}\n]\n\n# privateMessage_Text_5()\n- \n\n# skillTransfer_Activity_1()\n[Activity\n    Text = ${skillTransfer_Text_1()}\n]\n\n# skillTransfer_Text_1()\n- This option transfers the conversation to the next available agent using the provided skill.\n\n# skillTransfer_Activity_2()\n[Activity\n    Text = ${skillTransfer_Text_2()}\n]\n\n# skillTransfer_Text_2()\n- You will be transferred to the given skill.\n\n# skillTransfer_Activity_3()\n[Activity\n    Text = ${skillTransfer_Text_3()}\n    ChannelData = ${json(fromFile("./templates/skillTransfer.json"))}\n]\n\n# skillTransfer_Text_3()\n- \n\n# web_Activity_1()\n[Activity\n    Text = ${web_Text_1()}\n    ChannelData = ${json(fromFile("./templates/web.json"))}\n]\n\n# web_Text_1()\n- \n\n# webCard_Activity_1()\n[Activity\n    Text = ${webCard_Text_1()}\n]\n\n# webCard_Text_1()\n- The very basic structured content elements that can contain either/or elements, template, styling and actions.\n\n# webCard_Activity_2()\n[Activity\n    Text = ${webCard_Text_2()}\n]\n\n# webCard_Text_2()\n- See the following example:\n\n# webCard_Activity_3()\n[Activity\n    Text = ${webCard_Text_3()}\n    ChannelData = ${json(fromFile("./templates/webCard.json"))}\n]\n\n# webCard_Text_3()\n- \n\n# webCard_Activity_4()\n[Activity\n    Text = ${webCard_Text_4()}\n    ChannelData = ${json(fromFile("./templates/webCard.json"))}\n]\n\n# webCard_Text_4()\n- \n\n# webCarousel_Activity_1()\n[Activity\n    Text = ${webCarousel_Text_1()}\n]\n\n# webCarousel_Text_1()\n- A horizontal representation of 2-10 Structured Content cards of the same business logic and structure. The carousel format can support a variety of businesses and needs to showcase service offerings, events and more.\n\n# webCarousel_Activity_2()\n[Activity\n    Text = ${webCarousel_Text_2()}\n]\n\n# webCarousel_Text_2()\n- See the following example:\n\n# webCarousel_Activity_3()\n[Activity\n    Text = ${webCarousel_Text_3()}\n    ChannelData = ${json(fromFile("./templates/webCarousel.json"))}\n]\n\n# webCarousel_Text_3()\n- \n\n# webCarousel_Activity_4()\n[Activity\n    Text = ${webCarousel_Text_4()}\n    ChannelData = ${json(fromFile("./templates/webCarousel.json"))}\n]\n\n# webCarousel_Text_4()\n- \n\n# welcome_Activity_1()\n[Activity\n    Text = ${welcome_Text_1()}\n]\n\n# welcome_Text_1()\n- Hello, I\'m here to show how RichContent and specific vendor actions are working with the Microsoft Bot Framework\n\n# welcome_Activity_2()\n[Activity\n    Text = ${welcome_Text_2()}\n]\n\n# welcome_Text_2()\n- If you don\'t see quick replies below the next message, you are probably coming from WhatsApp or Apple Business Chat. They don\'t support quick replies, so you have to type in the options: "Rich Content text based" or "Vendor Actions text based".\n\n# welcome_Activity_3()\n[Activity\n    Text = ${welcome_Text_3()}\n    ChannelData = ${json(fromFile("./templates/welcome.json"))}\n]\n\n# welcome_Text_3()\n- \n',
    },
    {
        fileName: 'ThirdPartyBotTemplates.dialog',
        content: {
            $kind: 'Microsoft.AdaptiveDialog',
            $designer: {
                name: 'ThirdPartyBotTemplates',
                description: '',
                id: 'A79tBe',
            },
            autoEndDialog: true,
            defaultResultProperty: 'dialog.result',
            triggers: [
                {
                    $kind: 'Microsoft.OnUnknownIntent',
                    $designer: {
                        id: '99ITZ7',
                        name: 'Unknown intent',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            $designer: {
                                id: '7hrBzd',
                            },
                            activity: '${SendActivity_7hrBzd()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'agentTransfer',
                    $designer: {
                        name: 'agentTransfer',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${agentTransfer_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${agentTransfer_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${agentTransfer_Activity_3()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'appleAuth',
                    $designer: {
                        name: 'appleAuth',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${appleAuth_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${appleAuth_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${appleAuth_Activity_3()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${appleAuth_Activity_4()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${appleAuth_Activity_5()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'endConversation',
                    $designer: {
                        name: 'endConversation',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${endConversation_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${endConversation_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${endConversation_Activity_3()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'delayPauseConversation',
                    $designer: {
                        name: 'delayPauseConversation',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${delayPauseConversation_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${delayPauseConversation_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${delayPauseConversation_Activity_3()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${delayPauseConversation_Activity_4()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${delayPauseConversation_Activity_5()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'encodedMetadata',
                    $designer: {
                        name: 'encodedMetadata',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${encodedMetadata_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${encodedMetadata_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${encodedMetadata_Activity_3()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${encodedMetadata_Activity_4()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'invokeFunction',
                    $designer: {
                        name: 'invokeFunction',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${invokeFunction_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${invokeFunction_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${invokeFunction_Activity_3()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${invokeFunction_Activity_4()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'lineCard',
                    $designer: {
                        name: 'lineCard',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${lineCard_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${lineCard_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${lineCard_Activity_3()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'lineCarousel',
                    $designer: {
                        name: 'lineCarousel',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${lineCarousel_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${lineCarousel_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${lineCarousel_Activity_3()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${lineCarousel_Activity_4()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'privateMessage',
                    $designer: {
                        name: 'privateMessage',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${privateMessage_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${privateMessage_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${privateMessage_Activity_3()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${privateMessage_Activity_4()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${privateMessage_Activity_5()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'skillTransfer',
                    $designer: {
                        name: 'skillTransfer',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${skillTransfer_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${skillTransfer_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${skillTransfer_Activity_3()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'web',
                    $designer: {
                        name: 'web',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${web_Activity_1()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'webCard',
                    $designer: {
                        name: 'webCard',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${webCard_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${webCard_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${webCard_Activity_3()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${webCard_Activity_4()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.OnIntent',
                    intent: 'webCarousel',
                    $designer: {
                        name: 'webCarousel',
                    },
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${webCarousel_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${webCarousel_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${webCarousel_Activity_3()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${webCarousel_Activity_4()}',
                        },
                    ],
                },
                {
                    $kind: 'Microsoft.Microsoft.OnMessageActivity',
                    $designer: {
                        name: 'Message received (Message received activity)',
                    },
                    condition: "=exists(turn.Activity.channelData.action.name) && turn.Activity.channelData.action.name == 'WELCOME'",
                    actions: [
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${welcome_Activity_1()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${welcome_Activity_2()}',
                        },
                        {
                            $kind: 'Microsoft.SendActivity',
                            activity: '${welcome_Activity_3()}',
                        },
                    ],
                },
            ],
            generator: 'ThirdPartyBotTemplates.lg',
            id: 'ThirdPartyBotTemplates',
            recognizer: {
                $kind: 'Microsoft.RegexRecognizer',
                intents: [
                    {
                        intent: 'agentTransfer',
                        pattern: '(transfer\\sto\\sagent$|agent\\stransfer$|transfer\\sagent$)',
                    },
                    {
                        intent: 'appleAuth',
                        pattern: '(apple\\sauth$|auth$)',
                    },
                    {
                        intent: 'endConversation',
                        pattern: '(close\\sconversation$|bye$|cya$|close$)',
                    },
                    {
                        intent: 'delayPauseConversation',
                        pattern: '(delay$|delay\\sconversation$|pause$|pause\\sconversation$|delay\\smessage$)',
                    },
                    {
                        intent: 'encodedMetadata',
                        pattern: '(encoded$|encoded\\smetadata$)',
                    },
                    {
                        intent: 'invokeFunction',
                        pattern: '(Invoke\\sfunction$|function$|invoke$)',
                    },
                    {
                        intent: 'lineCard',
                        pattern: '(Line\\scard$)',
                    },
                    {
                        intent: 'lineCarousel',
                        pattern: '(line\\scarousel$)',
                    },
                    {
                        intent: 'privateMessage',
                        pattern: '(private\\smessage$)',
                    },
                    {
                        intent: 'skillTransfer',
                        pattern: '(skill\\stransfer$|transfer\\sto\\sskill$|transfer\\sskill$)',
                    },
                    {
                        intent: 'web',
                        pattern: '(Web$|web\\srich\\scontent$)',
                    },
                    {
                        intent: 'webCard',
                        pattern: '(web\\scard$)',
                    },
                    {
                        intent: 'webCarousel',
                        pattern: '(web\\scarousel$)',
                    },
                    {
                        intent: 'welcome',
                        pattern: '(Hello$|Hi$|Welcome$|WELCOME-INTENT$)',
                    },
                ],
            },
        },
    },
];

export const botFrameworkResult = [
    {
        fileName: 'src/richContent.ts',
        content:
            'export function agentTransfer() {\n    return [\n        {\n                "type": "message",\n                "text": "This option transfers the conversation to the particular agent matching the provided agentId and skill. If the agent is not available, the conversation will be transferred to an available agent with the same skill."\n        },\n        {\n                "type": "message",\n                "text": "You will be transferred to a specific skill and agent."\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "action": {\n                                "name": "TRANSFER",\n                                "parameters": {\n                                        "skill": "SpecificAgentSkill",\n                                        "agentId": "1005369632"\n                                }\n                        }\n                }\n        }\n]\n}\n\n\nexport function appleAuth() {\n    return [\n        {\n                "type": "message",\n                "text": "The Apple Business Chat messaging channel now allows you to send an authentication request to consumers (only from iOS 12 onwards) using an OAuth 2.0 provider. The consumers then respond to the authentication request with their user/password credentials which can be validated against the OAuth 2.0 provider."\n        },\n        {\n                "type": "message",\n                "text": "Please note that the requestIdentifier field must be unique for each message. Therefore, you should replace the requestIdentifier before testing. You will also need your own public key."\n        },\n        {\n                "type": "message",\n                "text": "See the following example:"\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [\n                                {\n                                        "type": "BusinessChatMessage",\n                                        "receivedMessage": {\n                                                "title": "Sign In to LivePerson",\n                                                "subtitle": "Thank you",\n                                                "imageURL": "https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png",\n                                                "style": "small"\n                                        },\n                                        "replyMessage": {\n                                                "title": "You Signed in",\n                                                "subtitle": "Thank you",\n                                                "imageURL": "https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png",\n                                                "style": "small"\n                                        }\n                                },\n                                {\n                                        "type": "ConnectorAuthenticationRequest",\n                                        "requestIdentifier": "72af1629-54f1-4dba-a0f6-90f606896bd5",\n                                        "apple": {\n                                                "oauth2": {\n                                                        "responseEncryptionKey": "AAAAC3NzaC1lZDI1NTE5AAAAIPQwXxHgHXafKYObBs6n45BKtMlPCAa1ddeIYqWTMigh"\n                                                }\n                                        }\n                                }\n                        ],\n                        "structuredContent": {\n                                "tag": "authentication",\n                                "type": "horizontal",\n                                "elements": [\n                                        {\n                                                "type": "image",\n                                                "url": "https://i.imgur.com/8meDl0W.jpeg"\n                                        },\n                                        {\n                                                "type": "text",\n                                                "text": "authentication details"\n                                        }\n                                ]\n                        }\n                }\n        },\n        {\n                "type": "message",\n                "text": "In what else are you interested?"\n        }\n]\n}\n\n\nexport function endConversation() {\n    return [\n        {\n                "type": "message",\n                "text": "The action \\"conversation closed\\" was triggered."\n        },\n        {\n                "type": "message",\n                "text": "Thanks for trying out the rich content and vendor actions. Goodbye."\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "action": {\n                                "name": "CLOSE_CONVERSATION"\n                        }\n                }\n        }\n]\n}\n\n\nexport function delayPauseConversation() {\n    return [\n        {\n                "type": "message",\n                "text": "It is possible to send an event of type \\"delay\\" before regular content events and actions. This specifies the time the bot will wait before displaying the next message. The delay is given in seconds and typing means if typing indicator while delay is happening."\n        },\n        {\n                "type": "message",\n                "text": "This message is sent before the 2 seconds delay."\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "delay": {\n                                "delay": 2,\n                                "typing": true\n                        }\n                }\n        },\n        {\n                "type": "message",\n                "text": "This message is sent after 2 seconds delay."\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "quickReplies": {\n                                        "type": "quickReplies",\n                                        "itemsPerRow": 8,\n                                        "replies": [\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Vendor Actions",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Vendor Actions"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Rich Content",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Rich Content"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                }\n                                        ]\n                                },\n                                "message": "In what else are you interested?"\n                        }\n                }\n        }\n]\n}\n\n\nexport function encodedMetadata() {\n    return [\n        {\n                "type": "message",\n                "text": "The Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing conversation metadata input field."\n        },\n        {\n                "type": "message",\n                "text": "To use the feature please reach out to a LivePerson employee."\n        },\n        {\n                "type": "message",\n                "text": "Hello I am a text response with encoded metadata!",\n                "channelData": {\n                        "encodedMetadata": "ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ=="\n                }\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "quickReplies": {\n                                        "type": "quickReplies",\n                                        "itemsPerRow": 8,\n                                        "replies": [\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Vendor Actions",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Vendor Actions"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Rich Content",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Rich Content"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                }\n                                        ]\n                                },\n                                "message": "In what else are you interested?"\n                        }\n                }\n        }\n]\n}\n\n\nexport function invokeFunction() {\n    return [\n        {\n                "type": "message",\n                "text": "During a conversation, it is possible to trigger a LivePerson Function that is deployed to the LivePerson Functions (Function as a Service) platform. This provides a way to run custom logic with a bot."\n        },\n        {\n                "type": "message",\n                "text": "For more information about the LivePerson Functions possibilities with Third Party Bots please check out the following link https://developers.liveperson.com/third-party-bots-custom-integration.html"\n        },\n        {\n                "type": "message",\n                "channelData": {\n                        "messageAudience": "AGENTS_AND_MANAGERS"\n                }\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "quickReplies": {\n                                        "type": "quickReplies",\n                                        "itemsPerRow": 8,\n                                        "replies": [\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Vendor Actions",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Vendor Actions"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Rich Content",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Rich Content"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                }\n                                        ]\n                                },\n                                "message": "In what else are you interested?"\n                        }\n                }\n        }\n]\n}\n\n\nexport function lineCard() {\n    return [\n        {\n                "type": "message",\n                "text": "Use LINE cards to send a message with an image, title, text and multiple buttons with actions.The card contains the following elements: Title, subtitle, image and up to 4 buttons (publish text and link)"\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "type": "vertical",\n                                "tag": "generic",\n                                "alt": "LivePerson",\n                                "elements": [\n                                        {\n                                                "type": "vertical",\n                                                "elements": [\n                                                        {\n                                                                "type": "image",\n                                                                "url": "https://i.imgur.com/8meDl0W.jpeg",\n                                                                "tooltip": "LivePerson"\n                                                        },\n                                                        {\n                                                                "type": "text",\n                                                                "tag": "title",\n                                                                "text": "LivePerson",\n                                                                "tooltip": "Title"\n                                                        },\n                                                        {\n                                                                "type": "text",\n                                                                "tag": "subtitle",\n                                                                "text": "Connecting Brands to people",\n                                                                "tooltip": "subtitle"\n                                                        },\n                                                        {\n                                                                "type": "button",\n                                                                "tooltip": "",\n                                                                "title": "Publish text example",\n                                                                "click": {\n                                                                        "actions": [\n                                                                                {\n                                                                                        "type": "publishText",\n                                                                                        "text": "Publish text example"\n                                                                                }\n                                                                        ]\n                                                                }\n                                                        },\n                                                        {\n                                                                "type": "button",\n                                                                "tooltip": "LivePerson Homepage",\n                                                                "title": "LivePerson Homepage",\n                                                                "click": {\n                                                                        "actions": [\n                                                                                {\n                                                                                        "type": "link",\n                                                                                        "name": "URL button tap",\n                                                                                        "uri": "https://www.liveperson.com"\n                                                                                }\n                                                                        ]\n                                                                }\n                                                        }\n                                                ]\n                                        }\n                                ]\n                        }\n                }\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "quickReplies": {\n                                        "type": "quickReplies",\n                                        "itemsPerRow": 8,\n                                        "replies": [\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Carousel",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Line Carousel"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Vendor Actions",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Vendor Actions"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                }\n                                        ]\n                                },\n                                "message": "In what else are you interested?"\n                        }\n                }\n        }\n]\n}\n\n\nexport function lineCarousel() {\n    return [\n        {\n                "type": "message",\n                "text": "The LINE carousel is a horizontally scrollable carousel of up to 10 rich cards. Each card can include the following elements: Title, subtitle, image and up to 3 buttons."\n        },\n        {\n                "type": "message",\n                "text": "Please note that the carousel items needs to have the same length."\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "type": "carousel",\n                                "padding": 10,\n                                "alt": "LivePerson",\n                                "elements": [\n                                        {\n                                                "type": "vertical",\n                                                "tag": "generic",\n                                                "elements": [\n                                                        {\n                                                                "type": "vertical",\n                                                                "elements": [\n                                                                        {\n                                                                                "type": "image",\n                                                                                "url": "https://i.imgur.com/8meDl0W.jpeg",\n                                                                                "tooltip": "LivePerson"\n                                                                        },\n                                                                        {\n                                                                                "type": "text",\n                                                                                "tag": "title",\n                                                                                "text": "LivePerson"\n                                                                        },\n                                                                        {\n                                                                                "type": "text",\n                                                                                "tag": "subtitle",\n                                                                                "text": "Custom AI-Powered Messaging",\n                                                                                "tooltip": "Custom AI-Powered Messaging"\n                                                                        },\n                                                                        {\n                                                                                "type": "button",\n                                                                                "title": "Follow Link",\n                                                                                "click": {\n                                                                                        "actions": [\n                                                                                                {\n                                                                                                        "name": "LivePerson HomePage",\n                                                                                                        "type": "link",\n                                                                                                        "uri": "https://www.liveperson.com"\n                                                                                                }\n                                                                                        ]\n                                                                                }\n                                                                        }\n                                                                ]\n                                                        }\n                                                ]\n                                        },\n                                        {\n                                                "type": "vertical",\n                                                "tag": "generic",\n                                                "elements": [\n                                                        {\n                                                                "type": "vertical",\n                                                                "elements": [\n                                                                        {\n                                                                                "type": "image",\n                                                                                "url": "https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg",\n                                                                                "tooltip": "Bella"\n                                                                        },\n                                                                        {\n                                                                                "type": "text",\n                                                                                "tag": "title",\n                                                                                "text": "Bella"\n                                                                        },\n                                                                        {\n                                                                                "type": "text",\n                                                                                "tag": "subtitle",\n                                                                                "text": "Bella loves me"\n                                                                        },\n                                                                        {\n                                                                                "type": "button",\n                                                                                "title": "Follow Link",\n                                                                                "click": {\n                                                                                        "actions": [\n                                                                                                {\n                                                                                                        "type": "link",\n                                                                                                        "name": "Flowers",\n                                                                                                        "uri": "https://bellaloves.me"\n                                                                                                }\n                                                                                        ]\n                                                                                }\n                                                                        }\n                                                                ]\n                                                        }\n                                                ]\n                                        }\n                                ]\n                        }\n                }\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "quickReplies": {\n                                        "type": "quickReplies",\n                                        "itemsPerRow": 8,\n                                        "replies": [\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Card",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Line Card"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Vendor Actions",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Vendor Actions"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                }\n                                        ]\n                                },\n                                "message": "In what else are you interested?"\n                        }\n                }\n        }\n]\n}\n\n\nexport function privateMessage() {\n    return [\n        {\n                "type": "message",\n                "text": "It is possible to send a private text message from the Live Engage (LE-UI) via agent workspace. This feature can now be used via the Third-Party bots as well. This will allow Brands to define private message text within the conversational flow of the bot. These messages are published into the conversation for other Agent/Manger participants. This enables Brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising on next actions the handover agent should take."\n        },\n        {\n                "type": "message",\n                "text": "Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with a combination of actions (e.g. Transfer) as well."\n        },\n        {\n                "type": "message",\n                "text": "The private message is not visible in the messenger. You can see the private message in the Conversational Cloud."\n        },\n        {\n                "type": "message",\n                "text": "This is a private message for a Conversational Cloud agent from a third party bot.",\n                "channelData": {\n                        "messageAudience": "AGENTS_AND_MANAGERS"\n                }\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "quickReplies": {\n                                        "type": "quickReplies",\n                                        "itemsPerRow": 8,\n                                        "replies": [\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Vendor Actions",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Vendor Actions"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Rich Content",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Rich Content"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                }\n                                        ]\n                                },\n                                "message": "In what else are you interested?"\n                        }\n                }\n        }\n]\n}\n\n\nexport function skillTransfer() {\n    return [\n        {\n                "type": "message",\n                "text": "This option transfers the conversation to the next available agent using the provided skill."\n        },\n        {\n                "type": "message",\n                "text": "You will be transferred to the given skill."\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "action": {\n                                "name": "TRANSFER",\n                                "parameters": {\n                                        "skill": "AgentSkill"\n                                }\n                        }\n                }\n        }\n]\n}\n\n\nexport function web() {\n    return [\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "quickReplies": {\n                                        "type": "quickReplies",\n                                        "itemsPerRow": 8,\n                                        "replies": [\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Card",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Card"\n                                                                        }\n                                                                ]\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Carousel",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Carousel"\n                                                                        }\n                                                                ]\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Date Picker",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Date Picker"\n                                                                        }\n                                                                ]\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Schedule Slot List",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Schedule Slot List"\n                                                                        }\n                                                                ]\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Multiple Checklist",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Multiple Checklist"\n                                                                        }\n                                                                ]\n                                                        }\n                                                }\n                                        ]\n                                },\n                                "message": "Which type of rich content do you want to see?"\n                        }\n                }\n        }\n]\n}\n\n\nexport function webCard() {\n    return [\n        {\n                "type": "message",\n                "text": "The very basic structured content elements that can contain either/or elements, template, styling and actions."\n        },\n        {\n                "type": "message",\n                "text": "See the following example:"\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "type": "vertical",\n                                "elements": [\n                                        {\n                                                "type": "image",\n                                                "url": "https://i.imgur.com/8meDl0W.jpeg",\n                                                "tooltip": "image tooltip"\n                                        },\n                                        {\n                                                "type": "text",\n                                                "text": "LivePerson",\n                                                "tooltip": "text tooltip"\n                                        },\n                                        {\n                                                "type": "text",\n                                                "text": "Connecting Brands to people",\n                                                "tooltip": "text tooltip"\n                                        },\n                                        {\n                                                "type": "button",\n                                                "tooltip": "LivePerson Homepage",\n                                                "title": "LivePerson Homepage",\n                                                "click": {\n                                                        "actions": [\n                                                                {\n                                                                        "type": "link",\n                                                                        "name": "URL button tap",\n                                                                        "uri": "https://www.liveperson.com"\n                                                                }\n                                                        ]\n                                                }\n                                        },\n                                        {\n                                                "type": "button",\n                                                "title": "Start Navigation",\n                                                "click": {\n                                                        "actions": [\n                                                                {\n                                                                        "type": "navigate",\n                                                                        "lo": 40.75614,\n                                                                        "la": -73.99924\n                                                                }\n                                                        ]\n                                                }\n                                        }\n                                ]\n                        }\n                }\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "quickReplies": {\n                                        "type": "quickReplies",\n                                        "itemsPerRow": 8,\n                                        "replies": [\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Carousel",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Carousel"\n                                                                        }\n                                                                ]\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Date Picker",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Date Picker"\n                                                                        }\n                                                                ]\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Schedule Slot List",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Schedule Slot List"\n                                                                        }\n                                                                ]\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Multiple Checklist",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Multiple Checklist"\n                                                                        }\n                                                                ]\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Vendor Actions",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Vendor Actions"\n                                                                        }\n                                                                ]\n                                                        }\n                                                }\n                                        ]\n                                },\n                                "message": "Which type of rich content do you want to see?"\n                        }\n                }\n        }\n]\n}\n\n\nexport function webCarousel() {\n    return [\n        {\n                "type": "message",\n                "text": "A horizontal representation of 2-10 Structured Content cards of the same business logic and structure. The carousel format can support a variety of businesses and needs to showcase service offerings, events and more."\n        },\n        {\n                "type": "message",\n                "text": "See the following example:"\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "type": "carousel",\n                                "padding": 10,\n                                "elements": [\n                                        {\n                                                "type": "vertical",\n                                                "elements": [\n                                                        {\n                                                                "type": "image",\n                                                                "url": "https://i.imgur.com/8meDl0W.jpeg",\n                                                                "tooltip": "image tooltip"\n                                                        },\n                                                        {\n                                                                "type": "text",\n                                                                "text": "LivePerson",\n                                                                "tooltip": "text tooltip"\n                                                        },\n                                                        {\n                                                                "type": "text",\n                                                                "text": "Connecting Brands to people",\n                                                                "tooltip": "text tooltip"\n                                                        },\n                                                        {\n                                                                "type": "button",\n                                                                "tooltip": "LivePerson Homepage",\n                                                                "title": "LivePerson Homepage",\n                                                                "click": {\n                                                                        "actions": [\n                                                                                {\n                                                                                        "type": "link",\n                                                                                        "name": "URL button tap",\n                                                                                        "uri": "https://www.liveperson.com"\n                                                                                }\n                                                                        ]\n                                                                }\n                                                        }\n                                                ]\n                                        },\n                                        {\n                                                "type": "vertical",\n                                                "elements": [\n                                                        {\n                                                                "type": "image",\n                                                                "url": "https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg",\n                                                                "tooltip": "image tooltip"\n                                                        },\n                                                        {\n                                                                "type": "text",\n                                                                "text": "Bella",\n                                                                "tooltip": "text tooltip"\n                                                        },\n                                                        {\n                                                                "type": "text",\n                                                                "text": "Bella loves me",\n                                                                "tooltip": "text tooltip"\n                                                        },\n                                                        {\n                                                                "type": "button",\n                                                                "tooltip": "Bella Homepage",\n                                                                "title": "Bella Homepage",\n                                                                "click": {\n                                                                        "actions": [\n                                                                                {\n                                                                                        "type": "link",\n                                                                                        "name": "URL button tap",\n                                                                                        "uri": "https://bellaloves.me/"\n                                                                                }\n                                                                        ]\n                                                                }\n                                                        }\n                                                ]\n                                        }\n                                ]\n                        }\n                }\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "quickReplies": {\n                                        "type": "quickReplies",\n                                        "itemsPerRow": 8,\n                                        "replies": [\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Card",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Card"\n                                                                        }\n                                                                ]\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Date Picker",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Date Picker"\n                                                                        }\n                                                                ]\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Schedule Slot List",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Schedule Slot List"\n                                                                        }\n                                                                ]\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Multiple Checklist",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Web Multiple Checklist"\n                                                                        }\n                                                                ]\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Vendor Actions",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Vendor Actions"\n                                                                        }\n                                                                ]\n                                                        }\n                                                }\n                                        ]\n                                },\n                                "message": "Which type of rich content do you want to see?"\n                        }\n                }\n        }\n]\n}\n\n\nexport function welcome() {\n    return [\n        {\n                "type": "message",\n                "text": "Hello, I\'m here to show how RichContent and specific vendor actions are working with the Microsoft Bot Framework"\n        },\n        {\n                "type": "message",\n                "text": "If you don\'t see quick replies below the next message, you are probably coming from WhatsApp or Apple Business Chat. They don\'t support quick replies, so you have to type in the options: \\"Rich Content text based\\" or \\"Vendor Actions text based\\"."\n        },\n        {\n                "type": "message",\n                "text": "",\n                "channelData": {\n                        "metadata": [],\n                        "structuredContent": {\n                                "quickReplies": {\n                                        "type": "quickReplies",\n                                        "itemsPerRow": 8,\n                                        "replies": [\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Rich Content",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Rich Content"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                },\n                                                {\n                                                        "type": "button",\n                                                        "tooltip": "",\n                                                        "title": "Vendor Actions",\n                                                        "click": {\n                                                                "actions": [\n                                                                        {\n                                                                                "type": "publishText",\n                                                                                "text": "Vendor Actions"\n                                                                        }\n                                                                ],\n                                                                "metadata": []\n                                                        }\n                                                }\n                                        ]\n                                },\n                                "message": "What are you interested in?"\n                        }\n                }\n        }\n]\n}\n\n\n',
    },
    {
        fileName: 'src/intents.json',
        content: {
            agentTransfer: ['transfer to agent', 'agent transfer', 'transfer agent'],
            appleAuth: ['apple auth', 'auth'],
            endConversation: ['close conversation', 'bye', 'cya', 'close'],
            delayPauseConversation: ['delay', 'delay conversation', 'pause', 'pause conversation', 'delay message'],
            encodedMetadata: ['encoded', 'encoded metadata'],
            invokeFunction: ['invoke function', 'function', 'invoke'],
            lineCard: ['line card'],
            lineCarousel: ['line carousel'],
            privateMessage: ['private message'],
            skillTransfer: ['skill transfer', 'transfer to skill', 'transfer skill'],
            web: ['web', 'web rich content'],
            webCard: ['web card'],
            webCarousel: ['web carousel'],
            welcome: ['hello', 'hi', 'welcome', 'welcome-intent'],
        },
    },
];

export const ibmWatsonResult = {
    intents: [
        {
            description: '',
            intent: 'agentTransfer',
            examples: [
                {
                    text: 'transfer to agent',
                },
                {
                    text: 'agent transfer',
                },
                {
                    text: 'transfer agent',
                },
            ],
        },
        {
            description: '',
            intent: 'appleAuth',
            examples: [
                {
                    text: 'apple auth',
                },
                {
                    text: 'auth',
                },
            ],
        },
        {
            description: '',
            intent: 'endConversation',
            examples: [
                {
                    text: 'close conversation',
                },
                {
                    text: 'bye',
                },
                {
                    text: 'cya',
                },
                {
                    text: 'close',
                },
            ],
        },
        {
            description: '',
            intent: 'delayPauseConversation',
            examples: [
                {
                    text: 'delay',
                },
                {
                    text: 'delay conversation',
                },
                {
                    text: 'pause',
                },
                {
                    text: 'pause conversation',
                },
                {
                    text: 'delay message',
                },
            ],
        },
        {
            description: '',
            intent: 'encodedMetadata',
            examples: [
                {
                    text: 'encoded',
                },
                {
                    text: 'encoded metadata',
                },
            ],
        },
        {
            description: '',
            intent: 'invokeFunction',
            examples: [
                {
                    text: 'Invoke function',
                },
                {
                    text: 'function',
                },
                {
                    text: 'invoke',
                },
            ],
        },
        {
            description: '',
            intent: 'lineCard',
            examples: [
                {
                    text: 'Line card',
                },
            ],
        },
        {
            description: '',
            intent: 'lineCarousel',
            examples: [
                {
                    text: 'line carousel',
                },
            ],
        },
        {
            description: '',
            intent: 'privateMessage',
            examples: [
                {
                    text: 'private message',
                },
            ],
        },
        {
            description: '',
            intent: 'skillTransfer',
            examples: [
                {
                    text: 'skill transfer',
                },
                {
                    text: 'transfer to skill',
                },
                {
                    text: 'transfer skill',
                },
            ],
        },
        {
            description: '',
            intent: 'web',
            examples: [
                {
                    text: 'Web',
                },
                {
                    text: 'web rich content',
                },
            ],
        },
        {
            description: '',
            intent: 'webCard',
            examples: [
                {
                    text: 'web card',
                },
            ],
        },
        {
            description: '',
            intent: 'webCarousel',
            examples: [
                {
                    text: 'web carousel',
                },
            ],
        },
        {
            description: '',
            intent: 'welcome_Apple',
            examples: [
                {
                    text: 'Hello',
                },
                {
                    text: 'Hi',
                },
                {
                    text: 'Welcome',
                },
            ],
        },
        {
            description: '',
            intent: 'welcome_WhatsApp',
            examples: [
                {
                    text: 'Hello',
                },
                {
                    text: 'Hi',
                },
                {
                    text: 'Welcome',
                },
            ],
        },
        {
            description: '',
            intent: 'welcome',
            examples: [
                {
                    text: 'Hello',
                },
                {
                    text: 'Hi',
                },
                {
                    text: 'Welcome',
                },
                {
                    text: 'WELCOME-INTENT',
                },
            ],
        },
    ],
    entities: [],
    metadata: {
        api_version: {
            major_version: 'v2',
            minor_version: '2018-11-08',
        },
    },
    dialog_nodes: [
        {
            type: 'standard',
            title: 'agentTransfer',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: 'This option transfers the conversation to the particular agent matching the provided agentId and skill. If the agent is not available, the conversation will be transferred to an available agent with the same skill.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'You will be transferred to a specific skill and agent.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#agentTransfer',
            dialog_node: 'Welcome',
            actions: [
                {
                    name: 'TRANSFER',
                    type: 'client',
                    parameters: {
                        skill: 'SpecificAgentSkill',
                        agentId: '1005369632',
                    },
                    result_variable: 'none',
                },
            ],
        },
        {
            type: 'standard',
            title: 'appleAuth',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: 'The Apple Business Chat messaging channel now allows you to send an authentication request to consumers (only from iOS 12 onwards) using an OAuth 2.0 provider. The consumers then respond to the authentication request with their user/password credentials which can be validated against the OAuth 2.0 provider.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'Please note that the requestIdentifier field must be unique for each message. Therefore, you should replace the requestIdentifier before testing. You will also need your own public key.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'See the following example:',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[{"type":"BusinessChatMessage","receivedMessage":{"title":"Sign In to LivePerson","subtitle":"Thank you","imageURL":"https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png","style":"small"},"replyMessage":{"title":"You Signed in","subtitle":"Thank you","imageURL":"https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png","style":"small"}},{"type":"ConnectorAuthenticationRequest","requestIdentifier":"72af1629-54f1-4dba-a0f6-90f606896bd5","apple":{"oauth2":{"responseEncryptionKey":"AAAAC3NzaC1lZDI1NTE5AAAAIPQwXxHgHXafKYObBs6n45BKtMlPCAa1ddeIYqWTMigh"}}}],"structuredContent":{"tag":"authentication","type":"horizontal","elements":[{"type":"image","url":"https://i.imgur.com/8meDl0W.jpeg"},{"type":"text","text":"authentication details"}]}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'In what else are you interested?',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#appleAuth',
            dialog_node: 'node_7_10000000000000',
            actions: [],
            previous_sibling: 'Welcome',
        },
        {
            type: 'standard',
            title: 'endConversation',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: 'The action "conversation closed" was triggered.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'Thanks for trying out the rich content and vendor actions. Goodbye.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#endConversation',
            dialog_node: 'node_7_10000000000000',
            actions: [
                {
                    name: 'CLOSE_CONVERSATION',
                    type: 'client',
                    result_variable: 'none',
                },
            ],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'delayPauseConversation',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: 'It is possible to send an event of type "delay" before regular content events and actions. This specifies the time the bot will wait before displaying the next message. The delay is given in seconds and typing means if typing indicator while delay is happening.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'This message is sent before the 2 seconds delay.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        time: 2000,
                        typing: true,
                        response_type: 'pause',
                    },
                    {
                        values: [
                            {
                                text: 'This message is sent after 2 seconds delay.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Rich Content","click":{"actions":[{"type":"publishText","text":"Rich Content"}],"metadata":[]}}]},"message":"In what else are you interested?"}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#delayPauseConversation',
            dialog_node: 'node_7_10000000000000',
            actions: [],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'encodedMetadata',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: 'The Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing conversation metadata input field.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'To use the feature please reach out to a LivePerson employee.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Rich Content","click":{"actions":[{"type":"publishText","text":"Rich Content"}],"metadata":[]}}]},"message":"In what else are you interested?"}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {
                encodedMetadata: 'ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ==',
            },
            conditions: '#encodedMetadata',
            dialog_node: 'node_7_10000000000000',
            actions: [],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'invokeFunction',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: 'During a conversation, it is possible to trigger a LivePerson Function that is deployed to the LivePerson Functions (Function as a Service) platform. This provides a way to run custom logic with a bot.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'For more information about the LivePerson Functions possibilities with Third Party Bots please check out the following link https://developers.liveperson.com/third-party-bots-custom-integration.html',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Rich Content","click":{"actions":[{"type":"publishText","text":"Rich Content"}],"metadata":[]}}]},"message":"In what else are you interested?"}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#invokeFunction',
            dialog_node: 'node_7_10000000000000',
            actions: [
                {
                    name: 'INVOCATION',
                    type: 'client',
                    parameters: {
                        payload: {
                            message: 'Message from a FaaS Function',
                        },
                        lambdaUuid: '6ade2140-617a-4062-bdf5-cd0e2dab8b81',
                        failOnError: false,
                    },
                    result_variable: 'none',
                },
            ],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'lineCard',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: 'Use LINE cards to send a message with an image, title, text and multiple buttons with actions.The card contains the following elements: Title, subtitle, image and up to 4 buttons (publish text and link)',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"type":"vertical","tag":"generic","alt":"LivePerson","elements":[{"type":"vertical","elements":[{"type":"image","url":"https://i.imgur.com/8meDl0W.jpeg","tooltip":"LivePerson"},{"type":"text","tag":"title","text":"LivePerson","tooltip":"Title"},{"type":"text","tag":"subtitle","text":"Connecting Brands to people","tooltip":"subtitle"},{"type":"button","tooltip":"","title":"Publish text example","click":{"actions":[{"type":"publishText","text":"Publish text example"}]}},{"type":"button","tooltip":"LivePerson Homepage","title":"LivePerson Homepage","click":{"actions":[{"type":"link","name":"URL button tap","uri":"https://www.liveperson.com"}]}}]}]}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Carousel","click":{"actions":[{"type":"publishText","text":"Line Carousel"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}}]},"message":"In what else are you interested?"}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#lineCard',
            dialog_node: 'node_7_10000000000000',
            actions: [],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'lineCarousel',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: 'The LINE carousel is a horizontally scrollable carousel of up to 10 rich cards. Each card can include the following elements: Title, subtitle, image and up to 3 buttons.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'Please note that the carousel items needs to have the same length.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"type":"carousel","padding":10,"alt":"LivePerson","elements":[{"type":"vertical","tag":"generic","elements":[{"type":"vertical","elements":[{"type":"image","url":"https://i.imgur.com/8meDl0W.jpeg","tooltip":"LivePerson"},{"type":"text","tag":"title","text":"LivePerson"},{"type":"text","tag":"subtitle","text":"Custom AI-Powered Messaging","tooltip":"Custom AI-Powered Messaging"},{"type":"button","title":"Follow Link","click":{"actions":[{"name":"LivePerson HomePage","type":"link","uri":"https://www.liveperson.com"}]}}]}]},{"type":"vertical","tag":"generic","elements":[{"type":"vertical","elements":[{"type":"image","url":"https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg","tooltip":"Bella"},{"type":"text","tag":"title","text":"Bella"},{"type":"text","tag":"subtitle","text":"Bella loves me"},{"type":"button","title":"Follow Link","click":{"actions":[{"type":"link","name":"Flowers","uri":"https://bellaloves.me"}]}}]}]}]}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Card","click":{"actions":[{"type":"publishText","text":"Line Card"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}}]},"message":"In what else are you interested?"}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#lineCarousel',
            dialog_node: 'node_7_10000000000000',
            actions: [],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'privateMessage',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: 'It is possible to send a private text message from the Live Engage (LE-UI) via agent workspace. This feature can now be used via the Third-Party bots as well. This will allow Brands to define private message text within the conversational flow of the bot. These messages are published into the conversation for other Agent/Manger participants. This enables Brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising on next actions the handover agent should take.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with a combination of actions (e.g. Transfer) as well.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'The private message is not visible in the messenger. You can see the private message in the Conversational Cloud.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"messageAudience":"AGENTS_AND_MANAGERS","text":"This is a private message for a Conversational Cloud agent from a third party bot."}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Rich Content","click":{"actions":[{"type":"publishText","text":"Rich Content"}],"metadata":[]}}]},"message":"In what else are you interested?"}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#privateMessage',
            dialog_node: 'node_7_10000000000000',
            actions: [],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'skillTransfer',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: 'This option transfers the conversation to the next available agent using the provided skill.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'You will be transferred to the given skill.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#skillTransfer',
            dialog_node: 'node_7_10000000000000',
            actions: [
                {
                    name: 'TRANSFER',
                    type: 'client',
                    parameters: {
                        skill: 'AgentSkill',
                    },
                    result_variable: 'none',
                },
            ],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'web',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Card","click":{"actions":[{"type":"publishText","text":"Web Card"}]}},{"type":"button","tooltip":"","title":"Carousel","click":{"actions":[{"type":"publishText","text":"Web Carousel"}]}},{"type":"button","tooltip":"","title":"Date Picker","click":{"actions":[{"type":"publishText","text":"Web Date Picker"}]}},{"type":"button","tooltip":"","title":"Schedule Slot List","click":{"actions":[{"type":"publishText","text":"Web Schedule Slot List"}]}},{"type":"button","tooltip":"","title":"Multiple Checklist","click":{"actions":[{"type":"publishText","text":"Web Multiple Checklist"}]}}]},"message":"Which type of rich content do you want to see?"}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: "#richContentSelection && $lpEvent.conversationContext.integration == 'WEB_SDK'",
            dialog_node: 'node_7_10000000000000',
            actions: [],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'webCard',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: 'The very basic structured content elements that can contain either/or elements, template, styling and actions.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'See the following example:',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"type":"vertical","elements":[{"type":"image","url":"https://i.imgur.com/8meDl0W.jpeg","tooltip":"image tooltip"},{"type":"text","text":"LivePerson","tooltip":"text tooltip"},{"type":"text","text":"Connecting Brands to people","tooltip":"text tooltip"},{"type":"button","tooltip":"LivePerson Homepage","title":"LivePerson Homepage","click":{"actions":[{"type":"link","name":"URL button tap","uri":"https://www.liveperson.com"}]}},{"type":"button","title":"Start Navigation","click":{"actions":[{"type":"navigate","lo":40.75614,"la":-73.99924}]}}]}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Carousel","click":{"actions":[{"type":"publishText","text":"Web Carousel"}]}},{"type":"button","tooltip":"","title":"Date Picker","click":{"actions":[{"type":"publishText","text":"Web Date Picker"}]}},{"type":"button","tooltip":"","title":"Schedule Slot List","click":{"actions":[{"type":"publishText","text":"Web Schedule Slot List"}]}},{"type":"button","tooltip":"","title":"Multiple Checklist","click":{"actions":[{"type":"publishText","text":"Web Multiple Checklist"}]}},{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}]}}]},"message":"Which type of rich content do you want to see?"}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#webCard',
            dialog_node: 'node_7_10000000000000',
            actions: [],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'webCarousel',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: 'A horizontal representation of 2-10 Structured Content cards of the same business logic and structure. The carousel format can support a variety of businesses and needs to showcase service offerings, events and more.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'See the following example:',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"image","url":"https://i.imgur.com/8meDl0W.jpeg","tooltip":"image tooltip"},{"type":"text","text":"LivePerson","tooltip":"text tooltip"},{"type":"text","text":"Connecting Brands to people","tooltip":"text tooltip"},{"type":"button","tooltip":"LivePerson Homepage","title":"LivePerson Homepage","click":{"actions":[{"type":"link","name":"URL button tap","uri":"https://www.liveperson.com"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg","tooltip":"image tooltip"},{"type":"text","text":"Bella","tooltip":"text tooltip"},{"type":"text","text":"Bella loves me","tooltip":"text tooltip"},{"type":"button","tooltip":"Bella Homepage","title":"Bella Homepage","click":{"actions":[{"type":"link","name":"URL button tap","uri":"https://bellaloves.me/"}]}}]}]}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Card","click":{"actions":[{"type":"publishText","text":"Web Card"}]}},{"type":"button","tooltip":"","title":"Date Picker","click":{"actions":[{"type":"publishText","text":"Web Date Picker"}]}},{"type":"button","tooltip":"","title":"Schedule Slot List","click":{"actions":[{"type":"publishText","text":"Web Schedule Slot List"}]}},{"type":"button","tooltip":"","title":"Multiple Checklist","click":{"actions":[{"type":"publishText","text":"Web Multiple Checklist"}]}},{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}]}}]},"message":"Which type of rich content do you want to see?"}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#webCarousel',
            dialog_node: 'node_7_10000000000000',
            actions: [],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'welcome_Apple',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: "Hello, I'm here to show how RichContent and specific vendor actions are working with IBM Watson.",
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'I detected the messaging channel we are communicating on as Apple Business Chat.\n\nUnfortunately, ABC does not offer Quick Reply functionality, so you will have to answer my questions in written form.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'What are you interested in?\n\n(Type "Rich Content" or "Vendor Actions")',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#welcome_Apple || welcome && $lpEvent.conversationContext.integration=="Apple Business Chat"',
            dialog_node: 'node_7_10000000000000',
            actions: [],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'welcome_WhatsApp',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: "Hello, I'm here to show how RichContent and specific vendor actions are working with IBM Watson.",
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'I detected the messaging channel we are communicating on as WhatsApp.\n\nUnfortunately, WhatsApp does not offer Quick Reply functionality, so you will have to answer my questions in written form.',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: 'What are you interested in?\n\n(Type "Rich Content" or "Vendor Actions")',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#welcome_WhatsApp || welcome && $lpEvent.conversationContext.integration=="WhatsApp Business"',
            dialog_node: 'node_7_10000000000000',
            actions: [],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'welcome',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: "Hello, I'm here to show how RichContent and specific vendor actions are working with IBM Watson.",
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                    {
                        values: [
                            {
                                text: '{"metadata":[],"structuredContent":{"quickReplies":{"type":"quickReplies","itemsPerRow":8,"replies":[{"type":"button","tooltip":"","title":"Rich Content","click":{"actions":[{"type":"publishText","text":"Rich Content"}],"metadata":[]}},{"type":"button","tooltip":"","title":"Vendor Actions","click":{"actions":[{"type":"publishText","text":"Vendor Actions"}],"metadata":[]}}]},"message":"What are you interested in?"}}',
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: '#welcome || welcome',
            dialog_node: 'node_7_10000000000000',
            actions: [],
            previous_sibling: 'node_7_10000000000000',
        },
        {
            type: 'standard',
            title: 'Anything else',
            output: {
                generic: [
                    {
                        values: [
                            {
                                text: "I didn't understand. You can try rephrasing.",
                            },
                        ],
                        response_type: 'text',
                        selection_policy: 'sequential',
                    },
                ],
            },
            context: {},
            conditions: 'anything_else',
            dialog_node: 'Anything else',
            actions: [],
            previous_sibling: 'node_7_10000000000000',
        },
    ],
    counterexamples: [],
    system_settings: {
        disambiguation: {
            prompt: 'Did you mean:',
            enabled: true,
            randomize: true,
            max_suggestions: 5,
            suggestion_text_policy: 'title',
            none_of_the_above_prompt: 'None of the above',
        },
        human_agent_assist: {
            prompt: 'Did you mean:',
        },
        intent_classification: {
            training_backend_version: 'v2',
        },
        spelling_auto_correct: true,
    },
    learning_opt_out: false,
    name: 'ThirdPartyBotTemplates',
    language: 'en',
    description: '',
};
