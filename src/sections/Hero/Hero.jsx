import './Hero.scss'
import Button from '@/components/Button'
import imgSrc from '@/assets/images/hero/jpg/1.jpg'
import avifSrc from '@/assets/images/hero/avif/1.avif'
import phoneImgSrc from '@/assets/images/hero/jpg/2.jpg'
import phoneAvifSrc from '@/assets/images/hero/avif/2.avif'
export default () => {

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__wrapper-image">
          <h1 className="visually-hidden" id='hero-title'>Massage image</h1>
          <picture className='hero__images hidden-mobile'>
            <source srcSet={avifSrc} type='image/avif'/>
            <img
            className='hero__image'
            width={1920}
            height={500}
            src={imgSrc}
            alt='Massage process'
            />
          </picture>          
          <picture className='hero__images visible-mobile'>
            <source srcSet={phoneAvifSrc} type='image/avif'/>
            <img
            className='hero__image'
            width={720}
            height={500}
            src={phoneImgSrc}
            alt='Massage process'
            />
          </picture>
        </div>           
        <Button className="hero__button" href="#">ご予約はこちら</Button>
      </div>
    </section>
  )
}
