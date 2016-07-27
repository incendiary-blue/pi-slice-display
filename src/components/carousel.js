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
    props: ['data', 'serial'],

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
            images: [
                'http://wallpaperlayer.com/img/2015/5/hd-space-wallpapers-5743-6005-hd-wallpapers.jpg',
                'http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/space-wallpaper-1.jpg',
                'https://wallpapersinbox.files.wordpress.com/2012/08/hd-space-6.jpg',
                'http://hdwallpaperbackgrounds.net/wp-content/uploads/2015/09/3D-Space-HD-Desktop-Wallpapers.jpg'
            ]
        }
    },

    ready(){

        this.images = this.images.map((image, i) => {
            let data = {url : image, index: i};
            return data;
        });

        // Once ready run a loop every X seconds and call this.changeSlideNext()
        setInterval(function () {
            this.changeSlideNext();
        }.bind(this), 10000);

    },

    computed: {
        prevSlide: function() {
            if(this.currentSlide == 0)
                return this.images.length-1;
            return this.currentSlide - 1;
        }
    },

    methods: {

        changeSlideNext () {
            if(this.currentSlide == this.images.length-1){
                this.currentSlide = 0;
            }
            else this.currentSlide++;
        }
    
    }
});