import "./MenuItem.scss"
import { menuItemData } from "@/data/menuItemData"
import clsx from "clsx"
import Button from "../Button"

export default () => {
  return (
    <>
    {menuItemData.map((item) => (
        <li className="menu__item">
            <div className="menu__card">
                <h3 className="menu__item-title">{item.titleJa} / <span className="menu__item-title-span">{item.titleEn}</span></h3>
                <div className="menu__card-body">
                    <h4 className="menu__card-title">
                        <span className="menu__card-time">{item.time.timeShort}分</span>/
                        <span className="menu__card-price">¥{item.price.priceShort}</span>
                    </h4>
                    <div className="menu__card-description">
                        <p className="menu__card-description-info">{item.descriptionJa.descriptionJaShort}    
                        </p>
                        <p className="menu__card-description-info">{item.descriptionEn.descriptionEnShort}
                        </p>
                    </div>
                    <Button href={item.href.linkShort} className="menu__card-link">ご予約に</Button>
                </div>
                <div className={clsx("menu__card-body" , item.time.timeLong ? 'visible' : 'hide')}>
                    <h4 className="menu__card-title">
                        <span className="menu__card-time">{item.time.timeLong}分</span>/
                        <span className="menu__card-price">¥{item.price.priceLong}</span>
                    </h4>
                    <div className="menu__card-description">
                        <p className="menu__card-description-info">{item.descriptionJa.descriptionJaLong}    
                        </p>
                        <p className="menu__card-description-info">{item.descriptionEn.descriptionEnLong}
                        </p>
                    </div>                    
                    <Button href={item.href.linkLong} className="menu__card-link">ご予約に</Button>
                </div>
            </div>
        </li>
    ))}
    </>
  )
}
