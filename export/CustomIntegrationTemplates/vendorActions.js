function lambda(input, callback) {

    const agentTransfer = {
        "messages": [
            "This option transfers the conversation to the particular agent matching the provided agentId and skill. If the agent is not available, the conversation will be transferred to an available agent with the same skill.",
            "You will be transferred to a specific skill and agent."
        ],
        "context": {
            "action": "TRANSFER",
            "actionParameters": {
                "skill": "SpecificAgentSkill",
                "agentId": "3263077432"
            }
        }
    }

    const endConversation = {
        "messages": [
            "The action \"conversation closed\" was triggered.",
            "Thanks for trying out the Rich Content and Vendor Actions. Goodbye."
        ],
        "context": {
            "action": "CLOSE_CONVERSATION"
        }
    }

    const delayPauseConversation = {
        "messages": [
            "It is possible to send an event of type \"delay\" before regular content events and actions. This specifies the time the bot will wait before displaying the next message. The delay is given in seconds and typing means if typing indicator while delay is happening.",
            "This message is sent before the 2 seconds delay.",
            {
                "delay": 2,
                "typing": true
            },
            "This message is sent after 2 seconds delay.",
            {
                "metadata": [],
                "structuredContent": {
                    "quickReplies": {
                        "type": "quickReplies",
                        "itemsPerRow": 8,
                        "replies": [
                            {
                                "type": "button",
                                "tooltip": "",
                                "title": "Vendor Actions",
                                "click": {
                                    "actions": [
                                        {
                                            "type": "publishText",
                                            "text": "Vendor Actions"
                                        }
                                    ],
                                    "metadata": []
                                }
                            },
                            {
                                "type": "button",
                                "tooltip": "",
                                "title": "Rich Content",
                                "click": {
                                    "actions": [
                                        {
                                            "type": "publishText",
                                            "text": "Rich Content"
                                        }
                                    ],
                                    "metadata": []
                                }
                            }
                        ]
                    },
                    "message": "In what else are you interested?"
                }
            }
        ],
        "context": {}
    }

    const encodedMetadata = {
        "messages": [
            "The Conversational Cloud Messaging platform provides a new metadata input type (“encodedMetadata”) for passing a base64 encoded metadata on a conversation. The new metadata input type is in addition to the existing conversation metadata input field.",
            "To use the feature please reach out to a LivePerson employee.",
            "Hello I am a response with encoded metadata!"
        ],
        "context": {
            "encodedMetadata": "ewoic29tZUluZm8iOiAiSSB3YXMgZW5jb2RlZCIKfQ=="
        }
    }

    const intentInformation = {
        "messages": [
            "To provide some more information and context alongside the messages to the consumer, you can define intent information via the context property. The defined intent will then be displayed in the Agent Escalation Summary Widget."
        ],
        "context": {
            "intentId": "intent-info-example",
            "intentName": "Intent information example.",
            "confidenceScore": 1
        }
    }

    const invokeFunction = {
        "messages": [
            "During a conversation, it is possible to trigger a LivePerson Function that is deployed to the LivePerson Functions (Function as a Service) platform. This provides a way to run custom logic with a bot.",
            "For more information about the LivePerson Functions possibilities with Third Party Bots please check out the following link https://developers.liveperson.com/third-party-bots-amazon-lex.html#invoke-liveperson-function"
        ],
        "context": {
            "action": "INVOCATION",
            "actionParameters": {
                "lambdaUuid": "6ade2140-617a-4062-bdf5-cd0e2dab8b81",
                "payload": {
                    "message": "Message from a FaaS Function"
                },
                "failOnError": false
            }
        }
    }

    const privateMessage = {
        "messages": [
            "In general it is possible for agents in the Conversational Cloud to send each other private text messages. This feature can now be used via the Third-Party bots as well. This will allow Brands to define private message text within the conversational flow of the bot. These messages are published into the conversation for other Agent/Manger participants. This enables Brands to customize messages giving more insight, summarizing actions taken by the bot, or also advising on next actions the handover agent should take.",
            "Setting a private text message between multiple messages is also possible. Moreover, it is also possible to send a private text message with a combination of actions (e.g. Transfer) as well.",
            "The private message is not visible in the messenger. You can see the private message in the Conversational Cloud.",
            {
                "messageAudience": "AGENTS_AND_MANAGERS",
                "text": "This is a private message for a Conversational Cloud agent from a third party bot."
            }
        ],
        "context": {}
    }

    const skillTransfer = {
        "messages": [
            "This option transfers the conversation to the next available agent using the provided skill.",
            "You will be transferred to the given skill."
        ],
        "context": {
            "action": "TRANSFER",
            "actionParameters": {
                "skill": "SpecificAgentSkill"
            }
        }
    }

    const whatsAppReplyButton = {
        "messages": [
            "WhatsApp offers at the moment only one type of Rich Content.",
            "In WhatsApp Business Messages, a Reply Button Message has the following structure: Header (optional), title, subtitle, footer (optional) and buttons (between 1 and 3).",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "vertical",
                    "tag": "generic",
                    "elements": [
                        {
                            "type": "image",
                            "url": "https://i.imgur.com/8meDl0W.jpeg"
                        },
                        {
                            "type": "text",
                            "text": "LivePerson",
                            "tag": "title"
                        },
                        {
                            "type": "text",
                            "text": "The world's most innovative brands choose LivePerson's Conversational Cloud",
                            "tag": "subtitle"
                        },
                        {
                            "type": "text",
                            "text": "The First AI-powered Conversational Cloud",
                            "tag": "footer"
                        },
                        {
                            "type": "button",
                            "title": "WA Rich Content",
                            "click": {
                                "actions": [
                                    {
                                        "type": "publishText",
                                        "text": "WA Rich Content"
                                    }
                                ]
                            }
                        },
                        {
                            "type": "button",
                            "title": "WA Vendor Actions",
                            "click": {
                                "actions": [
                                    {
                                        "type": "publishText",
                                        "text": "WA Vendor Actions"
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ],
        "context": {}
    }

    callback(null, agentTransfer);
}