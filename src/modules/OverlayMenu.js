import MatchMedia from "@/constants/MatchMedia"

class OverlayMenu {
  selectors = {
    root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    burgerButton: '[data-js-header-burger-button]',
    overlayLink: `[data-js-overlay-link]`,
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    if (!this.rootElement) {
      return
    }
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
    this.overlayLinkElement = this.rootElement.querySelectorAll(this.selectors.overlayLink)
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    )
    this.bindEvents()
  }

  tabletAbove() {
     if(!MatchMedia.tablet.matches) {
      this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
      this.overlayElement.classList.remove(this.stateClasses.isActive)
      document.documentElement.classList.remove(this.stateClasses.isLock)
    } else {
      return
    }
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.overlayElement.classList.toggle(this.stateClasses.isActive)
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  bindEvents() {
    MatchMedia.tablet.addEventListener('change', this.tabletAbove.bind(this))
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    this.overlayLinkElement.forEach((item) => {
      item.addEventListener('click' , this.onBurgerButtonClick)
    })
  }
}

export default OverlayMenu
