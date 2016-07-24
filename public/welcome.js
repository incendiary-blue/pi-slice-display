import Vue from '../vue';

export default Vue.extend({

    props: ['data', 'serial'],

    template: `
        <div class="welcome">
            <div class="welcome__content">
                <h1>Welcome to Screens Project!</h1>
                <p>To get this screen setup you can either download the Screens app from your app store or login to the website.</p>
                <p>Be sure to add the serial number below and a location description for this screen. Later you can group many screens together into areas.</p>
                <h2>The serial number is: {{serial}}</h2>
            </div>
        </div>
    `,

    data: () => {
        return {

        }
    },

    computed: {
        
    },

    ready(){
        console.log('Welcome Running');
    },


    methods: {

    }
    
});

