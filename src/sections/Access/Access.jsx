import './Access.scss'

export default () => {
  return (
    <section className="access access__section" aria-labelledby='access-title'>
        <div className="access__inner container">
            <div className="access__header">
                <header className="access__header-header">
                    <h2 className="access__title" id='access-title'>アクセス</h2>                    
                    <address className='access__address'>〒434-0334 愛知県名古屋市北区上飯田東町５丁目４２番地</address>
                    <span className="access__tag">お車でお越しの方</span>
                    <p className="access__car-move">駐車場１１台完備。空きがない場合近隣コインパーキングをご案内いたします。</p>
                    <span className="access__tag">電車でお越しの方</span>
                    <p className="access__train-move">JR尾張一宮、名鉄一宮駅西口より徒歩2分。<br />
                    名古屋駅より最短10分でお越しいただけます。</p>
                </header>
                <div className="access__header-body">
                    <h3 className="access__title">診療のご案内</h3>
                    <p className="access__work-time">診療時間 / 9:30~18:30</p>
                    <p className="access__close-time">休診日 / 不定休</p>                
                </div>
            </div>
            <div className="access__extra">
                <iframe className='access__map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5900.2950424858145!2d136.93606026612815!3d35.20599241993586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suk!2sjp!4v1759843192883!5m2!1suk!2sjp" height={450} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <p className="access__bg">Access</p>
    </section>
  )
}
