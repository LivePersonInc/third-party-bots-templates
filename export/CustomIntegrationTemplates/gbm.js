function lambda(input, callback) {

    const gbmCard = {
        "messages": [
            "In Google Business Messages a card has the following structure: Image, title, description and up to 4 buttons.",
            "See the following example:",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "vertical",
                    "tag": "generic",
                    "display": {
                        "size": "tall"
                    },
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
                                        "text": "GBM"
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
            }
        ],
        "context": {}
    }

    const gbmCarousel = {
        "messages": [
            "The Google Business Messages (GBM) carousel is a horizontally scrollable carousel of up to 10 rich cards.",
            "See the following example:",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "carousel",
                    "elements": [
                        {
                            "type": "vertical",
                            "tag": "generic",
                            "display": {
                                "size": "tall"
                            },
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
                                }
                            ]
                        },
                        {
                            "type": "vertical",
                            "tag": "generic",
                            "display": {
                                "size": "tall"
                            },
                            "elements": [
                                {
                                    "type": "image",
                                    "url": "https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg"
                                },
                                {
                                    "type": "text",
                                    "tag": "title",
                                    "text": "Bella"
                                },
                                {
                                    "type": "text",
                                    "text": "Bella loves me"
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
                                }
                            ]
                        }
                    ]
                }
            }
        ],
        "context": {}
    }

    const gbmQuickReplies = {
        "messages": [
            "The Google Business Messages (GBM) quick reply message consist of up to 13 Buttons that are attached to a regular text message.",
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
                                            "text": "GBM Carousel"
                                        }
                                    ]
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
                                            "text": "GBM Card"
                                        }
                                    ]
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
                                    ]
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

    callback(null, gbmCard);
}