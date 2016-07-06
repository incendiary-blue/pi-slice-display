import Vue from './vue';
import Welcome from './components/welcome';
import Stats from './components/stats';

var vm = new Vue({

    el: '#app',

    data: {
        // Store the last uuid from the server
        response: {},
        currentUUID: 'default UUID',

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

        // setInterval(function () {
        //    this.updateData();
        // }.bind(this), 50000);

    },

    components: { 
        Welcome,
        Stats
    },
    
    methods: {

        updateData: function () {

            // The connection URL is going to be www.pislice.online/getDisplayContent/{id}

           /* this.$http.get('//pislice.online/getDisplayContent/' + this.serial).then((response) => {*/
                // success callback
                console.log('Current UUID: ' + this.currentUUID);  

                this.repsonse = {
                    'UUID' : "12312-wefriwe234234",
                    "layout" : "welcome",
                    "data" : {
                        "message" : "This is the welcome message"
                    }
                }

                this.repsonse.UUID === 'bob';
                this.repsonse.UUID = this.currentUUID;

                console.log('UUID from response: ' + this.repsonse.UUID);      
                console.log('UUID after get: ' + this.currentUUID);  

                // Check the UUID from the response against the UUID saved currently
                if (this.repsonse.UUID == this.currentUUID) {
                    console.log('uuid has been updated: '+ this.repsonse.UUID + 'vs' + this.currentUUID);  
                } else {
                    console.log('uuid not same - get new update');
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
/*
            }, (response) => {
                // error callback
                console.log('failure');
            });*/
        }
    }
});