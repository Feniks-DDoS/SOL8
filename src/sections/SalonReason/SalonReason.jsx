import './SalonReason.scss'
import { reasonAllData } from '@/data/reasonAllData'

export default () => {
  return (
    <>
     <section className="reason-all reason-all__section" aria-labelledby='reason-all-title'>
        <div className="reason-all__inner container">
            <header className="reason-all__header">
                <h2 className="reason-all__title h3" id='reason-all-title'>選ばれる <br className='visible-mobile'/> 5つの理由</h2>
            </header>
            <div className="reason-all__body">
                <ul className="reason-all__list">
                    {reasonAllData.map((item) => (
                    <li className="reason-all__item">
                        <div className="reason-all__card">
                            <div className="reason-all__card-header">
                                <picture className='reason-all__images'>
                                    <source srcSet={item.Source.srcSet} type={item.Source.type} />
                                    <img 
                                    src={item.img.src} 
                                    alt={item.img.alt}
                                    width={564}
                                    height={406}
                                    loading='lazy' 
                                    className="reason-all__image" />
                                </picture>
                            </div>
                            <div className="reason-all__card-body">
                                <h3 className="reason-all__card-title"><span className='reason-all__card-title-span'>{item.description}</span>{item.title}</h3>
                                <div className="reason-all__card-description">
                                    <p>{item.body}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    ))}                   
                </ul>
            </div>
        </div>
        <p className='reason-all__bg'>Reason</p>
     </section>
    </>
  )
}
