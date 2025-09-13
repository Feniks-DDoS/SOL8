import Logo from '@/components/Logo'
import './Footer.scss'
import Socials from '@/components/Socials'
import MenuList from '@/components/MenuList'

export default () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <header className="footer__header">
          <h2 className="footer__title h3">ソシャルメディア</h2>
          <Socials className="footer__soc1als"/>  
        </header>
        <div className="footer__body">
          <nav className="footer__menu">
            <Logo className="footer__logo" />
            <MenuList 
              classNameList="footer__menu-list"
              classNameItem="footer__menu-item"
              classNameLink="footer__menu-link" />
          </nav>
        </div>
        <div className="footer__extra">    
          <h3 className="footer__extra-title ">場所</h3>      
          <div className="footer__extra-header">
            <address className='footer__address'>
             Address: 名古屋市中区千代田2-8-17グリーンハイツ鶴舞公園1F
            </address>
            <a href="tel:0809392323" className="footer__tel">TEL: 080-9392-3323</a>
          </div>
        </div>        
        <p className='footer__copyrihgt'>Copyright © 2025 SOL8 All rights reserved.</p>
      </div>
    </footer>
  )
}
