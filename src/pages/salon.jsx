import SectionsHeader from "@/components/SectionsHeader"
import Access from "@/sections/Access"
import Contact from "@/sections/Contact"
import Reason from "@/sections/Reason"

export const metadata = {
  title: 'Salon',
}

export default () => {
  return (
    <>
    <SectionsHeader title="Salon"/>
    <Reason/>
    <Contact/>
    <Access/>
    </>
  )
}
