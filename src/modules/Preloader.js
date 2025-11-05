const rootSelector = `[data-js-preloader]`

class Preloader {

    stateClasses = {
        isHide: 'hide',
        isLock: 'is-lock'
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.bindEvents()
    }

    init() {        
        document.documentElement.classList.add(this.stateClasses.isLock)
        this.rootElement.classList.add(this.stateClasses.isHide);
        setTimeout(() => {
            document.documentElement.classList.remove(this.stateClasses.isLock)
        }, 600);
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