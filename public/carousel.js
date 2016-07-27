import Vue from '../vue';

// Layout expects 
// data = {
//      images: [
//         'http://wallpaperlayer.com/img/2015/5/hd-space-wallpapers-5743-6005-hd-wallpapers.jpg',
//            'http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/space-wallpaper-1.jpg',
//            'https://wallpapersinbox.files.wordpress.com/2012/08/hd-space-6.jpg',
//            'http://hdwallpaperbackgrounds.net/wp-content/uploads/2015/09/3D-Space-HD-Desktop-Wallpapers.jpg'
//     ]
// }

// This directive takes the current slide object params and sets the correct
// classes as the current slide updates
Vue.directive('show-slide', {
    params: ['prev-slide','slide-id'],
    update: function (current) {
        if(current == this.params.slideId) {
            this.el.style.opacity = 1;
            this.el.className = "slide current-slide";
        }
        else if(this.params.slideId == this.params.prevSlide){
            this.el.style.opacity = 0;
            this.el.className = "slide previous-slide"            
        }
        else {
            this.el.style.opacity = 0;
            this.el.className = "slide next-slide"
        }
    }
});

export default Vue.extend({
    props: ['data'],

    template: `
        <div class="slider-wrapper">
            <div class="slider-overflow">
                <div v-for="image in images" 
                    class="slide slide-transition"
                    :slide-id="$index"
                    :prev-slide="prevSlide"
                    v-show-slide="currentSlide"
                    v-bind:style="{ backgroundImage: 'url(' + image.url + ')' }">
                </div>
            </div>
        </div>
    `,

    data: function() {
        return {
            currentSlide: 0,
            speed: 5,
            images: []
        }
    },

    ready(){

        this.setImagesArray();

        // Once ready run a loop every X seconds and call this.changeSlideNext()
        setInterval(function () {
            this.changeSlideNext();
        }.bind(this), (this.speed * 1000));

    },

    computed: {
        prevSlide: function() {
            // Calculate the next slide to be active
            // so we can apply the transitions correctly.
            if(this.currentSlide == 0)
                return this.images.length-1;
            return this.currentSlide - 1;
        }
    },

    methods: {

        setImagesArray () {
            // Map the images data array to one that contains the index, allowing
            // us to transition through the slides easier
            if(this.data.images){
                this.images = this.data.images.map((image, i) => {
                    let data = {url : image, index: i};
                    return data;
                });
            }
        },

        changeSlideNext () {
            // Change to the next slide in the list
            // If this current slide is the same length as the array
            // we know we are at the end so we set the slide to 0
            if(this.currentSlide == this.images.length-1){
                this.currentSlide = 0;
            }
            else this.currentSlide++;
        }
    
    },

    watch : {
        // Watch the data prop for changes and on change
        // run the image checkNotNull function to update
        data: function(){
            this.currentSlide = 0;
            this.setImagesArray()
        }
    }
});