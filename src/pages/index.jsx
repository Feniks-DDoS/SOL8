import Reason from '@/sections/Reason'
import Contact from '@/sections/Contact'
import About from '@/sections/About'

export const metadata = {
  title: 'Main',
}

export default () => {
  return (
    <>
      <About/>
      <Reason/>
      <Contact/>
    </>
  )
}
