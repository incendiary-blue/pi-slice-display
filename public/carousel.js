import Vue from '../vue';

/*View expects 
data = {
    "message" : "Message",
    "images" : [
        'http://dummyimage.com/600x400/000/fff&text=Test+1',
        'http://dummyimage.com/600x400/000/fff&text=Test+2',
        'http://dummyimage.com/600x400/000/fff&text=Test+3'
    ],
}*/

export default Vue.extend({

    props: ['data', 'serial'],

    template: `
        <div class="stats">
            {{images}}
        </div>
    `,

    data: () => {
        return {
            images: []
        }
    },

    computed: {
        
    },

    ready(){
        console.log(this.data.images);

        this.populateCarousel();
    },


    methods: {

        populateCarousel: function(){

            // Take the data object and match it up to the various placeholders in the template


        }

    }
    
});

