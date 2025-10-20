import './News.scss'
import Button from '@/components/Button'
import { newsData } from '@/data/newsData'
import clsx from 'clsx'


export default () => {

  return (
    <>
     <section className="news news__section" aria-labelledby='news-title'>
       <div className="news__inner container">
        <header className="news__header">
          <h2 className="news__title" id='news-title'>News</h2>
        </header>
        <div className="news__body">
          <ul className="news__list">
            {newsData.map((item) => (
              <li className="news__item">
                <a href="#" className="news__card">
                  <div className="news__card-header">
                    <picture className='news__card-images'>
                      <source srcSet={item.Source.srcSet} type={item.Source.type} />
                      <img src={item.img.src} alt={item.img.alt} width={338} height={225} className="news__card-image" />
                    </picture>
                  </div>
                  <div className="news__card-body">
                    <time className='news__card-time' dateTime={item.time}>{item.time}</time>
                    <h3 className="news__card-title h4">{item.title}</h3>
                    <div className="news__card-description">
                      <p>{item.body}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="news__extra">
          <Button className="news__link" href="/news">一覧を見る</Button>
        </div>
       </div>
     </section>
    </>
  )
}
