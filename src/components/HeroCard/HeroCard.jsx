import './HeroCard.scss'
import { sliderData } from '@/data/sliderData.js'

export default  () => {
  return (
    <>
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
                <header className="hero__card-header">
                <h2 className="hero__card-title h1" >{item.title}</h2>
                </header>
                <div className="hero__card-body">
                <p className='hero__card-info'>{item.body}</p>
                </div>
            </div>
            </li>
        ))}
    </>
  )
}
