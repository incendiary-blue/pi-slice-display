import Vue from '../vue';

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
        this.checkNotNull();
    },

    methods: {
        checkNotNull () {
            this.currentImage = (this.data.images[0].filename == null) ? "/no-default.png" : this.data.images[0].filename ;
        }
    },

    watch : {
        data: function(){
            this.checkNotNull()
        }
    }
    
});

