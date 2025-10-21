import "./Hero.scss"
import Icon from "@/components/Icon"
import slideAvif1 from '@/assets/images/hero/avif/hero1.avif'
import slideJpg1 from '@/assets/images/hero/jpg/hero1.jpg'
import slideAvif2 from "@/assets/images/reason/avif/1reason.avif"
import slideJpg2 from "@/assets/images/reason/jpg/1reason.jpg"

export default () => {
  return (
    <section className="hero__section" aria-labelledby="hero-title">
        <div className="hero__inner">
            <div className="hero__body">
                    <div className="swiper hero__slider" data-js-hero-slider="">
                        <ul className="swiper-wrapper hero__slider-wrapper">
                            <li className="swiper-slide hero__slider-slide ">     
                                <div className="hero__slider-slide-header container">
                                    <Icon className="hero__svg" name="hero" hasFill/>         
                                    <h1 className="hero__title" id="hero-title">
                                        疲れた毎日に、<br className="visible-mobile" />
                                        自分だけの特別な時間を
                                    </h1>
                                    <p className="hero__subtitle">名古屋女性専用のプライベートサロンで、効果が長く続くフランス式小顔デザインと、 <br /> 最高のリラックスをもたらす Swedish Relax Oil Massage を体験。</p>
                                </div>                                
                                <picture className="hero__images">
                                    <source srcSet={slideAvif1} type="image/avif"/>
                                    <img src={slideJpg1} className="hero__image" width={500} height={500} alt="" />
                                </picture>
                            </li>      
                            <li className="swiper-slide hero__slider-slide">              
                                <div className="hero__slider-slide-header container">
                                    <Icon className="hero__svg" name="hero" hasFill/>     
                                    <h1 className="hero__title">
                                        疲れた毎日に、<br className="visible-mobile" />
                                        自分だけの特別な時間を
                                    </h1>
                                    <p className="hero__subtitle">18〜19世紀フランス貴族の美顔術から受け継がれた技術で、表情筋と筋膜を科学的にケアし、<br /> あなたの美しさと心の余裕を引き出します。</p>
                                </div>                           
                                <picture className="hero__images">
                                    <source srcSet={slideAvif2} type="image/avif"/>
                                    <img src={slideJpg2} className="hero__image" width={500} height={500} alt="" />
                                </picture>
                            </li>             
                        </ul>

                        <button type="button" className="swiper-button-prev hero__slider-button-prev"></button>
                        <button type="button" className="swiper-button-next hero__slider-button-next"></button>

                    </div>
            </div>
        </div>
    </section>
  )
}
