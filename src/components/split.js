import Vue from '../vue';

import Image from './image';
import Stats from './stats';
import Carousel from './carousel';

export default Vue.extend({

    props: ['data'],

    template: `
        <div class="split">
            <div class="panel">
                <component :is="left_component" :data='left_component_data'></component>
            </div>
            <div class="panel">
                <component :is="right_component" :data='right_component_data'></component>
            </div>
        </div>
    `,

    data: () => {
        return {
            image_url: "",
            video_url: "",
            left_component: "",
            left_component_data: {},
            right_component: "",
            right_component_data: {}
        }
    },

    components: { 
        Image
    },

    ready(){
        this.data.components.forEach((component)=>{

            if(component.location_id == 1){
                // location 1
                if(component.component_type_id == "1"){
                    this.left_component = "Image";
                    this.left_component_data = component;
                }
            } else {
                // location 2
                if(component.component_type_id == "1"){
                    this.right_component = "Image";
                    this.right_component_data = component;
                }
            }

        });

    },

    methods: {
        
    },

    watch : {
        
    }
    
});

