function lambda(input, callback) {

    const facebook = {
        "messages": [
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
                                "title": "Generic",
                                "click": {
                                    "actions": [
                                        {
                                            "type": "publishText",
                                            "text": "Generic"
                                        }
                                    ],
                                    "metadata": []
                                }
                            },
                            {
                                "type": "button",
                                "tooltip": "",
                                "title": "Carousel",
                                "click": {
                                    "actions": [
                                        {
                                            "type": "publishText",
                                            "text": "Carousel"
                                        }
                                    ],
                                    "metadata": []
                                }
                            },
                            {
                                "type": "button",
                                "tooltip": "",
                                "title": "Button",
                                "click": {
                                    "actions": [
                                        {
                                            "type": "publishText",
                                            "text": "Button"
                                        }
                                    ],
                                    "metadata": []
                                }
                            },
                            {
                                "type": "button",
                                "tooltip": "",
                                "title": "Quick Replies",
                                "click": {
                                    "actions": [
                                        {
                                            "type": "publishText",
                                            "text": "Quick Replies"
                                        }
                                    ],
                                    "metadata": []
                                }
                            }
                        ]
                    },
                    "message": "Which type of rich content do you want to see?"
                }
            }
        ],
        "context": {}
    }

    const facebookButton = {
        "messages": [
            "The Button template is a simple structured card message that includes a title and up to 3 buttons (link, publish text or navigation).",
            "See the following example:",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "vertical",
                    "tag": "button",
                    "elements": [
                        {
                            "type": "vertical",
                            "elements": [
                                {
                                    "type": "text",
                                    "tag": "title",
                                    "text": "Title",
                                    "tooltip": "Button Title"
                                },
                                {
                                    "type": "button",
                                    "tooltip": "URL example",
                                    "title": "URL button example",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "link",
                                                "name": "URL button tap",
                                                "uri": "https://www.liveperson.com"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "button",
                                    "title": "Navigate",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "navigate",
                                                "lo": 40.7562,
                                                "la": -73.99861
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "button",
                                    "tooltip": "Publish text example",
                                    "title": "Back to RC Selection",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "publishText",
                                                "text": "Facebook"
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

    const facebookCarousel = {
        "messages": [
            "The Carousel template is a horizontally scrollable carousel of generic or button templates. The carousel includes a list of up to 10 generic or button cards that each can include: Title, subtitle, image and up to 3 buttons (publish text, link or navigation)",
            "See the following example:",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "carousel",
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
                                            "tooltip": "",
                                            "url": "https://i.imgur.com/8meDl0W.jpeg"
                                        },
                                        {
                                            "type": "text",
                                            "tag": "title",
                                            "text": "LivePerson Homepage",
                                            "tooltip": ""
                                        },
                                        {
                                            "type": "button",
                                            "title": "Follow Link",
                                            "click": {
                                                "actions": [
                                                    {
                                                        "type": "link",
                                                        "uri": "https://www.liveperson.com"
                                                    }
                                                ]
                                            },
                                            "tooltip": ""
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
                                            "tooltip": "",
                                            "url": "https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg"
                                        },
                                        {
                                            "type": "text",
                                            "tooltip": "",
                                            "tag": "title",
                                            "text": "Bella Homepage"
                                        },
                                        {
                                            "type": "button",
                                            "title": "Follow link",
                                            "click": {
                                                "actions": [
                                                    {
                                                        "type": "link",
                                                        "uri": "https://www.bellaloves.me/"
                                                    }
                                                ]
                                            },
                                            "tooltip": ""
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

    const facebookGeneric = {
        "messages": [
            "The Generic template is a simple structured card message that includes: Title, subtitle, image and up to 3 buttons (publish text, link or navigation)",
            "See the following example:",
            {
                "metadata": [],
                "structuredContent": {
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
                                },
                                {
                                    "type": "button",
                                    "title": "Start Navigation",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "navigate",
                                                "lo": 40.75614,
                                                "la": -73.99924
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

    const facebookQuickReplies = {
        "messages": [
            "The Quick Reply template provides a way to receive consumer input to a question/statement by a set of buttons that each contain a title text and/or emojis. The quick reply options always appear above the message composition in the Facebook Messenger window, and will be published in the conversation thread upon consumer selection.",
            "Quick Replies for Facebook Messenger includes a set of up to 11 buttons that can each contain a text title and a publish text click action.",
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
                                "title": "Generic",
                                "click": {
                                    "actions": [
                                        {
                                            "type": "publishText",
                                            "text": "Generic"
                                        }
                                    ],
                                    "metadata": []
                                }
                            },
                            {
                                "type": "button",
                                "tooltip": "",
                                "title": "Carousel",
                                "click": {
                                    "actions": [
                                        {
                                            "type": "publishText",
                                            "text": "Carousel"
                                        }
                                    ],
                                    "metadata": []
                                }
                            },
                            {
                                "type": "button",
                                "tooltip": "",
                                "title": "Button",
                                "click": {
                                    "actions": [
                                        {
                                            "type": "publishText",
                                            "text": "Button"
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

    callback(null, facebook);
}