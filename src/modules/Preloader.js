import lottie from 'lottie-web';
import animationData from '@/data/PreloaderImage.json';
import '@/styles/preloader.scss';

const rootSelector = `[data-js-preloader]`

class Preloader {

    selectors = {
        preloaderInner: `[data-js-preloader-inner]`
    }

    stateClasses = {
        isHide: 'hide',
        isLock: 'is-lock'
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.preloaderInnerElement = this.rootElement.querySelector(this.selectors.preloaderInner)
        lottie.loadAnimation({
        container: this.preloaderInnerElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
        });
        this.bindEvents()
        document.documentElement.classList.add(this.stateClasses.isLock)
    }

    init() {       
        document.documentElement.classList.remove(this.stateClasses.isLock)
        this.rootElement.classList.add(this.stateClasses.isHide);
    }


    bindEvents() {
        window.addEventListener('load' , () => this.init())
    }
} 

class PreloaderCollection { 
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Preloader(element)
        })
    }
}

export default PreloaderCollection