import RelatedPage from "@/components/RelatedPage"
import SectionsHeader from "@/components/SectionsHeader"
import Access from "@/sections/Access"
import Contact from "@/sections/Contact"
import SalonReason from "@/sections/SalonReason"

export const metadata = {
  title: 'Salon',
}

export default () => {
  return (
    <>
    <SectionsHeader title="Salon"/>
    <SalonReason/>
    <RelatedPage relatedTitle="News" relatedHref="/news"/>
    <Contact/>
    <Access/>
    </>
  )
}
