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
        <div class="image" v-bind:style="{ backgroundImage: 'url(' + currentImage + ')' }"></div>
    `,

    data: () => {
        return {
            currentImage: ""
        }
    },

    ready(){
        console.log("Image ready");
        this.checkNotNull();
    },

    methods: {
        checkNotNull () {
            this.currentImage = (this.data.image == null) ? "/no-default.png" : this.data.image ;
        }
    },

    watch : {
        data: function(){
            this.checkNotNull()
        }
    }
    
});

