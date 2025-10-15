import './AboutSlider.scss'
import { aboutSliderData } from '@/data/aboutSlider'

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
                    {aboutSliderData.map((item) => (                        
                        <li class="swiper-slide slider__slide">
                            <picture className='slider__images'>
                                <source srcSet={item.Source.srcSet} type={item.Source.type}/>
                                <img className='slider__image' src={item.img.src} alt={item.img.alt} width={880} height={586} loading='lazy'/>
                            </picture>
                        </li>
                    ))}
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
