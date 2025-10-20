import "./MenuItem.scss"
import { menuItemData } from "@/data/menuItemData"
import clsx from "clsx"
import Button from "../Button"

export default () => {
  return (
    <>
    {menuItemData.map((item) => (
                <div className="accordion tile">
                    <details className="accordion__details" id="menu" open={item.isOpen}>
                        <summary className="accordion__summary">                            
                            <h3 className="accordion__item-title"><span role="term" ariaDetails={item.ariaDetails} className="accordion__item-title-span">{item.titleJa} / <br className="visible-mobile"/> {item.titleEn}</span></h3>                          
                        </summary>
                    </details>
                    <div className="accordion__content" id={item.ariaDetails} role="definition">
                        <div className="accordion__content-inner">
                            <div className="accordion__content-body">                               
                                <div className="accordion__card">
                                    <div className="accordion__card-body">
                                        <h4 className="accordion__card-title">
                                            <span className="accordion__card-time">{item.time.timeShort}分</span>/
                                            <span className="accordion__card-price">¥{item.price.priceShort}</span>
                                        </h4>
                                        <div className="accordion__card-description">
                                            <p className="accordion__card-description-info">{item.descriptionJa.descriptionJaShort}    
                                            </p>
                                            <p className="accordion__card-description-info">{item.descriptionEn.descriptionEnShort}
                                            </p>
                                        </div>
                                        <Button href={item.href.linkShort} className="accordion__card-link">ご予約に</Button>
                                    </div>
                                    <div className={clsx("accordion__card-body" , item.time.timeLong ? 'visible' : 'hide')}>
                                        <h4 className="accordion__card-title">
                                            <span className="accordion__card-time">{item.time.timeLong}分</span>/
                                            <span className="accordion__card-price">¥{item.price.priceLong}</span>
                                        </h4>
                                        <div className="accordion__card-description">
                                            <p className="accordion__card-description-info">{item.descriptionJa.descriptionJaLong}    
                                            </p>
                                            <p className="accordion__card-description-info">{item.descriptionEn.descriptionEnLong}
                                            </p>
                                        </div>                    
                                        <Button href={item.href.linkLong} className="accordion__card-link">ご予約に</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    ))}
    </>
  )
}
