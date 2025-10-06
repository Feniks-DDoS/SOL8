import './Philosophy.scss'
import jpgImage from "@/assets/images/philosophy/jpg/1philosophy.jpg"
import avifImage from "@/assets/images/philosophy/avif/1philosophy.avif"
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
                <header className="philosophy__body-header">
                <h2 className="philosophy__title" id='philosophy-title'>コンセプト</h2>
                <p className="philosophy__subtitle">Consept</p>
                </header>
                <div className="philosophy__description">
                    <p> <span className='philosophy__description-span'>Mini retreat studio</span><br />   

                        名古屋市にいながら、まるで海外リトリートに来たような特別な体験を。

                        当サロンでは、フランス式のブッカル小顔デザインや、２００年以上の歴史を持ち、世界のオイルマッサージの原点スウェーディッシュリンパケア始め

                        痩身・ボディメイクまで、すべてオールハンドで丁寧に施術いたします。<br />

                        <span className='philosophy__description-span'>touch</span>  は、言葉を超えたコミュニケーション。

                        ひとつのタッチに、安心、解放、癒し、

                        すべての想いが込められています。

                        手のひらが肌に触れた瞬間、

                        体と心の境界がゆるみ、

                        あなたの中に眠っていた美しさが目を覚めますのです。

                        １日３名様までの完全予約制、

                        女性専用のプライベート空間で、安心しておくつろぎいただきます。
                    </p>
                </div>
                <Button href="/about" className="philosophy__link">コンセプト</Button>
            </div>
        </div>
    </section>
  )
}
