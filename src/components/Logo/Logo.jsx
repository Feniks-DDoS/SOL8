import './Logo.scss'
import clsx from 'clsx'
import logo from "/public/images/logo.svg"

export default (props) => {
  const { 
    className, 
    loading = 'lazy',
  } = props

  const title = 'ホーム'

  return (
    <a
      className={clsx('logo', className)}
      href="#"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src={logo}
        alt="Logo SOL8"
        width={110}
        height={30}
        loading={loading}
      />
    </a>
  )
}
