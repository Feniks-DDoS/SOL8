import SectionsHeader from "@/components/SectionsHeader"
import Contact from "@/sections/Contact"
import Menu from "@/sections/Menu"

export const metadata = {
  title: 'Menu',
}

export default () => {
  return (
    <>
    <SectionsHeader title="Menu"/>
    <Menu/>
    <Contact/>
    </>
  )
}
