import Section from "@/layouts/Section"
import Icon from "@/components/Icon"
import "./Contact.scss"

export default () => {

    const contactItem = [
        {
            label: 'お電話でのお問い合わせ',
            description: '[受付時間] 9:30~18:30',            
            icon: 'phone',
            sublabel:'TEL:808-2344-3231',
            href: 'tel:808234231',
        },
        {
            label: '来院予約はこちら',
            icon: 'laptop',
            href: '#',
        },
        {
            label: '当院の公式LINE',
            description: 'LINEから簡単予約!',
            icon: 'line',
            href: '#',
        },
        {
            label: 'お問い合わせフォーム',
            icon: 'letter',
            href: '/contact',
        },
    ]

  return (
    <Section 
    className="section__contact" 
    title="Contact" 
    titleId="contact-title" 
    description="ご予約 • 問い合わせ"
    >
        <div className="contact">
            <div className="contact__inner">
                <ul className="contact__list">
                    {contactItem.map(({ label , icon , href , sublabel , description}) => (
                        <li className="contact__item">
                            <a href={href} className="contact__link">
                                <span className="visually-hidden">{label}</span>
                                <Icon name={icon} className="contact__icon"/>
                                <p className="contact__info">
                                    <span className="contact__info--1">{label}</span>
                                    <span className="contact__info--2">{sublabel}</span>
                                    <span className="contact__info--3">{description}</span>
                                </p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </Section>
  )
}
