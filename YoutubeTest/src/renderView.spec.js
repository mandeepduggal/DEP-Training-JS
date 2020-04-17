describe("Testing 'mainCardView'", () => {
    let data;
    beforeEach(function() {
        data = { 'items': ['1', '2', '3'] };
    });
    it("check function call", () => {
        spyOn(window, "cardViewTemplate");
        spyOn(window, "setAblityOfButton");
        let result = mainCardView(data);
        expect(cardViewTemplate).toHaveBeenCalled();

    });
});

describe("Testing 'cardViewTemplate'", () => {
    beforeEach(function() {
        responseData = [{
                "snippet": {
                    "publishedAt": "2020-03-11T04:27:39.000Z",
                    "channelId": "UC_vMEgcD77-IJ3YQ8CTGaFQ",
                    "title": "Shinchan LATEST Episode In Hindi 2020 🍑🍒 Shinchan Cartoon NEW Episode HD 🍓🍑 #Shinchanhindi Ep",
                    "description": "shinchanhindi #shinchan2020 #shinchancartoons Shinchan LATEST Episode In Hindi 2020 Shinchan Cartoon NEW Episode HD #Shinchanhindi Ep ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Bjdn0Qp7A8k/default.jpg",
                            width: 120,
                            height: 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Bjdn0Qp7A8k/mqdefault.jpg",
                            width: 320,
                            height: 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Bjdn0Qp7A8k/hqdefault.jpg",
                            width: 480,
                            height: 360
                        },
                    },
                }
            },
            {
                "snippet": {
                    "publishedAt": "2020-03-11T04:14:55.000Z",
                    "channelId": "UC_vMEgcD77-IJ3YQ8CTGaFQ",
                    "title": "Shinchan Latest Episode In Hindi 2019 / Shinchan Cartoon New Episode Hindi #Shinchanhindi Ep 156",
                    "description": "Product link - Product app - shinchan cartoon,shinchan in tamil,shinchan shinchan,shinchan new episode,shinchan in hindi,shinchan in telugu,shinchan nohara ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4_Y_AgHQ38Y/default.jpg",
                            width: 120,
                            height: 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4_Y_AgHQ38Y/mqdefault.jpg",
                            width: 320,
                            height: 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4_Y_AgHQ38Y/hqdefault.jpg",
                            width: 480,
                            height: 360
                        },
                    },
                }
            },
            {
                "snippet": {
                    "publishedAt": "2020-03-11T04:27:39.000Z",
                    "channelId": "UC_vMEgcD77-IJ3YQ8CTGaFQ",
                    "title": "Shinchan LATEST Episode In Hindi 2020 🍑🍒 Shinchan Cartoon NEW Episode HD 🍓🍑 #Shinchanhindi Ep",
                    "description": "shinchanhindi #shinchan2020 #shinchancartoons Shinchan LATEST Episode In Hindi 2020 Shinchan Cartoon NEW Episode HD #Shinchanhindi Ep ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Bjdn0Qp7A8k/default.jpg",
                            width: 120,
                            height: 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Bjdn0Qp7A8k/mqdefault.jpg",
                            width: 320,
                            height: 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Bjdn0Qp7A8k/hqdefault.jpg",
                            width: 480,
                            height: 360
                        },
                    },
                }
            },
            {
                "snippet": {
                    "publishedAt": "2020-03-11T04:14:55.000Z",
                    "channelId": "UC_vMEgcD77-IJ3YQ8CTGaFQ",
                    "title": "Shinchan Latest Episode In Hindi 2019 / Shinchan Cartoon New Episode Hindi #Shinchanhindi Ep 156",
                    "description": "Product link - Product app - shinchan cartoon,shinchan in tamil,shinchan shinchan,shinchan new episode,shinchan in hindi,shinchan in telugu,shinchan nohara ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4_Y_AgHQ38Y/default.jpg",
                            width: 120,
                            height: 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4_Y_AgHQ38Y/mqdefault.jpg",
                            width: 320,
                            height: 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4_Y_AgHQ38Y/hqdefault.jpg",
                            width: 480,
                            height: 360
                        },
                    },
                }
            },
            {

                "snippet": {
                    "publishedAt": "2020-03-11T04:27:39.000Z",
                    "channelId": "UC_vMEgcD77-IJ3YQ8CTGaFQ",
                    "title": "Shinchan LATEST Episode In Hindi 2020 🍑🍒 Shinchan Cartoon NEW Episode HD 🍓🍑 #Shinchanhindi Ep",
                    "description": "shinchanhindi #shinchan2020 #shinchancartoons Shinchan LATEST Episode In Hindi 2020 Shinchan Cartoon NEW Episode HD #Shinchanhindi Ep ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Bjdn0Qp7A8k/default.jpg",
                            width: 120,
                            height: 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Bjdn0Qp7A8k/mqdefault.jpg",
                            width: 320,
                            height: 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Bjdn0Qp7A8k/hqdefault.jpg",
                            width: 480,
                            height: 360
                        },
                    },
                }
            },
            {

                "snippet": {
                    "publishedAt": "2020-03-11T04:14:55.000Z",
                    "channelId": "UC_vMEgcD77-IJ3YQ8CTGaFQ",
                    "title": "Shinchan Latest Episode In Hindi 2019 / Shinchan Cartoon New Episode Hindi #Shinchanhindi Ep 156",
                    "description": "Product link - Product app - shinchan cartoon,shinchan in tamil,shinchan shinchan,shinchan new episode,shinchan in hindi,shinchan in telugu,shinchan nohara ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4_Y_AgHQ38Y/default.jpg",
                            width: 120,
                            height: 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4_Y_AgHQ38Y/mqdefault.jpg",
                            width: 320,
                            height: 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4_Y_AgHQ38Y/hqdefault.jpg",
                            width: 480,
                            height: 360
                        },
                    },
                }
            }
        ]

    });
    it("check function call", () => {
        spyOn(window, "getMainNode").and.returnValue(" ");
        let result = cardViewTemplate();
        expect(cardViewTemplate).toBeTruthy();

    });
});
