import "./Preloader.scss"

export default (props) => {

  const { src } = props

  return (
    <>
     <div className="preloader" data-js-preloader=""> 
        <div className="preloader__inner">
            <img src={src} alt="Loader..." width={500} height={500} className="preloader__image" />
        </div>
     </div>
    </>
  )
}
