import MenuItem from "@/components/MenuItem"
import "./Menu.scss"
import Icon from "@/components/Icon"
import { menuItemPremiumData } from "@/data/menuItemPremiumData"
import Button from "@/components/Button"


export default () => {
  return (
    <>
    <section className="menu menu__section" aria-labelledby="menu-title">
        <div className="menu__inner container">
            <div className="menu__header">
                <h2 className="menu__title " id="menu-title">SOL 8 Treatment Menu</h2>
            </div>
            <div className="menu__body">
                    <div className="accordion accordion__group">
                    <MenuItem/>
                    </div>
                <div className="menu__premium-header">
                    <Icon hasFill name="spa" className="menu__premium-title-svg"/>
                    <h3 className="menu__premium-list-title">プレミアムボディ & <br className="menu__premium-br" /> フェイシャル 
                    <span className="menu__premium-list-title-span">Premium Body & Facial</span>
                    </h3>                                   
                </div> 
                <div className="accordion accordion__group">
                {menuItemPremiumData.map((item) => (
                        <div className="accordion tile">
                            <details className="accordion__details" id="menu">
                                <summary className="accordion__summary">                            
                                                    <h3 className="accordion__item-title"><span className="accordion__item-title-span">{item.titleJa} <span className="hidden-mobile">/</span>  <br className="visible-mobile"/> {item.titleEn}</span></h3>                         
                                </summary>
                            </details>
                            <div className="accordion__content" id={item.ariaDetails} role="definition">
                                <div className="accordion__content-inner">
                                    <div className="accordion__content-body">  
                                            <div className="accordion__premium-item">
                                                <div className="accordion__premium-card">
                                                    <div className="accordion__premium-body">
                                                        <h4 className="accordion__card-title">
                                                            <span className="accordion__card-time">{item.time}分</span>/
                                                            <span className="accordion__card-price">¥{item.price}</span>
                                                        </h4>
                                                        <div className="accordion__card-description">
                                                            <p className="accordion__card-description-info">{item.descriptionJa}    
                                                            </p>
                                                            <p className="accordion__card-description-info">{item.descriptionEn}
                                                            </p>
                                                        </div>
                                                    </div> 
                                                    <Button href={item.href} className="accordion__card-link">ご予約に</Button>                           
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    ))}      
                </div>        
            </div>
        </div>
         <p className="menu__bg">SOL 8 Treatment Menu</p>
    </section>
    </>
  )
}
