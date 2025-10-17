import RelatedPage from "@/components/RelatedPage"
import SectionsHeader from "@/components/SectionsHeader"
import Access from "@/sections/Access"
import Contact from "@/sections/Contact"
import SalonReason from "@/sections/SalonReason"
import HeaderAside from '@/components/HeaderAside'

export const metadata = {
  title: 'Salon',
}

export default () => {
  return (
    <>
    <SectionsHeader title="Salon"/>
    <HeaderAside isActive={true} HeaderAsideTitle="Salon" HeaderAsideHref="/salon"/>
    <SalonReason/>
    <RelatedPage relatedTitle="News" relatedHref="/news"/>
    <Contact/>
    <Access/>
    </>
  )
}
