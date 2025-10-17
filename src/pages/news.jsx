import SectionsHeader from "@/components/SectionsHeader"
import Contact from "@/sections/Contact"
import Access from "@/sections/Access"
import News from "@/sections/News"
import RelatedPage from "@/components/RelatedPage"
import HeaderAside from '@/components/HeaderAside'


export const metadata = {
  title: 'News',
}

export default () => {

  return (
    <>
    <SectionsHeader title="NEWS"/>    
    <HeaderAside isActive={true} HeaderAsideTitle="News" HeaderAsideHref="/news"/>
    <News/>
    <RelatedPage relatedTitle="Salon" relatedHref="/salon"/>
    <Contact/>
    <Access/>
    </>
  )
}
