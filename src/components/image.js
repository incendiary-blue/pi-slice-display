import Vue from '../vue';

import {getConfig} from '../config';

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
            this.currentImage = (this.data.images[0].filename == null) ? "/no-default.png" : getConfig().IMAGE_PATH + `/${this.data.images[0].team_id}/` + this.data.images[0].filename ;
        }
    },

    watch : {
        data: function(){
            this.checkNotNull()
        }
    }
    
});

