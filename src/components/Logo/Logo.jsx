import './Logo.scss'
import clsx from 'clsx'

export default (props) => {
  const { 
    className, 
    loading = 'lazy',
    name
  } = props

  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src={name}
        alt="Logo SOL8"
        width={150}
        height={30}
        loading={loading}
      />
    </a>
  )
}
