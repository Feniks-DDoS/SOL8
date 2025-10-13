import SectionsHeader from "@/components/SectionsHeader"
import Access from "@/sections/Access"
import Contact from "@/sections/Contact"
import Reason from "@/sections/Reason"
import SalonReason from "@/sections/SalonReason"

export const metadata = {
  title: 'Salon',
}

export default () => {
  return (
    <>
    <SectionsHeader title="Salon"/>
    <SalonReason/>
    <Contact/>
    <Access/>
    </>
  )
}
