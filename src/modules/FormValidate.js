const rootSelector = `[data-js-contact-form]`

class FormValidate {

    selectors = {
        fieldErrors: `[data-js-form-errors]`,
        checkFormBlock: `[data-js-check-form]`,
    }

    stateClasses = {
        isCorrect: 'is-correct'
    }

    errorMessages = {
        tooShort: ({ minLength }) => `最小文字数 ${minLength}`,
        tooLong: ({ maxLength }) => `最大文字数 ${maxLength}`,
        patternMismatch: ({ title }) => title || '無効な形式',
        valueMissing: () => '必須項目ですのでご入力ください',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.nextStepButtonElement = this.rootElement.querySelector('.field__button')
        this.bindEvents()
        this.inputName()
    }

    checkFormCompletion(form) {
        const requiredFields = [...form.elements].filter(el => el.required)
        return requiredFields.every(el => el.value.trim() !== '')
    }


    manageError(fieldControlElement , errorMessages) {
        const fieldControlError = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors)

        fieldControlError.innerHTML = errorMessages
        .map((message) => `<span class="field__erorrs">${message}</span>`)
        .join("")
    }

    inputName() {
        const userNameControl = this.rootElement.querySelector('#user-name')

        userNameControl.addEventListener('keypress' , (event) => {
            if(/\d/.test(event.key)) {
                event.preventDefault()
            }
        })
    }

    validate(fieldControlElement) {
        const error = fieldControlElement.validity

        const errorMessages = []

        Object.entries(this.errorMessages).forEach(([errorType, getMessage]) => {
            if(error[errorType]) {
                errorMessages.push(getMessage(fieldControlElement))
            }
        })

        const isValid = errorMessages.length === 0       

        fieldControlElement.ariaInvalid = !isValid

        this.manageError(fieldControlElement , errorMessages)

        return isValid
    }

    onBlur(event) {
        const { target } = event
        const isRequired = target.required
        const isFormElement = target.closest(this.selectors.root) 

        if(isFormElement && isRequired && target.value.trim() !== '') {
            this.validate(target)
        }
    }

    onSubmit(event) {
        const { target } = event

        const isFormElement = target.closest(this.selectors.root)

        if(!isFormElement) return

        const isAllRequired = [...target.elements].filter(({required}) => required)

        let isFormValid = true
        let isFirstInvalidElement = null

        isAllRequired.forEach((element) => {
            const isFieldValid = this.validate(element)

            if(!isFieldValid) {
                isFormValid = false
                
                if(!isFirstInvalidElement) {
                    isFirstInvalidElement = element
                }
            }
        })

        if(!isFormValid) {
            event.preventDefault()
            isFirstInvalidElement.focus()
        }
    }

  

    bindEvents() {
        this.rootElement.addEventListener('input', () => {
        const allFilled = this.checkFormCompletion(this.rootElement)

            if(allFilled) {
                this.nextStepButtonElement.classList.add(this.stateClasses.isCorrect)
            }else {
                this.nextStepButtonElement.classList.remove(this.stateClasses.isCorrect)
            }            
            
        this.nextStepButtonElement.disabled = !allFilled
        })
        document.addEventListener('blur' , (event) => {
            this.onBlur(event)
        }, true)
        document.addEventListener('submit' , (event) => this.onSubmit(event))
    }

}

class FormValidateCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new FormValidate(element)
        })
    }
}

export default FormValidateCollection