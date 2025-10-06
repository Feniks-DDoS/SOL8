import Reason from '@/sections/Reason'
import Contact from '@/sections/Contact'
import About from '@/sections/About'
import Menu from '@/sections/Menu'

export const metadata = {
  title: 'Main',
}

export default () => {

  const infoSection = (
    <>
      名古屋にいながら、<br />
      まるで海外リトリートに訪れたような、<br />
      深い癒しと静けさに包まれる時間を。<br />

      Touch”は、<br />
      言葉を超えたコミュニケーション。<br />
      ひとつのタッチに、<br />
      安心・解放・癒しの想いを込めて。<br />
      肌に触れた瞬間、<br />
      心と体の境界がほどけていく。<br />
    </>
  )

  return (
    <>
      <About titleAbout='About' info={infoSection}/>
      <Reason/>
      <Menu/>
      <Contact/>
    </>
  )
}
