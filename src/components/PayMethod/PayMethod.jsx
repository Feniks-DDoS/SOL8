import './PayMethod.scss'

export default () => {
  return (
    <>
    <section className="pay-method pay-method__section" aria-labelledby='pay-method-title'>
        <div className="pay-method__inner container">
            <header className="pay-method__header">
                <h2 className="pay-method__title h3" id='pay-method-title'>お支払いについて</h2>
            </header>
            <div className="pay-method__body">
                <p className="pay-method__info">お支払いには、現金とクレジットカードをご利用いただけます。</p>
                <p className="pay-method__info">ご利用いただけるクレジットカード : <span>VISA</span> / <span>Mastercard</span>  / <span>JCB</span></p>
            </div>
        </div>
    </section>
    </>
  )
}
