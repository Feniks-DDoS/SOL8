import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
// import manifest from '@/assets/favicons/site.webmanifest'
import favicon from '/public/images/favicon.svg'
import AsideActions from './components/AsideActions'
import SliderImage from "@/assets/images/hero/avif/1hero.avif"
import Contact from './sections/Contact'

export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'ja' }}>
        <title>SOL8 | {title}</title>
        <script src="/src/main.js" type="module" />
        <link rel="icon" sizes='16x16' href={favicon} />
        <link rel="icon" sizes='32x32' href={favicon} />
        <link rel="preload" as="image" href={SliderImage} />
        {/* <link rel="manifest" href={manifest} /> */}
      </Head>
      <Header url={url} />
      <AsideActions/>
      <Content>{children}</Content>
      <Contact/>
      <Footer />
    </>
  )
}
