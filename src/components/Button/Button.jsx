import './Button.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, type = 'button', href, children , form = '', disabled  = "false", } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const disabledAttribute = { disabled }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes
  const formId = form

  return (
    <Component className={clsx('button', className)} {...formId} {...disabledAttribute }{...attributesByTag}>
      {children}
    </Component>
  )
}
