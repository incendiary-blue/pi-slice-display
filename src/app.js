import Vue from './vue';
import Welcome from './components/welcome';


var vm = new Vue({

    el: '#app',

    data: {
        // Current Layout
        currentView: 'welcome',
        data: {
            "layout" : "welcome",
            "data" : {
                "number" : 1
            }
        }
    },

    computed: {
        serial: function(){
            return serial;
        }
    },

    ready(){
        console.log('Vue is running');
        /*this.updateData();*/

        setInterval(function () {
           this.updateData();
        }.bind(this), 50000);

    },

    components: { 
        Welcome
    },
    
    methods: {

        updateData: function () {
            this.$http.get('/', function (data, status, request) {
                console.log('passed');
                if data == currentView {
                    console.log('dont update');
                } else {
                    console.log('update view');
                }
            }).error(function (data, status, request) {
                console.log('get request failed');    
            })
        }
    }
});