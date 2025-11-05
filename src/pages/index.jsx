import Reason from '@/sections/Reason'
import Contact from '@/sections/Contact'
import About from '@/sections/About'
import Menu from '@/sections/Menu'
import Hero from '@/sections/Hero'
import Access from '@/sections/Access'
import News from '@/sections/News'
import Preloader from '@/components/Preloader'

export const metadata = {
  title: 'Home',
}

export default () => {

  const infoSection = (
    <>
      名古屋にいながら、<br />
      まるで海外リトリートに訪れたような、<br />
      深い癒しと静けさに包まれる時間を。<br />

      ”<span className='about__description-span'>Touch</span>”は、
      言葉を超えたコミュニケーション。<br />
      ひとつのタッチに、<br />
      安心・解放・癒しの想いを込めて。<br />
      肌に触れた瞬間、<br />
      心と体の境界がほどけていく。<br />
    </>
  )

  return (
    <>
      <Preloader/>
      <Hero/>
      <About titleAbout='About' info={infoSection}/>
      <Reason/>
      <Menu/>
      <News/>
      <Contact/>
      <Access/>
    </>
  )
}
