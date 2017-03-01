import Vue from './vue';
Vue.use(require('vue-resource'));

import {getConfig} from './config';

import Welcome from './components/welcome';
import Single from './components/single';
import Split from './components/split';
import ThreeUp from './components/three-up';

var vm = new Vue({

    el: '#app',

    data: {
        currentUUID: '',
        // Current Layout
        currentView: 'welcome',
        returnData: {},
        data: {},
        currentLayoutIndex: 0,
        currentLayoutTime: 0
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
        }.bind(this), 5000);

    },

    components: { 
        Welcome,
        Single,
        Split
    },
    
    methods: {
        
        updateData: function () {
            // Let's use our config we imported.
            this.$http.get(getConfig().GET_CONTENT + '/' + this.serial).then((response) => {
                // success callback
                this.returnData = response.json();

                console.log(this.returnData);

                // Check the UUID from the response against the UUID saved currently
                if (this.returnData.uuid == this.currentUUID) {
                } else {
                    this.currentUUID = this.returnData.uuid;

                    // If the return does not contain a display group then we must show the image 
                    if(!this.returnData.display_group){
                        this.currentView = 'Single';
                        this.data = {
                            components: [
                                {
                                    component_type_id: 1,
                                    images: [
                                        {
                                            filename: this.returnData.data.image,
                                            team_id: this.returnData.data.team_id
                                        }
                                    ]
                                }
                            ]
                        };
                    } else if(this.returnData.display_group.layouts && this.returnData.display_group.layouts.length > 1){

                        this.rotateLayouts(this.returnData.display_group.layouts);

                    } else {

                        if(this.returnData.display_group.layouts[0].type.name == '3-Up') {
                            this.currentView = ThreeUp;
                        } else {
                            this.currentView = this.returnData.display_group.layouts[0].type.name;
                        }
                        this.data = this.returnData.display_group.layouts[0];
                    }

                }

            }, (response) => {
                // error callback
                console.log('failure', response);
            });
            
        },

        rotateLayouts(){

            // workout how many layouts there are
            let layouts = this.returnData.display_group.layouts;
            let layout_number = layouts.length;
            
            layouts.forEach((layout)=>{
                if(layout.order == this.currentLayoutIndex){
                    if(layout.type.name == '3-Up') {
                        this.currentView = ThreeUp;
                    } else {
                        this.currentView = layout.type.name;
                    }
                    this.currentLayoutTime = layout.duration;
                    this.data = layout;
                }
            });

            setTimeout(() => {
                if(this.currentLayoutIndex < layout_number){
                    this.currentLayoutIndex++;
                } else {
                    this.currentLayoutIndex = 0;
                }
                this.rotateLayouts();
            }, this.currentLayoutTime * 1000);

        }
    }
});