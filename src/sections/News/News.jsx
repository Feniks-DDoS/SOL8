import Section from '@/layouts/Section'
import './News.scss'
import NewsCardItem from '@/components/NewsCard'
import { newsData } from '@/data/newsData.js'
import Button from '@/components/Button'

export default () => {
    

  return (
    <Section className="section__news" 
    titleId="新着情報" title="新着情報"
    description={<Button className="section__news-button" href="#">全部を見る</Button>}>
       <div className="news">
        <div className="news__wrapper">
            <ul className="news__card-list">
                {newsData.map((item) => (
                    <NewsCardItem 
                    avifSrc={item.avifSrc.srcSet}
                    avifType={item.avifSrc.type}
                    imgSrc={item.imgSrc}
                    body={item.body}
                    date={item.date}
                    linkHref={item.linkHref}
                    linkTitle={item.linkTitle}
                    />
                ))}
            </ul>      
        </div>
       </div>
    </Section>
  )
}
