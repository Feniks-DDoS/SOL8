import Logo from '@/components/Logo'
import './Header.scss'
import clsx from 'clsx'
import Button from '@/components/Button'
import BurgerButton from '@/components/BurgerButton'

export default (props) => {
  const { url } = props

  const menuItems = [
    {
      label: 'ホーム',
      href: '/',
    },
    {
      label: 'コンセプト',
      href: '/about',
    },
    {
      label: '初めての方へ',
      href: '/firstTime',
    },
    {
      label: 'メニュー',
      href: '/menu',
    },
    {
      label: 'サロン案内',
      href: '/aboutTheSalon',
    },
    {
      label: '問い合わせ',
      href: '/contact',
    },
    {
      label: 'ブログ',
      href: '/blog',
    },
    ]

  return (
    <header className='header' data-js-header="">
      <div className="header__inner container">
        <nav className="header__menu " >
        <Logo  className="header__logo"/>
          <ul className="header__menu-list" data-js-header-overlay="">
            {menuItems.map(({label, href}) => (
              <li className="header__menu-item">
                <a 
                href={href}                 
                className={clsx(
                "header__menu-link",
                href === url && 'is-active')}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <Button href="#" className="header__button">WEB予約</Button>
          <BurgerButton 
          className="header__burger-button visible-tablet"
          extraAttrs={{
            'data-js-header-burger-button': ''
          }}
          />
        </div>
      </div>
    </header>
  )
}
