import Vue from './vue';
import Welcome from './components/welcome';
import Stats from './components/stats';

var vm = new Vue({

    el: '#app',

    data: {
        /*// Store the last uuid from the server
        response: {},*/
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

            // The connection URL is going to be www.pislice.online/getDisplayContent/ + this.serial{id}

            /*this.$http.get('//google.com').then((response) => {*/
                // success callback

                this.repsonse = [{
                    'UUID' : "12312-wefriwe234234",
                    "layout" : "stats",
                    "data" : {
                        "message" : "This is the welcome message"
                    }
                }]

                this.UUID = this.repsonse[0].UUID;
                this.Layout = this.repsonse[0].layout;

                console.log('Current UUID: ' + this.currentUUID);  
                console.log('UUID from response: ' + this.UUID);        

                // Check the UUID from the response against the UUID saved currently
                if (this.UUID == this.currentUUID) {
                    console.log('The Current UUID is the same as the latest version - No update required');  
                } else {
                    console.log('Current UUID is not the same as the most recent verstion - update required');
                    this.currentUUID = this.UUID;
                    console.log('RESPONSE UUID: ' + this.UUID); 
                    console.log('Current UUID: ' + this.currentUUID); 
                };


                console.log('Current LAYOUT: ' + this.currentView); 
                if (this.Layout == this.currentView) {
                    console.log('Keep current view');  
                } else {
                    console.log('Change the view to ' + this.Layout + ' layout');
                    this.currentView = this.Layout;
                    console.log('RESPONSE Layout: ' + this.Layout); 
                    console.log('Current Layout: ' + this.currentView); 
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