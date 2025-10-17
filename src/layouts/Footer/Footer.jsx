import Logo from '@/components/Logo'
import './Footer.scss'
import Icon from '@/components/Icon' 
import clsx from 'clsx'

export default (props) => {

  const { url } = props

   const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Salon',
      href: '/salon',
    },
    {
      label: 'Menu',
      href: '/menu',
    },
    {
      label: 'News',
      href: '/news',
    },
    {
      label: 'Contact',
      href: '/contact_form',
    },
    ]

  return (
    <footer className="footer" aria-labelledby='footer-title'>
      <h2 className="visually-hidden" id="footer-title">Footer</h2>
      <div className="footer__inner container">        
        <header className="footer__header">
          <div className="footer__header-inner">
            <Logo className="footer__logo"/>
            <div className="footer__soc1als">
              <a href="#" className='footer__soc1als-link' title='Instagram'>
                <span className="visually-hidden">Instagram</span>
                <Icon hasFill name='instagram' className='footer__soc1als-svg'/>
              </a>
            </div>              
          </div>            
        </header>
        <div className="footer__body">
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              {menuItems.map(({label , href}) => (
                <li className="footer__menu-item">
                  <a href={href} className={clsx("footer__menu-link", url === href ? 'is-active' : '')}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <address className='footer__address'>〒434-0334 愛知県名古屋市北区上飯田東町５丁目４２番地</address>           
      </div>
      <div className="footer__extra">
        <p className="footer__copyright">Copyright © 2025 SOL8 All rights reserved.</p>
      </div>
    </footer>
  )
}
