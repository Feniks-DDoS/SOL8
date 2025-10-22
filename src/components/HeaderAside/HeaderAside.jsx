import Icon from '../Icon'
import './HeaderAside.scss'
import clsx from 'clsx'

export default ({HeaderAsideTitle , HeaderAsideHref , isActive}) => {

    const HeaderAsideData = [
        {
            label: <Icon name="header-home" className="header-aside__svg"/>,
            href: '/',
            title: 'Home',
        },
        {
            label: HeaderAsideTitle,
            href: HeaderAsideHref,
            isActive: isActive,
        },
    ]

  return (
    <>
    <div className="header-aside ">
        <div className="header-aside__inner ">
            <ul className="header-aside__list container">
                {HeaderAsideData.map((item) => (
                    <li className="header-aside__item">
                        <a href={item.href} data-title={item.title} className={clsx("header-aside__link",item.isActive && 'is-active')}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </>
  )
}
