import Button from '../Button'
import Icon from '../Icon'
import './AsideActions.scss'

export default () => {

    const reservationItem = [
        {
            label: 'Web予約',
            icon: 'laptop',
            href: '#',
        },
        {
            label: '電話予約',
            icon: 'phone',
            href: 'tel:808234231',
        },
        {
            label: 'Line予約',
            icon: 'line',
            href: '#',
        },
    ]

  return (
    <>
     <aside className='reservation' data-js-reservation-aside="">
        <div className="reservation__inner">
            <ul className="reservation__list">
                {reservationItem.map(({ label , icon , href}) => (
                    <li className="reservation__item">
                        <Button href={href} className="reservation__link">
                            <span className="visually-hidden">{label}</span>
                            <Icon className="reservation__icon" name={icon}/>
                            <span className="reservation__title">{label}</span>
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
     </aside>
    </>
  )
}
