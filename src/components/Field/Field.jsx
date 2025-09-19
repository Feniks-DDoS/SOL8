import './Field.scss'
import Button from '../Button'

export default () => {
  return (
    <>
        <form 
        id="feedbackForm" 
        action="https://formspree.io/f/mldwqror"
        method="POST" 
        data-js-contact-form="" 
        className="field container" 
        noValidate
        >
            <div className="field__cell">
                <h2 className="field__label">相談項目 <span class="field__required">必須</span></h2>
                <div className="field__cell-wrapper">
                    <label htmlFor="about-salon" className='field__checkbox-label'>                      
                        <input 
                        type="checkbox" 
                        id="about-salon"  
                        className="field__checkbox-control" 
                        required
                        name='aboutSalon'
                        data-js-form-clinic=""
                        />
                        <span className="field__checkbox-title">クリニックについて</span>                     
                    </label>
                    <label htmlFor="about-reservation" className='field__checkbox-label'>                      
                        <input 
                        type="checkbox" 
                        id="about-reservation"  
                        className="field__checkbox-control" 
                        name='aboutReservation'
                        required
                        data-js-form-reservation=""
                        />
                        <span className="field__checkbox-title">ご予約について</span>                      
                    </label>
                </div>  
            </div>
            <div className="field__cell">
                <label htmlFor="user-name" className="field__label">お名前 <span class="field__required">必須</span></label>
                    <input 
                    className="field__control"
                    id="user-name"
                    name='name'
                    autocomplete="name"
                    placeholder="田中"
                    minLength={2}
                    maxLength={30}
                    required
                    type="text"
                    inputMode='text'
                    ariaErrormessage="name-errors" 
                    data-js-form-name=""
                    />
                    <span className="field__errors" id="name-errors" data-js-form-errors=""></span>
            </div>
            <div className="field__cell">
                <label htmlFor="user-email" className="field__label">メールアドレス <span class="field__required">必須</span></label>
                    <input 
                    className="field__control"
                    id="user-email"
                    name='email'
                    autocomplete="email"
                    placeholder="SOL8@gmail.com"
                    pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                    type="email"    
                    inputMode='email'
                    title="
                        メールアドレスを正しくご入力ください: 
                        例: abc@mail.com"
                    minLength={2}
                    maxLength={40}
                    required
                    ariaErrormessage="email-errors" 
                    data-js-form-email=""
                    />
                    <span className="field__errors" id="email-errors" data-js-form-errors=""></span>
            </div>
            <div className="field__cell">
                <label htmlFor="user-tel" className="field__label">電話番号</label>
                    <input 
                    className="field__control"
                    id="user-tel"
                    type="tel" 
                    autocomplete="tel"
                    name='tel'
                    inputMode='tel'
                    placeholder='08094342343'
                    data-js-form-tel=""
                    />
            </div>
            <div className="field__cell">
                <label htmlFor="user-text" className="field__label">備考</label>
                    <textarea 
                    className="field__control field__textarea"
                    id="user-text"
                    type="text"    
                    name='description'
                    minLength={2}
                    inputMode='text'
                    placeholder='※治療内容と金額について相談したい など'
                    data-js-form-textarea=""
                    />
            </div>
            <div className="field__action">
                <Button className="field__button" type="button">
                    <span className="field__button-span-1">入力が完了していません</span>
                    <span className="field__button-span-2">入力内容を確認する</span>
                </Button>
            </div>
        </form>
    </>
  )
}
