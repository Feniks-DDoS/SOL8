import './NewsCardItem.scss'
import clsx from 'clsx'

export default (props) => {

  const {
    imgSrc,
    avifSrc,
    avifType,
    body,
    date,
    linkHref,
    linkTitle,
    className
   } = props

    return (
        <>
          <li data-js-animation="" className={clsx("news__card-item", className)}>
            <a href={linkHref} className="news__card">
              <header className="news__card-header">
                <picture className='news__card-images'>
                  <source srcSet={avifSrc} type={avifType} />
                  <img
                  width={473}
                  height={348}
                  loading='lazy'
                  className='news__card-image'
                  src={imgSrc}
                  />
                </picture>
              </header>
              <div className="news__card-body">
                <time className='news__card-date' dateTime={date.dateTime}>{date}</time>
                <p className="news__card-info">{body}</p>
                <a href={linkHref} className="news__card-link">{linkTitle}</a>
              </div>
            </a> 
          </li>             
        </>
    )
}