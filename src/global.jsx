import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import manifest from '/public/favicons/site.webmanifest'
import favicon from '/public/favicons/favicon.svg'
import icon192 from '/public/favicons/android-chrome-192x192.png'
import icon512 from '/public/favicons/android-chrome-512x512.png'
import AsideActions from './components/AsideActions'
import SliderImage from "@/assets/images/hero/avif/1hero.avif"
import FormMessage from './components/FormMeassge'

export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'ja' }}>
        <title>SOL8 | {title}</title>
        <script src="/src/main.js" type="module" />
        <link rel="icon" sizes='16x16' href={favicon} />
        <link rel="icon" sizes='32x32' href={favicon} />
        <link rel="icon" sizes='192x192' href={icon192} />
        <link rel="icon" sizes='512x512' href={icon512} />
        <link rel="preload" as="image" href={SliderImage} />
        <link rel="manifest" href={manifest} />
      </Head>
      <Header url={url} />
      <AsideActions/>
      <Content>{children}</Content>
      <Footer />
      <FormMessage/>
    </>
  )
}
