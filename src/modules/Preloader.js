import lottie from 'lottie-web';
import animationData from '@/data/PreloaderImage.json';

class Preloader {

    selectors = {
        preloaderInner: `[data-js-preloader-inner]`
    }

    stateClasses = {
        isLock: 'is-lock'
    }

    constructor() {
        this.render()
        this.animation()
        this.bindEvents()
        document.documentElement.classList.add(this.stateClasses.isLock)
    }

    render() {
        this.preloaderElement = document.createElement('div')
        this.preloaderElement.classList.add('preloader')
        this.preloaderElement.innerHTML = 
        `
        <div class="preloader__inner" data-js-preloader-inner="">
        </div>
        `
        document.body.appendChild(this.preloaderElement);
        this.preloaderInnerElement = this.preloaderElement.querySelector(this.selectors.preloaderInner)
    }

    animation() {
        lottie.loadAnimation({
        container: this.preloaderInnerElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
        });
    }

    init() {       
        document.documentElement.classList.remove(this.stateClasses.isLock)
        this.preloaderElement.remove()
    }


    bindEvents() {
        window.addEventListener('load' , () => this.init())
    }
} 

export default Preloader