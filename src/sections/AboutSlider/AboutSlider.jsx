import './AboutSlider.scss'
import SliderImageAvif from '@/assets/images/hero/avif/hero1.avif'
import SliderImageJpg from '@/assets/images/hero/jpg/hero1.jpg'

export default () => {
  return (
    <>
    <section className="about-slider" aria-labelledby='about-slider-title'>
        <div className="about-slider__inner container">
            <header className="about-slider__header">
                <h2 className="about-slider__title h3" id='about-slider-title'>サロン紹介 </h2>
            </header>
            <div class="swiper slider" data-js-slider="">
                <ul class="swiper-wrapper slider__wrapper">
                    <li class="swiper-slide slider__slide">
                        <picture className='slider__images'>
                            <source srcSet={SliderImageAvif} type='image/avif'/>
                            <img className='slider__image' src={SliderImageJpg} alt="salon-image" width={880} height={586} loading='lazy'/>
                        </picture>
                    </li>
                    <li class="swiper-slide slider__slide">
                        <picture className='slider__images'>
                            <source srcSet={SliderImageAvif} type='image/avif'/>
                            <img className='slider__image' src={SliderImageJpg} alt="salon-image" width={880} height={586} loading='lazy'/>
                        </picture>
                    </li>
                    <li class="swiper-slide slider__slide">
                        <picture className='slider__images'>
                            <source srcSet={SliderImageAvif} type='image/avif'/>
                            <img className='slider__image' src={SliderImageJpg} alt="salon-image" width={880} height={586} loading='lazy'/>
                        </picture>
                    </li>
                    <li class="swiper-slide slider__slide">
                        <picture className='slider__images'>
                            <source srcSet={SliderImageAvif} type='image/avif'/>
                            <img className='slider__image' src={SliderImageJpg} alt="salon-image" width={880} height={586} loading='lazy'/>
                        </picture>
                    </li>
                </ul>
                <div class="swiper-pagination slider__pagination"></div>

                <button type='button' class="swiper-button-prev slider__button-prev"></button>
                <button type='button' class="swiper-button-next slider__button-next"></button>
            </div>
        </div>
        <p className='about-slider__bg'> FACILITY </p>
    </section>    
    </>
  )
}
