import  Swiper from "swiper";
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';

const rootSelector  = `[data-js-slider]`

class Slider {

    selectors = {
        slideImage: `[data-js-slide-image]`,
        sliderSlide: `[data-js-slider-slide]`,
    }

    stateClasses = {
        isActive: 'is-active'
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.slideImageElements = this.rootElement.querySelectorAll(this.selectors.slideImage)  
        this.sliderSlideElements = this.rootElement.querySelectorAll(this.selectors.sliderSlide)     
        this.init()
    }

    init() {
      this.swiper =  new Swiper(this.rootElement, {
            modules: [Autoplay, EffectFade],
            effect: 'fade',
            fadeEffect: { crossFade: true },
            loop: true,
            autoplay: {
                delay: 5000, 
                disableOnInteraction: false,
            },
            speed: 1000,
            allowTouchMove: false,
            watchSlidesProgress: true,
            virtualTranslate: true,
            
        })

        this.swiper.on("slideChange" , () => {
            const currentIndex = this.swiper.realIndex
            this.sliderSlideElements.forEach((el, i) => {
                el.classList.toggle(this.stateClasses.isActive , i === currentIndex)
            })
        })
    }
}

class SliderCollection {

    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Slider(element)
        } )
    }
}

export default SliderCollection