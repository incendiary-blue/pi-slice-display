import Vue from '../vue';

const sliderData = [
    {id: 0, src: 'http://csscience.com/responsiveslidercss3/CouldDragonByBjzaba.png'},
    {id: 1, src: 'http://csscience.com/responsiveslidercss3/MountainFortByBjzaba.png'},
    {id: 2, src: 'http://csscience.com/responsiveslidercss3/MountainOutpostByBjzaba.png'},
    {id: 3, src: 'http://csscience.com/responsiveslidercss3/CliffsByBjzaba.png'}
];

Vue.directive('assign-image', {
    update: function(id) {
        let img = sliderData[id];
        this.el.style.backgroundImage = "url("+img.src+")"
    }
});

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
            <div v-for="slide in slides"
                v-assign-image="$index"
                :slide-id="$index"
                :prev-slide="prevSlide"
                class="slide slide-transition"
                v-show-slide="currentSlide">
            </div>
        </div>
    </div>
    `,

    data: function() {
        return {
            slides: sliderData,
            currentSlide: 0,
        }
    },

    ready(){

        // Once ready run a loop every X seconds and call this.changeSlideNext()
        setInterval(function () {
            this.changeSlideNext();
        }.bind(this), 5000);
    },

    computed: {
        prevSlide: function() {
            if(this.currentSlide == 0)
                return this.slides.length-1;
            return this.currentSlide - 1;
        },
        nextSlide: function() {
            if(this.currentSlide == this.slides.length-1)
                return 0;
            return this.currentSlide + 1;
        }
    },

    methods: {
        changeSlideNext: function() {
            if(this.currentSlide == this.slides.length-1){
                this.currentSlide = 0;
            }
            else this.currentSlide++;
        },
        changeSlidePrev: function() {
            if(this.currentSlide == 0){
                this.currentSlide = this.slides.length-1;
            }
            else this.currentSlide -= 1;
        }
    }
});