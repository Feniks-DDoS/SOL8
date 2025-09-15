import HeroCard from '@/components/HeroCard/HeroCard'
import './Hero.scss'

export default () => {


  return (
    <section className='hero' aria-labelledby='hero-title'>
      <div className="hero__inner">
        <h1 className="visually-hidden" id='hero-title'>Massage image</h1>
        <div className="hero__slider swiper" data-js-slider="">
          <ul className="hero__slider-list swiper-wrapper">
            <HeroCard />
          </ul>
        </div>
      </div>
    </section>
  )
}
