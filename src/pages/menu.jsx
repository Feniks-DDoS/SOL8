import SectionsHeader from "@/components/SectionsHeader"
import Access from "@/sections/Access"
import Contact from "@/sections/Contact"
import Menu from "@/sections/Menu"
import HeaderAside from '@/components/HeaderAside'

export const metadata = {
  title: 'Menu',
}

export default () => {
  return (
    <>
    <SectionsHeader title="Menu"/>
    <HeaderAside isActive={true} HeaderAsideTitle="Menu" HeaderAsideHref="/menu"/>
    <Menu/>
    <Contact/>
    <Access/>
    </>
  )
}
