import './Reason.scss'
import Button from '@/components/Button'
import ReasonCard from '@/components/ReasonCard'

export default () => {
  return (
    <section className="section section__reason" aria-labelledby='reason-title'>
        <div className="section__inner container">
            <header className="section__header">
                <h2 className="section__reason-title" id='reason-title'>当サロン <br className='visible-mobile'/>トリートメント紹介</h2>
                <div className="section__reason-description">REASON</div>
            </header>
            <div className="reason">
            <div className="reason__inner">
                <div className="reason__body">
                    <ul className="reason__list">
                        <ReasonCard/>
                    </ul>
                </div>
                <div className="reason__extra">
                    <Button href="./salon" className="button--light reason__link">詳しく見る</Button>
                </div>
            </div>
        </div>
        <p className="reason__bg-title">reason</p>
        </div>
    </section>
  )
}

