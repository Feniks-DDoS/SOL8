const rootSelector = `[data-js-check-form]`

class CheckForm {
    selectors = {
        checkCheckbox: `[data-js-check-form-checbox]`,
        checkName: `[data-js-check-form-name]`,
        checkEmail: `[data-js-check-form-email]`,
        checkTel: `[data-js-check-form-tel]`,
        checkTextarea: `[data-js-check-form-textarea]`,

        form: `[data-js-contact-form]`,
        formName: `[data-js-form-name]`,
        formEmail: `[data-js-form-email]`,
        formTel: `[data-js-form-tel]`,
        formTextarea: `[data-js-form-textarea]`,
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.checkCheckboxElement = this.rootElement.querySelector(this.selectors.checkCheckbox)
        this.checkNameElement = this.rootElement.querySelector(this.selectors.checkName)
        this.checkEmailElement = this.rootElement.querySelector(this.selectors.checkEmail)
        this.checkTelElement = this.rootElement.querySelector(this.selectors.checkTel)
        this.checkTextareaElement = this.rootElement.querySelector(this.selectors.checkTextarea)

        this.formElement = document.querySelector(this.selectors.form)
        this.formNameElement = this.formElement.querySelector(this.selectors.formName)
        this.formEmailElement = this.formElement.querySelector(this.selectors.formEmail)
        this.formTelElement = this.formElement.querySelector(this.selectors.formTel)
        this.formTextareaElement = this.formElement.querySelector(this.selectors.formTextarea)

        this.formCheckboxElements = this.formElement.querySelectorAll('.field__checkbox-control')

        this.nextStepButtonElement = this.formElement.querySelector('.field__button')
        this.returnButtonElement = this.rootElement.querySelector('.check-form__back')

        this.bindEvents()
    }

    checkInfo = (event) => {
        event.preventDefault() 

        this.checkNameElement.textContent = this.formNameElement.value
        this.checkEmailElement.textContent = this.formEmailElement.value
        this.checkTelElement.textContent = this.formTelElement.value
        this.checkTextareaElement.textContent = this.formTextareaElement.value

        const checkedValues = []
        this.formCheckboxElements.forEach(cb => {
            if (cb.checked) {
                const label = cb.closest("label").querySelector(".field__checkbox-title").textContent
                checkedValues.push(label)
            }
        })
        this.checkCheckboxElement.textContent = checkedValues.length > 0 ? checkedValues.join("、") : "未選択"

        this.formElement.style.display = "none"
        this.rootElement.style.display = "block"
    }

    returnFixForm = () => {
        this.formElement.style.display = "flex"
        this.rootElement.style.display = "none"
    }

    bindEvents() {
        this.nextStepButtonElement.addEventListener('click', this.checkInfo)
        this.returnButtonElement.addEventListener('click', this.returnFixForm)
    }
}

class CheckFormCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new CheckForm(element)
        })
    }
}

export default CheckFormCollection
