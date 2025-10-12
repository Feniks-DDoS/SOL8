import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
const rootSelector = `[data-js-slider]`

class AboutSlider {

    constructor(rootElement) {
        this.rootElement = rootElement
        this.init()
    }

    init() {
        new Swiper(this.rootElement , {            
            modules: [Navigation, Pagination, EffectFade ],
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },              
            pagination: {
                el: '.swiper-pagination',
                clickable: 'true'
            },
        })
    }
} 

class AboutSliderCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new AboutSlider(element)
        })
    }
}

export default AboutSliderCollection