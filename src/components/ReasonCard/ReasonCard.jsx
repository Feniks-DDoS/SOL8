import "./ReasonCard.scss"
import { reasonData } from "@/data/reasonData"

export default () => {
  return (
    <>
    {reasonData.map((item) => (
        <li className="reason__item">
            <div className="reason__card">
                <div className="reason__card-header">
                    <picture className='reason__images'>
                        <source srcSet={item.Source.srcSet} type={item.Source.type} />
                        <img 
                        src={item.img.src} 
                        alt={item.img.alt}
                        width={500}
                        height={360}
                        loading='lazy' 
                        className="reason__image" />
                    </picture>
                </div>
                <div className="reason__card-body">
                    <h3 className="reason__card-title">{item.title}</h3>
                    <div className="reason__card-description">
                        <p>{item.body}</p>
                    </div>
                </div>
            </div>
        </li>
    ))}    
    </>
  )
}
