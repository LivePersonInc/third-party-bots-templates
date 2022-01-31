function lambda(input, callback) {

    const rcsCard = {
        "messages": [
            "The RCS Business Messaging card has 2 template orientation options: Vertical and horizontal. Both can contain: Title, subtitle, image and up to 4 buttons (link, navigation and publish text).",
            "See following examples:",
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
                                    "url": "https://i.imgur.com/8meDl0W.jpeg"
                                },
                                {
                                    "type": "text",
                                    "tag": "title",
                                    "text": "LivePerson"
                                },
                                {
                                    "type": "text",
                                    "tag": "subtitle",
                                    "text": "Connecting Brands to people"
                                },
                                {
                                    "type": "button",
                                    "title": "Homepage",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "link",
                                                "uri": "https://www.liveperson.com/"
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
                                                "lo": 40.75614,
                                                "la": -73.99924
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "button",
                                    "title": "Rich Content",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "publishText",
                                                "text": "RCS"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "button",
                                    "title": "Vendor Actions",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "publishText",
                                                "text": "Vendor Actions"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "metadata": [],
                "structuredContent": {
                    "type": "horizontal",
                    "tag": "generic",
                    "elements": [
                        {
                            "type": "vertical",
                            "elements": [
                                {
                                    "type": "image",
                                    "url": "https://i.imgur.com/8meDl0W.jpeg"
                                },
                                {
                                    "type": "text",
                                    "tag": "title",
                                    "text": "LivePerson"
                                },
                                {
                                    "type": "text",
                                    "tag": "subtitle",
                                    "text": "Connecting Brands to people"
                                },
                                {
                                    "type": "button",
                                    "title": "Homepage",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "link",
                                                "uri": "https://www.liveperson.com/"
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
                                                "lo": 40.75614,
                                                "la": -73.99924
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "button",
                                    "title": "Rich Content",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "publishText",
                                                "text": "RCS"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "button",
                                    "title": "Vendor Actions",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "publishText",
                                                "text": "Vendor Actions"
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

    const rcsCarousel = {
        "messages": [
            "The RCS carousel is a horizontally scrollable carousel of up to 10 vertical rich cards. Each card can include the following elements: Title, subtitle, image and up to 4 buttons (link, navigation and publish text).",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "carousel",
                    "padding": 10,
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

    const rcsQuickReplies = {
        "messages": [
            "Quick Replies for RCS Business Messaging include the question/statement text and a set of up to 11 replies that each contain: Title text (including emojis) or publish text click action.",
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
                                "title": "Card",
                                "click": {
                                    "actions": [
                                        {
                                            "type": "publishText",
                                            "text": "RCS Card"
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
                                            "text": "RCS Carousel"
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
                    "message": "In what else are you interested in?"
                }
            }
        ],
        "context": {}
    }

    callback(null, rcsCard);
}