const rootSelector = `[data-js-contact-form]`

class FormValidate {

    selectors = {
        root: rootSelector,
        fieldErrors: `[data-js-form-errors]`,
        checkFormBlock: `[data-js-check-form]`,
    }

    stateClasses = {
        isCorrect: 'is-correct',
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
        this.checkFormBlockElement = document.querySelector(this.selectors.checkFormBlock)
        this.formControlElements = this.rootElement.querySelectorAll('.field__control')
        this.checkboxControlElements = this.rootElement.querySelectorAll('.field__checkbox-control')
        this.bindEvents()
        this.inputName()  
    }

    checkFormCompletion(form) {
        const requiredFields = [...form.elements].filter(el => el.required)
        const allFilled = requiredFields.every(el => el.value.trim() !== '')
        const hasErrors = form.querySelector('.field__erorrs') !== null

        return allFilled && !hasErrors
    }


    manageError(fieldControlElement , errorMessages) {
        const parent = fieldControlElement.parentElement
        if (!parent) {return}
        const fieldControlError = parent.querySelector(this.selectors.fieldErrors) 
        if (!fieldControlError) {return}

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

        fieldControlElement.setAttribute('aria-invalid', String(!isValid))

        this.manageError(fieldControlElement , errorMessages)

        return isValid
    }

    onBlur(event) {
        const { target } = event
        const isRequired = target.required
        const closestForm = target.closest(this.selectors.root)
        const isFormElement = closestForm === this.rootElement

        if(isFormElement && isRequired && target.value.trim() !== '') {
            this.validate(target)
        }
    }


    showMessage = (text, type = 'success') => {
        const messageElement = document.querySelector('#form-message')

        messageElement.textContent = text 

        messageElement.classList.remove('hidden', 'success', 'error');
        messageElement.classList.add('show', type);


        setTimeout(() => {
            messageElement.classList.remove('show', 'success', 'error');
            messageElement.classList.add('hidden');
        }, 5000)
    }


    async onSubmit(event) {
        event.preventDefault() 
        const { target } = event
        const isFormElement = target.closest(this.selectors.root)
        if(!isFormElement) {return}

       const { isFormValid, firstInvalid } = this.validateForm()
        if (!isFormValid) {
            firstInvalid.focus()
        }

        const formData = new FormData(this.rootElement)
        const data = Object.fromEntries(formData.entries())

        try {
            const response = await fetch('https://formspree.io/f/mldwqror', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {throw new Error('送信中にエラーが発生しました');}

            const result = await response.json()
            console.log('サーバーの応答:', result);
            this.showMessage('送信が完了しました！', 'success'); 

            this.checkFormBlockElement.style.display = 'none'
            this.rootElement.style.display = 'flex'           
        } catch (error) {            
            this.showMessage('エラーが発生しました。もう一度お試しください。', 'error');

        }      
        this.resetForm()
    }

    resetForm() {
        this.formControlElements.forEach((el) => {
            el.value = ""
            el.style.borderColor = '#ccc'
        }) 
        this.checkboxControlElements.forEach((el) => {
            el.checked = ""
        })
    }
  
    validateForm() {
    const requiredFields = [...this.rootElement.elements].filter(el => el.required)
    let isFormValid = true
    let firstInvalid = null

    requiredFields.forEach(el => {
        const valid = this.validate(el)
        if (!valid) {
            isFormValid = false
            if (!firstInvalid) {firstInvalid = el}
        }
    })

    return { isFormValid, firstInvalid }
}

    bindEvents() {

        this.rootElement.addEventListener('input', (event) => {
        const allFilled = this.checkFormCompletion(this.rootElement)
            if(allFilled) {
                this.nextStepButtonElement.classList.add(this.stateClasses.isCorrect)
            }else {
                this.nextStepButtonElement.classList.remove(this.stateClasses.isCorrect)
            }                        
        this.nextStepButtonElement.disabled = !allFilled

            const target = event.target
            if (target && (target.matches('input,textarea,select')) && target.dataset.touched === 'true') {
                this.validate(target)
            }
        })

        document.addEventListener('blur' , (event) => {
            this.onBlur(event)
        }, true)

        this.nextStepButtonElement.addEventListener('click', (event) => {
        event.preventDefault()
        const { isFormValid, firstInvalid } = this.validateForm()
            if (!isFormValid) {
                firstInvalid.focus()
                return
            }

        this.checkFormBlockElement.style.display = 'block'
        this.rootElement.style.display = 'none'
    })
        this.rootElement.addEventListener('submit' , (event) => this.onSubmit(event))
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