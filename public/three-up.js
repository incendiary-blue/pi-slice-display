import Vue from '../vue';

import Image from './image';
import Carousel from './carousel';

export default Vue.extend({

    props: ['data'],

    template: `
        <div class="three-up">
            <div class="panel">
                <div class="split-horizontal">                
                   <component :is="top_component" :data='top_component_data'></component>
                   <component :is="bottom_component" :data='bottom_component_data'></component>
                </div>
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
            top_component: "",
            top_component_data: {},
            bottom_component: "",
            bottom_component_data: {},
            right_component: "",
            right_component_data: {}
        }
    },

    components: {
        Image,
        Carousel
    },

    ready(){
        this.data.components.forEach((component)=>{

            if(component.location_id == 1){
                // location 1
                if(component.component_type_id == "1"){
                    this.top_component = "Image";
                    this.top_component_data = component;
                } else {
                    this.top_component = "Carousel";
                    this.top_component_data = component;
                }

            } else if (component.location_id == 2) {
                // location 2
                if(component.component_type_id == "1"){
                    this.bottom_component = "Image";
                    this.bottom_component_data = component;
                } else {
                    this.bottom_component = "Carousel";
                    this.bottom_component_data = component;
                }
            } else {
                // location 3
                if(component.component_type_id == "1"){
                    this.right_component = "Image";
                    this.right_component_data = component;
                } else {
                    this.right_component = "Carousel";
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

