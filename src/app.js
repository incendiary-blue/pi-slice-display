import Vue from './vue';
import Welcome from './components/welcome';
import Stats from './components/stats';
import Carousel from './components/carousel';

var vm = new Vue({

    el: '#app',

    data: {
        currentUUID: 'current UUID',

        // Current Layout
        currentView: 'welcome',
        data: {}
    },

    computed: {
        serial: function(){
            return serial;
        }
    },

    ready(){
        console.log('Vue is running');
        this.updateData();

        setInterval(function () {
           this.updateData();
        }.bind(this), 300000);

    },

    components: { 
        Welcome,
        Stats, 
        Carousel
    },
    
    methods: {
        
        updateData: function () {

            // The connection URL is going to be www.pislice.online/getDisplayContent/ + this.serial{id}

            /*this.$http.get('//google.com').then((response) => {*/
                // success callback

                this.response = {
                    'UUID' : "12312-wefriwe234234",
                    "layout" : "carousel",
                    "data" : {
                        "message" : "This is the welcome message",
                        "images" : [
                            'http://dummyimage.com/600x400/000/fff&text=Test+1',
                            'http://dummyimage.com/600x400/000/fff&text=Test+2',
                            'http://dummyimage.com/600x400/000/fff&text=Test+3'
                        ],
                        "stats": [
                            {
                                "stat" : "21%",
                                "title": "Title 1"
                            },
                            {
                                "stat" : "28.32 hours",
                                "title": "Title 2"
                            },
                            {
                                "stat" : "12.5 minutes",
                                "title": "Title 3"
                            }
                        ]

                    }
                }
                
                console.log('Current UUID: ' + this.currentUUID);  
                console.log('UUID from response: ' + this.response.UUID);        

                // Check the UUID from the response against the UUID saved currently
                if (this.response.UUID == this.currentUUID) {
                    console.log('No update required');  
                } else {
                    console.log('Update required');
                    this.currentUUID = this.response.UUID;
                    console.log('RESPONSE UUID: ' + this.response.UUID); 
                    console.log('Current UUID: ' + this.currentUUID); 
                    
                    this.currentView = this.response.layout;
                    this.data = this.response.data;
                };



                // $return = {
                //     "UUID" : "12312-wefriwe234234",
                //     "layout" : "carousel",
                //     "data" : {
                //         "images" : [
                //             'http://dummyimage.com/600x400/000/fff&text=Test+1',
                //             'http://dummyimage.com/600x400/000/fff&text=Test+2',
                //             'http://dummyimage.com/600x400/000/fff&text=Test+3'
                //         ]
                //     }
                // }

                // $return = {
                //     "UUID" : "12312-wefriwe234234",
                //     "layout" : "stats",
                //     "data" : {
                //         "stats": [
                //             {
                //                 "stat" : "21%",
                //                 "title": "Title 1"
                //             },
                //             {
                //                 "stat" : "28.32 hours",
                //                 "title": "Title 2"
                //             },
                //             {
                //                 "stat" : "12.5 minutes",
                //                 "title": "Title 3"
                //             }
                //         ]
                //     }
                // }

                
                // If they are different then continue to process the update

                // Get the new layout type

                // Set it to currentView

                // Send through the data

            /*}, (response) => {
                // error callback
                console.log('failure');
            });*/
        }
    }
});