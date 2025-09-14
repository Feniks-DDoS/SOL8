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
          <ul className="header__menu-list hidden-tablet" >
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
        <div className="header__tablet-overlay" data-js-header-overlay="">
          <ul className="header__menu-list" >
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
          <div className="header__actions">
            <ul className="header__actions-list">
              <li className="header__actions-item">
                <Button href="#" className="header__actions-link">
                  <span className="header__actions-line">当院の公式LINE</span>
                  <span className="header__actions-line--2">LINEから簡単予約!</span>
                </Button>
              </li>
              <li className="header__actions-item">
                <Button href="tel080978324" className="header__actions-link">
                  <span className="header__actions-tel">お電話でのお問い合わせ</span>
                  <span className='header__actions-tel--2'>080-8324-2341</span>
                  <span className='header__actions-tel--3'>[受付時間] 9:30~18:30</span>
                </Button>
              </li>
              <li className="header__actions-item">
                <Button href="#" className="header__actions-link">
                  <span className="header__actions-span-1">ご予約はこちら</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        </nav>
        <div className="header__extra">
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
