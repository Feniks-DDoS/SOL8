import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';

const rootSelectorAbout = `[data-js-about-slider]`;
const rootSelectorHero = `[data-js-hero-slider]`;

class AboutSlider {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.init();
  }

  init() {
    new Swiper(this.rootElement, {
      modules: [Navigation, Pagination, EffectFade],
      effect: 'fade',
      fadeEffect: { crossFade: true },
      loop: true,
      speed: 700,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

class AboutSliderCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelectorAbout).forEach((element) => {
      new AboutSlider(element);
    });
  }
}


class HeroSlider {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.init();
  }

  init() {
    new Swiper(this.rootElement, {
      modules: [Navigation, Pagination, EffectFade],
      effect: 'fade',
      fadeEffect: { crossFade: true },
      loop: true,
      speed: 700,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}

class HeroSliderCollection {    
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelectorHero).forEach((element) => {
      new HeroSlider(element);
    });
  }
}
export {AboutSliderCollection , HeroSliderCollection};
