import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'
import manifest from '/public/favicons/site.webmanifest'
import favicon from '/public/favicons/favicon.svg'
import icon512 from '/public/favicons/android-chrome-512x512.png'
import icon192 from '/public/favicons/android-chrome-192x192.png'
import AsideActions from './components/AsideActions'
import FormMessage from './components/FormMeassge'
import PreviewImage from "/public/images/preview.png"

export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'ja' }}>
        <title>SOL 8 | {title}</title>
        <script src="/src/main.js" type="module" />
        <link rel="icon" sizes='16x16' href={favicon} />
        <link rel="icon" sizes='32x32' href={favicon} />
        <link rel="icon" sizes='192x192' href={icon192} />
        <link rel="icon" sizes='512x512' href={icon512} />
        <link rel="manifest" href={manifest} />
        
        <meta name="title" content="SOL8 — 名古屋のマッサージサロン"/>
        <meta name="description" content="名古屋にいながら、まるで海外リトリートに訪れたような、深い癒しと静けさに包まれる時間を。”Touch”は、 言葉を超えたコミュニケーション。ひとつのタッチに、安心・解放・癒しの想いを込めて。肌に触れた瞬間、心と体の境界がほどけていく。"/>
        <meta name="keywords" content="マッサージ, 名古屋, サロン, SOL8, 日本式マッサージ, 予約"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.sol8spa.com/"/>
        <meta property="og:title" content="SOL8 — 名古屋のマッサージサロン"/>
        <meta property="og:description" content="名古屋にいながら、まるで海外リトリートに訪れたような、深い癒しと静けさに包まれる時間を。”Touch”は、 言葉を超えたコミュニケーション。ひとつのタッチに、安心・解放・癒しの想いを込めて。肌に触れた瞬間、心と体の境界がほどけていく。"/>
        <meta property="og:image" content={PreviewImage}/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content="https://www.sol8spa.com/"/>
        <meta name="twitter:title" content="SOL8 — 名古屋のマッサージサロン"/>
        <meta name="twitter:description" content="名古屋にいながら、まるで海外リトリートに訪れたような、深い癒しと静けさに包まれる時間を。”Touch”は、 言葉を超えたコミュニケーション。ひとつのタッチに、安心・解放・癒しの想いを込めて。肌に触れた瞬間、心と体の境界がほどけていく。"/>
        <meta name="twitter:image" content={PreviewImage}/>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K56CWYZWKZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K56CWYZWKZ');
            `,
          }}
        />
      </Head>
      <Header url={url} />
      <AsideActions/>
      <Content>{children}</Content>
      <Footer url={url} />
      <FormMessage/>
    </>
  )
}
