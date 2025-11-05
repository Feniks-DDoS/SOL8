import "./Preloader.scss"
import PreloaderImage from "./public/images/logoAnimation.gif"

export default () => {
  return (
    <>
     <div className="preloader" data-js-preloader=""> 
        <div className="preloader__inner">
            <img src={PreloaderImage} alt="Loader..." width={500} height={500} className="preloader__image" />
        </div>
     </div>
    </>
  )
}
