function lambda(input, callback) {

    const webCard = {
        "messages": [
            "The very basic Rich Content elements that can contain either/or elements, template, styling and actions.",
            "See the following example:",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "vertical",
                    "elements": [
                        {
                            "type": "image",
                            "url": "https://i.imgur.com/8meDl0W.jpeg",
                            "tooltip": "image tooltip"
                        },
                        {
                            "type": "text",
                            "text": "LivePerson",
                            "tooltip": "text tooltip"
                        },
                        {
                            "type": "text",
                            "text": "Connecting Brands to people",
                            "tooltip": "text tooltip"
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
            }
        ],
        "context": {}
    }

    const webCarousel = {
        "messages": [
            "A horizontal representation of 2-10 Rich Content cards of the same business logic and structure. The carousel format can support a variety of businesses and needs to showcase service offerings, events and more.",
            "See the following example:",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "carousel",
                    "padding": 10,
                    "elements": [
                        {
                            "type": "vertical",
                            "elements": [
                                {
                                    "type": "image",
                                    "url": "https://i.imgur.com/8meDl0W.jpeg",
                                    "tooltip": "image tooltip"
                                },
                                {
                                    "type": "text",
                                    "text": "LivePerson",
                                    "tooltip": "text tooltip"
                                },
                                {
                                    "type": "text",
                                    "text": "Connecting Brands to people",
                                    "tooltip": "text tooltip"
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
                        },
                        {
                            "type": "vertical",
                            "elements": [
                                {
                                    "type": "image",
                                    "url": "https://bellaloves.me/wp-content/uploads/2021/05/share-bella.jpg",
                                    "tooltip": "image tooltip"
                                },
                                {
                                    "type": "text",
                                    "text": "Bella",
                                    "tooltip": "text tooltip"
                                },
                                {
                                    "type": "text",
                                    "text": "Bella loves me",
                                    "tooltip": "text tooltip"
                                },
                                {
                                    "type": "button",
                                    "tooltip": "Bella Homepage",
                                    "title": "Bella Homepage",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "link",
                                                "name": "URL button tap",
                                                "uri": "https://bellaloves.me/"
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

    const webDatePicker = {
        "messages": [
            "Web Messaging now allows for Date Picker functionality. The Conversational Cloud enables the agent to send a Rich Content button with a date picker action attached. This action will present a graphical user interface widget, which allows the consumer to efficiently select a date or date range.",
            "Please note that the DatePicker JSON schema is only supported on accounts using UMS version 4.2, please contact your LivePerson representative to validate your account qualifies for this feature.",
            "See the following example:",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "vertical",
                    "border": "dropShadow",
                    "elements": [
                        {
                            "type": "horizontal",
                            "borderLine": false,
                            "percentages": [
                                20,
                                80
                            ],
                            "elements": [
                                {
                                    "type": "image",
                                    "url": "https://i.imgur.com/8meDl0W.jpeg",
                                    "tooltip": "image tooltip"
                                },
                                {
                                    "type": "vertical",
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "Date Picker",
                                            "tooltip": "text tooltip",
                                            "style": {
                                                "bold": true,
                                                "size": "large"
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "text": "Select a date range",
                                            "tooltip": "text tooltip"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "button",
                            "tooltip": "button tooltip",
                            "title": "Select dates",
                            "class": "button",
                            "style": {
                                "background-color": "#3736A6",
                                "color": "#ffffff",
                                "size": "medium",
                                "bold": true
                            },
                            "click": {
                                "actions": [
                                    {
                                        "type": "datePicker",
                                        "class": "range",
                                        "title": "Select range of date",
                                        "minDate": 1618613044,
                                        "maxDate": 1634424244,
                                        "dateFormat": "DD-MM-YYYY"
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

    const webMultipleChecklist = {
        "messages": [
            "The Multiple Checklist Template for the Web Messaging channel enables human or bot agents to share a list of items, while allowing the consumer to select multiple items and reply back with the selection.",
            "See the following example:",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "list",
                    "elements": [
                        {
                            "type": "text",
                            "text": "Which company are you specifically looking for?"
                        },
                        {
                            "type": "sectionList",
                            "elements": [
                                {
                                    "type": "section",
                                    "sectionID": "channels",
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "&#x1F449; choose all that apply"
                                        },
                                        {
                                            "type": "checklist",
                                            "elements": [
                                                {
                                                    "type": "checkbox",
                                                    "text": "LivePerson",
                                                    "borderLine": true,
                                                    "borderColor": "#d4d4d5",
                                                    "click": {
                                                        "metadata": [
                                                            {
                                                                "type": "ExternalId",
                                                                "id": "ANOTHER_ONE_35"
                                                            }
                                                        ],
                                                        "actions": [
                                                            {
                                                                "type": "checked",
                                                                "publishText": "LivePerson"
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    "type": "checkbox",
                                                    "text": "Bella",
                                                    "borderLine": true,
                                                    "borderColor": "#d4d4d5",
                                                    "click": {
                                                        "metadata": [
                                                            {
                                                                "type": "ExternalId",
                                                                "id": "ANOTHER_ONE_30"
                                                            }
                                                        ],
                                                        "actions": [
                                                            {
                                                                "type": "checked",
                                                                "publishText": "Bella"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "buttonList",
                            "elements": [
                                {
                                    "type": "submitButton",
                                    "title": "Continue",
                                    "disabled": false,
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "submitAsText",
                                                "submit": true
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "button",
                                    "title": "Back",
                                    "click": {
                                        "actions": [
                                            {
                                                "type": "publishText",
                                                "text": "web rich content"
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

    const webScheduleSlotList = {
        "messages": [
            "Web Messaging now allows functionality to present Schedule Slot Lists. The Conversational Cloud enables the agent to send a Rich Content button with a Schedule Slot Lists action attached. This action will present a graphical user interface widget, which allows the consumer to efficiently select an appointment slot from a list.",
            "Please note that the ScheduleSlotList JSON schema is only supported on accounts using UMS version 4.2, please contact your LivePerson representative to validate your account qualifies for this feature.",
            {
                "metadata": [],
                "structuredContent": {
                    "type": "vertical",
                    "border": "dropShadow",
                    "elements": [
                        {
                            "type": "horizontal",
                            "borderLine": false,
                            "elements": [
                                {
                                    "type": "vertical",
                                    "elements": [
                                        {
                                            "type": "text",
                                            "text": "Schedule List",
                                            "tooltip": "text tooltip",
                                            "style": {
                                                "bold": true,
                                                "size": "large"
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "text": "Select appointment",
                                            "tooltip": "text tooltip"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "type": "button",
                            "tooltip": "button tooltip",
                            "title": "Select appointment",
                            "class": "button",
                            "style": {
                                "background-color": "#3736A6",
                                "color": "#ffffff",
                                "border-radius": 10,
                                "border-color": "#000000",
                                "size": "medium",
                                "bold": true
                            },
                            "click": {
                                "actions": [
                                    {
                                        "type": "scheduleSlotList",
                                        "title": "Schedule your appointment",
                                        "firstDayOfTheWeek": "mon",
                                        "slots": [
                                            {
                                                "type": "scheduleSlot",
                                                "id": "1634914800000",
                                                "start": 1768214415,
                                                "end": 1768218015,
                                                "title": "First slot",
                                                "description": "First slot of the day",
                                                "imageUrl": "https://robohash.org/1634914800000.png?size=35x35&set=set2"
                                            },
                                            {
                                                "type": "scheduleSlot",
                                                "id": "1634914800001",
                                                "start": 1768218015,
                                                "end": 1768221615,
                                                "title": "second slot",
                                                "description": "second slot of the day",
                                                "imageUrl": "https://robohash.org/1634914800000.png?size=35x35&set=set3"
                                            },
                                            {
                                                "type": "scheduleSlot",
                                                "id": "1634914800002",
                                                "start": 1768221615,
                                                "end": 1768225215,
                                                "title": "third slot",
                                                "description": "third slot of the day",
                                                "imageUrl": "https://robohash.org/1634914800000.png?size=35x35&set=set4"
                                            }
                                        ]
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

    callback(null, webCard);
}