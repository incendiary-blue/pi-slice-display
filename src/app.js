import Plain from './components/plain';

var vm = new Vue({
    el: '#app',

    data: {
        // Side Panel
        currentView: 'plain'
    },

    ready(){
        console.log('Vue is running');
    },

    components: { 
        WinkMap
    },
    
    methods: {
        
    }
});