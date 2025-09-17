import './Error.scss'
import Button from '@/components/Button'


export default () => {
  return (
    <>
    <section className="error__section" aria-labelledby='error-title'>
        <div className="error__inner container">
            <header className="error__header">
                <h1 className='error__title' id='error-title'>ページが <br className='error__br'/>見つかりません</h1>
                <Button href="/" className="error__button">ホーム</Button>
            </header>
        </div>
        <p className='error__bg-title'>404</p>
    </section>
    </>
  )
}
