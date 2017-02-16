import Vue from '../vue';

import Image from './image';
import Stats from './stats';
import Carousel from './carousel';

export default Vue.extend({

    props: ['data'],

    template: `
        <div class="single">
            <component :is="component" :data='component_data'></component>
        </div>
    `,

    data: () => {
        return {
            image_url: "",
            video_url: "",
            component: "",
            component_data: {}
        }
    },

    components: { 
        Image,
        Stats, 
        Carousel
    },

    ready(){

        if(this.data.components[0].component_type_id == "1"){
            this.component = "Image";
            this.component_data = this.data.components[0];
        }

    },

    methods: {
        
    },

    watch : {
        
    }
    
});

