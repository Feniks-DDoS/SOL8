import  Icon  from "../Icon"
import "./Socials.scss"
import clsx from "clsx"

export default (props) => {

    const {
        className,
    } = props

    const socialsItem = [
        {
            label: 'Instagram',
            icon: 'instagram',
        },
        {
            label: 'Line',
            icon: 'line',
        },
    ]

  return (
    <div className={clsx("soc1als", className)}>
        <div className="soc1als__inner">
            <ul className="soc1als__list">
                {socialsItem.map(({label , icon}) => (
                    <li className="soc1als__item">
                        <a 
                        href="#" 
                        className="soc1als__link"
                        title={label}
                        >
                            <span className="visually-hidden">{label}</span>
                            <Icon name={icon} className="soc1als__svg"/>                    
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
