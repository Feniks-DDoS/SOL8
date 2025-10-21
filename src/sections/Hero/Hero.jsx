import "./Hero.scss"
import Icon from "@/components/Icon"

export default () => {
  return (
    <section className="hero__section" aria-labelledby="hero-title">
        <div className="hero__inner">
            <div className="hero__body">
                    <div className="swiper hero__slider" data-js-hero-slider="">
                        <ul className="swiper-wrapper hero__slider-wrapper">
                            <li className="swiper-slide hero__slider-slide hero__slider-slide--one ">     
                                <div className="hero__slider-slide-header container">
                                    <Icon className="hero__svg" name="hero" hasFill/>         
                                    <h1 className="hero__title" id="hero-title">
                                        疲れた毎日に、<br className="visible-mobile" />
                                        自分だけの特別な時間を
                                    </h1>
                                    <p className="hero__subtitle">名古屋女性専用のプライベートサロンで、効果が長く続くフランス式小顔デザインと、 <br /> 最高のリラックスをもたらす Swedish Relax Oil Massage を体験。</p>
                                </div>  
                                <span className="hero__author">Joe Yu</span>
                            </li>      
                            <li className="swiper-slide hero__slider-slide hero__slider-slide--two">              
                                <div className="hero__slider-slide-header container">
                                    <Icon className="hero__svg" name="hero" hasFill/>     
                                    <h1 className="hero__title">
                                        美しさと癒しを、<br className="visible-mobile" />
                                        ここから
                                    </h1>
                                    <p className="hero__subtitle">18〜19世紀フランス貴族の美顔術から受け継がれた技術で、表情筋と筋膜を科学的にケアし、<br className="hidden-mobile"/> あなたの美しさと心の余裕を引き出します。</p>
                                </div>       
                                <span className="hero__author">Danish Prakash</span>
                            </li>             
                        </ul>

                        <div className="swiper-pagination hero__slider-pagination"></div>

                        <button type="button" className="swiper-button-prev hero__slider-button-prev"></button>
                        <button type="button" className="swiper-button-next hero__slider-button-next"></button>

                    </div>
            </div>
        </div>
    </section>
  )
}
