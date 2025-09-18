import Logo from '@/components/Logo'
import './Footer.scss'
import Icon from '@/components/Icon' 

export default () => {

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
      href: '/first_time',
    },
    {
      label: 'メニュー',
      href: '/menu',
    },
    {
      label: 'サロン案内',
      href: '/about_the_salon',
    },
    {
      label: '問い合わせ',
      href: '/contact_form',
    },
    {
      label: 'ブログ',
      href: '/blog',
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
                  <a href={href} className="footer__menu-link">{label}</a>
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
