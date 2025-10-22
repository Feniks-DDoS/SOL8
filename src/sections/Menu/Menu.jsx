import "./Menu.scss"
import menuAvif1 from "@/assets/images/menu/avif/menu1.avif"
import menuAvif2 from "@/assets/images/menu/avif/menu2.avif"
import menuJpg1 from "@/assets/images/menu/jpg/menu1.jpg"
import menuJpg2 from "@/assets/images/menu/jpg/menu2.jpg"


export default () => {
  return (
    <>
    <section className="menu menu__section" aria-labelledby="menu-title">
        <div className="menu__inner ">
            <div className="menu__header container">
                <h2 className="menu__title" id="menu-title"> MENU</h2>
            </div>
            <div className="menu__body container">       
              <ul className="menu__list">
                <li className="menu__item">
                  <h3 className="menu__item-title">普通のコース<span className="menu__item-title--span">Body <span className="hidden-mobile-s">&</span> <br className="visible-mobile-s"/>Facial Treatment</span></h3>
                  <picture className="menu__images">
                    <source srcSet={menuAvif1} type="image/avif"/>
                    <img src={menuJpg1} alt="" width={500} height={600} className="menu__image"/>
                  </picture>
                </li>
                <li className="menu__item">
                  <h3 className="menu__item-title">プレミアムコース<span className="menu__item-title--span">Premium Body <span className="hidden-mobile-s">&</span> <br className="visible-mobile-s"/> Facial Treatment</span></h3>
                  <picture className="menu__images">
                    <source srcSet={menuAvif2} type="image/avif"/>
                    <img src={menuJpg2} alt="" width={500} height={600} className="menu__image"/>
                  </picture>
                </li>
              </ul>
            </div>
        </div>
    </section>
    </>
  )
}
