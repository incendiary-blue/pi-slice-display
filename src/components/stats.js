import Vue from '../vue';

// View expects 
// data = {
//     "message" : "Message",
//      "stats": [
//         {
//             "stat" : "21%",
//             "title": "Title 1"
//         },
//         {
//             "stat" : "28.32 hours",
//             "title": "Title 2"
//         },
//         {
//             "stat" : "12.5 minutes",
//             "title": "Title 3"
//         }
//     ]
// }

export default Vue.extend({

    props: ['data', 'serial'],

    template: `
        <div class="stats">
            {{title1}}
        </div>
    `,

    data: () => {
        return {
            title1: "",
        }
    },

    computed: {
        
    },

    ready(){
        console.log(this.data);

        this.populateStats();
    },


    methods: {

        populateStats: function(){

            // Take the data object and match it up to the various placeholders in the template

            this.title1 = this.data.stats[0].title;

        }

    }
    
});

