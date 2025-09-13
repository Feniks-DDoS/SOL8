import './Section.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, title, titleId, description, children } = props

  return (
    <section
      className={clsx('section',  className)}
      aria-labelledby={titleId}
    >
      <div className="section__inner container">
      <header data-js-animation="" className="section__header">
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>
        {description && (
          <div className="section__description">
            <p>{description}</p>
          </div>
        )}
      </header>
      <div className="section__body">{children}</div>
      </div>
    </section>
  )
}
