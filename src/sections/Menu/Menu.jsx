import MenuItem from "@/components/MenuItem"
import "./Menu.scss"
import { menuItemPremiumData } from "@/data/menuItemPremiumData"


export default () => {
  return (
    <>
    <section className="menu__section" aria-labelledby="menu-title">
        <div className="menu__inner container">
            <div className="menu__header">
                <h2 className="menu__title h3" id="menu-title">Menu</h2>
            </div>
            <div className="menu__body">
                <ul className="menu__list">
                    <MenuItem/>
                </ul>
                <h3 className="menu__premium-list-title">プレミアムボディ＆フェイシャル </h3>
                <ul className="menu__premium-list">
                    {menuItemPremiumData.map((item) => (
                        <li className="menu__premium-item">
                            <div className="menu__premium-card">
                                <h3 className="menu__premium-item-title">{item.titleJa} / <span className="menu__premium-item-title-span">{item.titleEn}</span></h3>
                                <div className="menu__premium-body">
                                    <h4 className="menu__premium-title">
                                        <span className="menu__premium-time">{item.time}分</span>
                                        <span className="menu__premium-price">¥{item.price}</span>
                                    </h4>
                                    <div className="menu__premium-description">
                                        <p className="menu__premium-description-info">{item.descriptionJa}    
                                        </p>
                                        <p className="menu__premium-description-info">{item.descriptionEn}
                                        </p>
                                    </div>
                                </div>                            
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}
