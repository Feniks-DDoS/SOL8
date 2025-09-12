import Logo from '@/components/Logo'
import './Header.scss'
import clsx from 'clsx'
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
      href: '/AboutTheSalon.',
    },
    {
      label: '問い合わせ',
      href: '/Contact',
    },
    {
      label: 'ブログ',
      href: '/blog',
    },
  ]

  return (
    <header className='header' data-js-header="">
      <div className="header__inner container">
         <Logo className='header__logo'/>
         <nav className="header__menu" data-js-header-overlay="">
          <ul className="header__menu-list">
            {menuItems.map(({label , href}) => (
              <li className="header__menu-item">
                <a 
                href={href} 
                className={clsx(
                "header__menu-link",
                href === url && "is-active"  
                  )}>{label}
                </a>
              </li>
            ))}
          </ul>
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
