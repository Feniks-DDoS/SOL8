import Field from '@/components/Field'
import './ContactForm.scss'
import Button from '@/components/Button'
import CheckDetails from '@/components/CheckDetails'


export default () => {
  return (
    <>
     <section className="contact-form__section" aria-labelledby='contact-form-title'>
        <div className="contact-form__inner">
            <header className="contact-form__header">
                <div className="contact-form__header-inner container">
                    <h1 className="contact-form__title" id='contact-form-title'>お問い合わせ</h1>
                    <p className='contact-form__subtitle'>contact</p>
                </div>
            </header>
            <div className="contact-form__body">
                <div className="contact-form__info container">
                    <p className='contact-form__info-1'><span className='contact-form__info-span' >SOL8</span>にご興味を持っていただきありがとうございます。</p>
                    <p className='contact-form__info-2'>下記フォーム、公式LINEにて、お気軽にお問い合わせください。</p>
                </div>
                <div className="contact-form__actions container">
                    <ul className="contact-form__actions-list">
                        <li className="contact-form__actions-item">
                            <Button className="contact-form__button" href="#"> ご予約フォームはこちら </Button>
                        </li>
                        <li className="contact-form__actions-item">
                            <Button className="contact-form__button" href="#"> 
                                <span className='contact-form__button-info-1'>当院の公式LINE</span>  
                                <span className='contact-form__button-info-2'>LINEから簡単予約!</span> 
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="contact-form__extra">
                <Field/>
                <CheckDetails/>
            </div>
        </div>
     </section>
    </>
  )
}
