import "./SectionsHeader.scss"

export default (props) => {

    const {title} = props

  return (
        <header className="contact-form__header">
            <div className="contact-form__header-inner container">
                <h1 className="contact-form__title" id='contact-form-title'>{title}</h1>
            </div>
        </header>
  )
}
