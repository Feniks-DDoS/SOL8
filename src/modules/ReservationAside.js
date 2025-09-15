const rootSelector = `[data-js-reservation-aside]`

class ReservationAside {

    stateClasses = {
        isActive: 'is-active'
    }

    scroll = {
        scrollTrigger: 50
    }

    constructor(rootElement) {
        this.rootElement = rootElement

        this.scrollTrigger = this.scroll.scrollTrigger || 50
        this.init()
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

 

    handleScroll() {

        if(window.scrollY > this.scrollTrigger) {
            this.rootElement.classList.add(this.stateClasses.isActive);
        } else {
            this.rootElement.classList.remove(this.stateClasses.isActive);
        }
    }
}

class ReservationAsideCollection {        
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new ReservationAside(element)
        })
}

}

export default ReservationAsideCollection