import './Hero.scss'
import Button from '@/components/Button'

export default () => {

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__wrapper-image">
          <h1 className="visually-hidden" id='hero-title'>Massage image</h1>
          <picture className='hero__images'>
            <source srcSet='/src/assets/images/hero/avif/1.avif' type='image/awif'/>
            <img
            className='hero__image'
            width={1920}
            height={500}
            src='/src/assets/images/hero/jpg/1.jpg'
            alt='Massage process'
            />
          </picture>
        </div>           
        <Button className="hero__button" href="#">ご予約はこちら</Button>
      </div>
    </section>
  )
}
