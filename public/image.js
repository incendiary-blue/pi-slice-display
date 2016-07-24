import Vue from '../vue';

/*
View expects
data = {
    "image" : 'http://dummyimage.com/600x400/000/fff&text=Test+1'
}
*/

export default Vue.extend({

    props: ['data'],

    template: `
        <div class="image" v-bind:style="{ backgroundImage: 'url(' + image + ')' }"></div>
    `,

    data: () => {
        return {
            image: ""
        }
    },

    ready(){
        this.checkNotNull();
    },

    methods: {
        checkNotNull () {
            this.image = (this.data.image == "http://pislice.online") ? "/no-default.png" : this.data.image ;
        }
    }
    
});

