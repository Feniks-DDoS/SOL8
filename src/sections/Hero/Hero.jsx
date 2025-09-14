import './Hero.scss'
import { sliderData } from '@/data/sliderData'

export default () => {


  return (
    <section className='hero' aria-labelledby='hero-title'>
      <div className="hero__inner">
        <div className="hero__slider swiper" data-js-slider="">
          <ul className="hero__slider-list swiper-wrapper">
            {sliderData.map((item) => (
              <li className="hero__slider-item swiper-slide" data-js-slider-slide="">
                <div className="hero__card">
                  <picture className='hero__images'>
                    <source srcSet={item.Source.srcSet} type={item.Source.type}/>
                    <img 
                    data-js-slide-image=""
                    src={item.img.src} 
                    alt={item.img.alt}
                    width={463}
                    height={795} 
                    className="hero__image" />
                  </picture>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
