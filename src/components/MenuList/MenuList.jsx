import "./MenuList.scss"
import clsx from "clsx"

export default (props) => {

    const {
        classNameList,
        classNameItem,
        classNameLink,
        url,
    } = props

    const menuItems = [
    {
      label: 'ホーム',
      href: '/',
    },
    {
      label: 'コンセプト',
      href: '/about',
    },
    {
      label: '初めての方へ',
      href: '/firstTime',
    },
    {
      label: 'メニュー',
      href: '/menu',
    },
    {
      label: 'サロン案内',
      href: '/aboutTheSalon',
    },
    {
      label: '問い合わせ',
      href: '/contact',
    },
    {
      label: 'ブログ',
      href: '/blog',
    },
    ]

  return (
    <>
        <ul className={clsx("menu__list", classNameList)}>
        {menuItems.map(({label , href}) => (
            <li className={clsx("menu__item", classNameItem)}>
            <a 
            href={href} 
            className={clsx(
            "menu__link",
            classNameLink,
            href === url && "is-active"  
                )}>{label}
            </a>
            </li>
        ))}
        </ul>
    </>
  )
}
