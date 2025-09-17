import Hero from '@/sections/Hero'
import Philosophy from '@/sections/Philosophy'
import Reason from '@/sections/Reason'
import Contact from '@/sections/Contact'

export const metadata = {
  title: 'ホーム',
}

export default () => {
  return (
    <>
      <Hero />
      <Philosophy/>
      <Reason/>
      <Contact/>
    </>
  )
}
