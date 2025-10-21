import PayMethod from "@/components/PayMethod"
import SectionsHeader from "@/components/SectionsHeader"
import About from "@/sections/About"
import AboutSlider from "@/sections/AboutSlider/AboutSlider"
import Access from "@/sections/Access"
import Contact from "@/sections/Contact"
import HeaderAside from "@/components/HeaderAside"


export const metadata = {
  title: 'About',
}

export default () => {

  const infoSection = (
    <>
      名古屋にいながら、まるで海外リトリートへ訪れたかのような、心と体がとけていく時間を。<br />

      当サロンでは、フランス式ブッカル小顔デザインと、<br />
      200年以上受け継がれるスウェーディッシュリンパケアを融合。<br />
      痩身・ボディメイクまで、すべて熟練のハンドテクニックで丁寧に施術いたします。<br />

      “ <span className="about__description-span">Touch</span>” —— それは言葉を超えたコミュニケーション。<br />
      手のひらが肌に触れた瞬間、安心・解放・癒しが広がり、<br />
      内なる美しさが静かに目を覚まします。<br />

      やさしくも深く刺激するタッチで、<br />
      フェイスラインを整え、小顔効果を持続。<br />
      本来のバランスと調和のとれた美しさへ導きます。
    </>
  )

  return (
    <>
    <SectionsHeader title="About" />
    <HeaderAside isActive={true} HeaderAsideTitle="About" HeaderAsideHref="/about"/>
    <About titleAbout='About' info={infoSection}/>
    <AboutSlider/>
    <PayMethod/>
    <Contact/>
    <Access/>
    </>
  )
}


