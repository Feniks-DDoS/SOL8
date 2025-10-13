import './RelatedPage.scss'
import Icon from '../Icon'

export default () => {

    const relatedPage = [
        {
            label: 'About',
            href: './about',
        },
        {
            label: 'Menu',
            href: './menu',
        },
        {
            label: 'News',
            href: './news',
        },
    ]

  return (
    <section className="related related__section" aria-labelledby='related-page-title'>
        <div className="related__inner container">
            <header className="related__header">
                <Icon hasFill name="spa" className="related__title-svg"/>
                <h2 className="related__title h3" id='related-page-title'>関連ページ</h2>
            </header>
            <div className="related__body">
                <ul className="related__list">
                    {relatedPage.map((item) => (
                        <li className="related__item">
                            <a href={item.href} className="related__link">{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}
