import Logo from '@/components/Logo'
import './Header.scss'
import clsx from 'clsx'
import BurgerButton from '@/components/BurgerButton'
import MenuList from '@/components/MenuList'

export default (props) => {
  const { url } = props



  return (
    <header className='header' data-js-header="">
      <div className="header__inner container">
         <Logo className='header__logo'/>
         <nav className="header__menu" data-js-header-overlay="">
          <MenuList 
          url={url} 
          classNameList="header__menu-list"
          classNameItem="header__menu-item"
          classNameLink="header__menu-link"  />
         </nav>
         <BurgerButton
          className="header__button visible-tablet"
          extraAttrs={{
            "data-js-header-burger-button": '',
          }}
          />
      </div>
    </header>
  )
}
