import './About.scss'
import jpgImage from "@/assets/images/philosophy/jpg/1philosophy.jpg"
import avifImage from "@/assets/images/philosophy/avif/1philosophy.avif"

export default () => {
  return (
      <section className="about" aria-labelledby='about-title'>
          <div className="about__inner container">
              <h1 className="about__title h5" id='about-title'>About Liliya Sato</h1>
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
                        <p> 名古屋を拠点に活動する、国際認定セラピスト。<br />
                            世界30ヶ所以上のスパを巡り、各国の美と癒しの哲学を探求。<br />

                            IHTA国際ホリスティックセラピー協会認定 <br />
                            「 <span className='about__description-span'>Relaxation Therapist </span>1級」
                            「 <span className='about__description-span'>Kogao Designer</span>」資格保持。<br />
                            さらに、フランス高級スキンケアブランド <span className='about__description-span'>Biologique Recherche</span>  の <br />
                            正規パートナーとしてフェイシャル技術を修得。<br />

                            肌・心・身体の調和を重視し、<br />
                            持続する小顔と深いリラクゼーションを叶える <br />
                            独自のタッチメソッドを提供しています。<br />
                        </p>
                    </div>
                </div>
              </div>
          </div>
      </section>
  )
}
