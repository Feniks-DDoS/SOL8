class SectionAnimation {

    selectors = {
        root: `[data-js-animation]`
    }

    stateClasses = {
        isAnimated: 'animate'
    }

    constructor() { 
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(this.stateClasses.isAnimated)
                }
            })
        }, { threshold: 0.3 })
        
        this.items = document.querySelectorAll(this.selectors.root)
        this.items.forEach(item => this.observer.observe(item))
    }
}

export default SectionAnimation