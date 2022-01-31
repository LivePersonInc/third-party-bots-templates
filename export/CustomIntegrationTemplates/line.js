function lambda(input, callback) {

    const lineCard = {
        "messages": [
            "Use LINE cards to send a message with an image, title, text and multiple buttons with actions.The card contains the following elements: Title, subtitle, image and up to 4 buttons (publish text and link)",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "vertical",
                    "tag": "generic",
                    "alt": "LivePerson",
                    "elements": [
                        {
                            "type": "vertical",
                            "elements": [
                                {
                                    "type": "image",
                                    "url": "https://i.imgur.com/8meDl0W.jpeg",
                                    "tooltip": "LivePerson"
                                },
                                {
                                    "type": "text",
                                    "tag": "title",
                                    "text": "LivePerson",
                                    "tooltip": "Title"
                                },
                                {
                                    "type": "text",
                                    "tag": "subtitle",
                                    "text": "Connecting Brands to people",
                                    "tooltip": "subtitle"
                                },
                                {
                                    "type": "button",
                                    "tooltip": "",
                                    "title": "Publish text example",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "publishText",
                                                "text": "Publish text example"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "button",
                                    "tooltip": "LivePerson Homepage",
                                    "title": "LivePerson Homepage",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "link",
                                                "name": "URL button tap",
                                                "uri": "https://www.liveperson.com"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        ],
        "context": {}
    }

    const lineCarousel = {
        "messages": [
            "The LINE carousel is a horizontally scrollable carousel of up to 10 rich cards. Each card can include the following elements: Title, subtitle, image and up to 3 buttons.",
            "Please note that the carousel items needs to have the same length.",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "carousel",
                    "padding": 10,
                    "alt": "LivePerson",
                    "elements": [
                        {
                            "type": "vertical",
                            "tag": "generic",
                            "elements": [
                                {
                                    "type": "vertical",
                                    "elements": [
                                        {
                                            "type": "image",
                                            "url": "https://i.imgur.com/8meDl0W.jpeg",
                                            "tooltip": "LivePerson"
                                        },
                                        {
                                            "type": "text",
                                            "tag": "title",
                                            "text": "LivePerson"
                                        },
                                        {
                                            "type": "text",
                                            "tag": "subtitle",
                                            "text": "Custom AI-Powered Messaging",
                                            "tooltip": "Custom AI-Powered Messaging"
                                        },
                                        {
                                            "type": "button",
                                            "title": "Follow Link",
                                            "click": {
                                                "actions": [
                                                    {
                                                        "name": "LivePerson HomePage",
                                                        "type": "link",
                                                        "uri": "https://www.liveperson.com"
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "vertical",
                            "tag": "generic",
                            "elements": [
                                {
                                    "type": "vertical",
                                    "elements": [
                                        {
                                            "type": "image",
                                            "url": "https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg",
                                            "tooltip": "Bella"
                                        },
                                        {
                                            "type": "text",
                                            "tag": "title",
                                            "text": "Bella"
                                        },
                                        {
                                            "type": "text",
                                            "tag": "subtitle",
                                            "text": "Bella loves me"
                                        },
                                        {
                                            "type": "button",
                                            "title": "Follow Link",
                                            "click": {
                                                "actions": [
                                                    {
                                                        "type": "link",
                                                        "name": "Flowers",
                                                        "uri": "https://bellaloves.me"
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ],
        "context": {}
    }

    const lineQR = {
        "messages": [
            "When a user receives a message that contains quick reply buttons from a brand, those buttons appear at the bottom of the chat screen on LINE messenger. The user can simply tap one of the buttons to reply to the brand, the response will be captured and shared back to the agent.",
            "A LINE quick reply button consists of the question/statement text and a set of up to 13 buttons and that each contain: Title text (including emojis) or publish text click action.",
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
                                "title": "Carousel",
                                "click": {
                                    "actions": [
                                        {
                                            "type": "publishText",
                                            "text": "Line Carousel"
                                        }
                                    ],
                                    "metadata": []
                                }
                            },
                            {
                                "type": "button",
                                "tooltip": "",
                                "title": "Card",
                                "click": {
                                    "actions": [
                                        {
                                            "type": "publishText",
                                            "text": "Line Card"
                                        }
                                    ],
                                    "metadata": []
                                }
                            },
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
                            }
                        ]
                    },
                    "message": "In what else are you interested?"
                }
            }
        ],
        "context": {}
    }

    callback(null, lineCard);
}