import SectionsHeader from "@/components/SectionsHeader"
import Contact from "@/sections/Contact"
import Access from "@/sections/Access"
import News from "@/sections/News"
import RelatedPage from "@/components/RelatedPage"


export const metadata = {
  title: 'News',
}

export default () => {

  return (
    <>
    <SectionsHeader title="NEWS"/>    
    <News/>
    <RelatedPage relatedTitle="Salon" relatedHref="/salon"/>
    <Contact/>
    <Access/>
    </>
  )
}
