import './About.scss'
import jpgImage from "@/assets/images/philosophy/jpg/1philosophy.jpg"
import avifImage from "@/assets/images/philosophy/avif/1philosophy.avif"


export default (props) => {

    const {titleAbout , info} = props

  return (
      <section className="about" aria-labelledby='about-title'>
          <div className="about__inner container">
              <h2 className="about__title " id='about-title'>{titleAbout}</h2>
              <div className="about__info">
                <div className="about__header">
                    <picture className='about__images'>
                        <source srcSet={avifImage} type='image/avif' />
                        <img 
                        src={jpgImage} 
                        alt="店長写真"
                        loading='lazy'
                        width={577}
                        height={655} 
                        className="about__image" />
                    </picture>
                </div>
                <div className="about__body">
                    <div className="about__description">
                        <p> {info}
                        </p>
                    </div>
                </div>
              </div>
          </div>
          <p className="about__bg">About</p>
      </section>
  )
}


