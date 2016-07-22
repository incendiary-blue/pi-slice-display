import Vue from './vue';
Vue.use(require('vue-resource'));

import Welcome from './components/welcome';
import Image from './components/image';
import Stats from './components/stats';
import Carousel from './components/carousel';

var vm = new Vue({

    el: '#app',

    data: {
        currentUUID: '',
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

//        setInterval(function () {
//           this.updateData();
//        }.bind(this), 1000);

    },

    components: { 
        Welcome,
        Image,
        Stats, 
        Carousel
    },
    
    methods: {
        
        updateData: function () {

            this.$http.get('//pislice.online/api/v1/getcontent/' + this.serial).then((response) => {
                // success callback
                let returnData = response.json();
                
                // Check the UUID from the response against the UUID saved currently
                if (returnData.uuid == this.currentUUID) {
                    console.log('No update required');
                } else {
                    console.log('Update required');
                    this.currentUUID = returnData.uuid;
                    this.currentView = returnData.layout;
                    this.data = returnData.data;
                }

            }, (response) => {
                // error callback
                console.log('failure');
            });
        }
    }
});