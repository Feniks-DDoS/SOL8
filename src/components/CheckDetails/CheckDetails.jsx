import './CheckDetails.scss'

export default () => {
  return (
    <div className="check-form container" data-js-check-form="">
        <div className="check-form__inner">
            <h2 className="check-form__title h3">ご入力内容をご確認ください</h2>
            <ul className="check-form__list">
                <li className="check-form__item">
                    <span className="check-form__label">相談項目</span>
                    <span className="check-form__value" data-js-check-form-checbox=""></span>
                </li>
                <li className="check-form__item">
                    <span className="check-form__label">お名前</span>
                    <span className="check-form__value" data-js-check-form-name=""></span>
                </li>
                <li className="check-form__item">
                    <span className="check-form__label">メールアドレス</span>
                    <span className="check-form__value" data-js-check-form-email=""></span>
                </li>
                <li className="check-form__item">
                    <span className="check-form__label">電話番号</span>
                    <span className="check-form__value" data-js-check-form-tel=""></span>
                </li>
                <li className="check-form__item">
                    <span className="check-form__label">備考</span>
                    <span className="check-form__value" data-js-check-form-textarea=""></span>
                </li>
            </ul>
            <div className="check-form__info">
                <p className='check-form__info-title'>以上の内容で送信します。内容をご確認の上、「送信する」ボタンを押してください。</p>
            </div>
            <div className="check-form__actions">
                <button form="feedbackForm" type="submit" className="check-form__confirm">送信する</button>
                <button type="button" className="check-form__back">内容を編集する</button>
            </div>
        </div>
    </div>
  )
}
