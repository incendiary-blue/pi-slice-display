import Vue from '../vue';

/*
View expects
data = {
    "image" : 'http://dummyimage.com/600x400/000/fff&text=Test+1'
}
*/

export default Vue.extend({

    props: ['data', 'serial'],

    template: `
        <div class="image" style="background-image: url('{{image}}') ;">
            
        </div>
    `,

    data: () => {
        return {
            image: ""
        }
    },

    ready(){
        console.log('Image Running');

        this.image = this.data.image;
         console.log(this.data.image);
    },


    methods: {

    }
    
});

