import './Philosophy.scss'
import jpgImage from "@/assets/images/philosophy/jpg/1.jpg"
import avifImage from "@/assets/images/philosophy/avif/1.avif"
import Button from '@/components/Button'

export default () => {
  return (
    <section className="philosophy" aria-labelledby='philosophy-title'>
        <div className="philosophy__inner container">
            <div className="philosophy__header">
                <picture className='philosophy__images'>
                    <source srcSet={avifImage} type='image/avif' />
                    <img 
                    src={jpgImage} 
                    alt="店長写真"
                    loading='lazy'
                    width={577}
                    height={655} 
                    className="philosophy__image" />
                </picture>
            </div>
            <div className="philosophy__body">
                <h2 className="philosophy__title" id='philosophy-title'>Your title text</h2>
                <div className="philosophy__description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloremque quo nulla vitae necessitatibus aut accusamus! Minima, odio. Quisquam perferendis soluta, esse amet nihil eaque reprehenderit est laboriosam odit illum?</p>
                </div>
                <Button href="/about" className="philosophy__link">コンセプト</Button>
            </div>
            <p className="philosophy__bg-title">philosophy</p>
        </div>
    </section>
  )
}
