function lambda(input, callback) {

    const appleAuth = {
        "messages": [
            "The Apple Business Chat messaging channel now allows you to send an authentication request to consumers (only from iOS 12 onwards) using an OAuth 2.0 provider. The consumers then respond to the authentication request with their user/password credentials which can be validated against the OAuth 2.0 provider.",
            "Please note that the requestIdentifier field must be unique for each message. Therefore, you should replace the requestIdentifier before testing. You will also need your own public key.",
            "See the following example:",
            {
                "metadata": [
                    {
                        "type": "BusinessChatMessage",
                        "receivedMessage": {
                            "title": "Sign In to LivePerson",
                            "subtitle": "Thank you",
                            "imageURL": "https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png",
                            "style": "small"
                        },
                        "replyMessage": {
                            "title": "You Signed in",
                            "subtitle": "Thank you",
                            "imageURL": "https://www.liveperson.com/sites/default/files/pictures/nav/Logo-LP-White.png",
                            "style": "small"
                        }
                    },
                    {
                        "type": "ConnectorAuthenticationRequest",
                        "requestIdentifier": "72af1629-54f1-4dba-a0f6-90f606896bd5",
                        "apple": {
                            "oauth2": {
                                "responseEncryptionKey": "AAAAC3NzaC1lZDI1NTE5AAAAIPQwXxHgHXafKYObBs6n45BKtMlPCAa1ddeIYqWTMigh"
                            }
                        }
                    }
                ],
                "structuredContent": {
                    "tag": "authentication",
                    "type": "horizontal",
                    "elements": [
                        {
                            "type": "image",
                            "url": "https://i.imgur.com/8meDl0W.jpeg"
                        },
                        {
                            "type": "text",
                            "text": "authentication details"
                        }
                    ]
                }
            },
            "In what else are you interested?"
        ],
        "context": {}
    }

    const appleCustomInteractiveMessage = {
        "messages": [
            "The Custom Interactive Message (CIM) Template for Apple Business Chat allows you to invoke an iOS iMessage app / extension on the consumer device. This app can allow for a wide range of interactivity without requiring the consumer to leave the conversation.",
            "For how to create an iMessage app / extension, see the Apple documentation (https://developer.apple.com/imessage/)",
            "This template is not covered here as it requires its own IMessage app or extension. More information at the following link.",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "vertical",
                    "tag": "richLink",
                    "elements": [
                        {
                            "type": "image",
                            "url": "https://i.imgur.com/8meDl0W.jpeg"
                        },
                        {
                            "type": "button",
                            "title": "Custom Interactive Message Template",
                            "click": {
                                "actions": [
                                    {
                                        "type": "link",
                                        "uri": "https://developers.liveperson.com/apple-business-chat-templates-custom-interactive-message-template.html"
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            "In what else are you interested?"
        ],
        "context": {}
    }

    const appleListPicker = {
        "messages": [
            "Business Chat List Picker enables human or automated agents to share a list of items and information about them while allowing the consumer to select multiple items and reply back with the selection. Using metadata properties, brands can define the received and reply bubble structures and enable multi-selection capabilities.",
            {
                "metadata": [
                    {
                        "replyMessage": {
                            "secondarySubtitle": "secondarySubtitle",
                            "imageURL": "https://i.imgur.com/8meDl0W.jpeg",
                            "tertiarySubtitle": "tertiarySubtitle",
                            "subtitle": "",
                            "title": "Your selection",
                            "style": "large"
                        },
                        "multipleSelection": [
                            true,
                            false
                        ],
                        "type": "BusinessChatMessage",
                        "receivedMessage": {
                            "tertiarySubtitle": "tertiarySubtitle",
                            "imageURL": "https://i.imgur.com/8meDl0W.jpeg",
                            "subtitle": "Select your company",
                            "secondarySubtitle": "secondary subtitle",
                            "style": "icon",
                            "title": "Two companies"
                        }
                    }
                ],
                "structuredContent": {
                    "elements": [
                        {
                            "elements": [
                                {
                                    "text": "Company",
                                    "tooltip": "text tooltip",
                                    "type": "text",
                                    "style": {
                                        "size": "large",
                                        "bold": true
                                    }
                                },
                                {
                                    "type": "horizontal",
                                    "elements": [
                                        {
                                            "type": "image",
                                            "url": "https://i.imgur.com/8meDl0W.jpeg",
                                            "tooltip": "LivePerson"
                                        },
                                        {
                                            "type": "vertical",
                                            "elements": [
                                                {
                                                    "type": "text",
                                                    "tag": "title",
                                                    "tooltip": "LivePerson",
                                                    "text": "LivePerson",
                                                    "style": {
                                                        "size": "large",
                                                        "bold": true
                                                    }
                                                },
                                                {
                                                    "tag": "subtitle",
                                                    "tooltip": "LivePerson",
                                                    "text": "The First AI-powered Conversational Cloud",
                                                    "type": "text"
                                                },
                                                {
                                                    "title": "Select",
                                                    "click": {
                                                        "metadata": [],
                                                        "actions": [
                                                            {
                                                                "text": "LivePerson",
                                                                "type": "publishText"
                                                            }
                                                        ]
                                                    },
                                                    "type": "button",
                                                    "tooltip": "Select"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "horizontal",
                                    "elements": [
                                        {
                                            "url": "https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg",
                                            "tooltip": "Bella",
                                            "type": "image"
                                        },
                                        {
                                            "elements": [
                                                {
                                                    "tag": "title",
                                                    "tooltip": "Bella",
                                                    "style": {
                                                        "size": "large",
                                                        "bold": true
                                                    },
                                                    "type": "text",
                                                    "text": "Bella"
                                                },
                                                {
                                                    "tag": "subtitle",
                                                    "tooltip": "Bella",
                                                    "text": "Bella loves me",
                                                    "type": "text"
                                                },
                                                {
                                                    "tooltip": "Select",
                                                    "title": "Select",
                                                    "type": "button",
                                                    "click": {
                                                        "actions": [
                                                            {
                                                                "type": "publishText",
                                                                "text": "Bella"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ],
                                            "type": "vertical"
                                        }
                                    ]
                                }
                            ],
                            "type": "vertical"
                        }
                    ],
                    "type": "vertical",
                    "tag": "list"
                }
            }
        ],
        "context": {}
    }

    const applePay = {
        "messages": [
            "The Apple Business Chat messaging channel now supports a new Rich Message type that allows you to submit payment requests to consumers using Apple Pay. The consumers can then respond to the payment request using their preferred Apple Pay payment methods.",
            "Unfortunately, it is not possible to add and test Apple Pay in a test account. Below is the link to the documentation and a screenshot of what Apple Pay looks like.",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "vertical",
                    "tag": "richLink",
                    "elements": [
                        {
                            "type": "image",
                            "url": "https://developers.liveperson.com/img/apple_pay_consumer1.png"
                        },
                        {
                            "type": "button",
                            "title": "Documentation",
                            "click": {
                                "actions": [
                                    {
                                        "type": "link",
                                        "uri": "https://developers.liveperson.com/apple-business-chat-templates-apple-pay-template.html"
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            "In what else are you interested?"
        ],
        "context": {}
    }

    const appleRichLinks = {
        "messages": [
            "Apple has provided a new type of message that allows you to send rich links to the consumer device. Rich link configurable content includes: Bubble title text, link preview image and a link button URL.",
            "See the following example:",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "vertical",
                    "tag": "richLink",
                    "elements": [
                        {
                            "type": "image",
                            "url": "https://i.imgur.com/8meDl0W.jpeg"
                        },
                        {
                            "type": "button",
                            "title": "LivePerson",
                            "click": {
                                "actions": [
                                    {
                                        "type": "link",
                                        "uri": "https://liveperson.com"
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            "What else are you interested in?"
        ],
        "context": {}
    }

    const appleTimePicker = {
        "messages": [
            "Business Chat Time Picker enables human or automated agents to send available time slots when consumers are looking to schedule an appointment with the brand’s various services. Time picker allows the consumer to select the relevant time slot, and reply back with the time selected.",
            {
                "metadata": [
                    {
                        "location": {
                            "la": 49.4872955,
                            "radius": 10,
                            "lo": 8.4682869,
                            "title": "LivePerson ATC Mannheim"
                        },
                        "type": "BusinessEvent",
                        "title": "Technician Visit",
                        "timing": {
                            "presentedTimezoneOffset": 120
                        }
                    },
                    {
                        "replyMessage": {
                            "subtitle": "Time selected!",
                            "style": "large",
                            "title": "Selected time",
                            "imageURL": "https://cdn.dribbble.com/users/85668/screenshots/1352116/dribblble_mock_1x.jpg"
                        },
                        "type": "BusinessChatMessage",
                        "receivedMessage": {
                            "imageURL": "https://cdn.dribbble.com/users/85668/screenshots/1352116/dribblble_mock_1x.jpg",
                            "style": "small",
                            "title": "Available appointments",
                            "subtitle": "Please select your preferred time"
                        }
                    }
                ],
                "structuredContent": {
                    "elements": [
                        {
                            "text": "Select Date",
                            "style": {
                                "bold": true,
                                "size": "large"
                            },
                            "type": "text",
                            "tag": "Title"
                        },
                        {
                            "text": "Tuesday, December 12",
                            "type": "text"
                        },
                        {
                            "type": "horizontal",
                            "elements": [
                                {
                                    "title": "11:30",
                                    "click": {
                                        "metadata": [
                                            {
                                                "type": "ExternalId",
                                                "id": "SlotIdentidier"
                                            },
                                            {
                                                "timing": {
                                                    "duration": 3600,
                                                    "startTime": "2023-12-12T11:30:00Z"
                                                },
                                                "type": "BusinessEvent"
                                            }
                                        ],
                                        "actions": [
                                            {
                                                "type": "publishText",
                                                "text": "Technician visit: 12/12/2023 11:30 IST"
                                            }
                                        ]
                                    },
                                    "type": "button"
                                },
                                {
                                    "title": "12:00",
                                    "type": "button",
                                    "click": {
                                        "actions": [
                                            {
                                                "text": "Technician visit: 12/12/2023 12:00 IST",
                                                "type": "publishText"
                                            }
                                        ],
                                        "metadata": [
                                            {
                                                "id": "SlotIdentidier",
                                                "type": "ExternalId"
                                            },
                                            {
                                                "timing": {
                                                    "duration": 3600,
                                                    "startTime": "2023-12-12T12:00:00Z"
                                                },
                                                "type": "BusinessEvent"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ],
                    "tag": "datePicker",
                    "type": "vertical"
                }
            },
            "In what else are you interested?"
        ],
        "context": {}
    }

    callback(null, appleAuth);
}