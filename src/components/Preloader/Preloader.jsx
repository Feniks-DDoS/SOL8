import "./Preloader.scss"

export default () => {
  return (
    <>
     <div className="preloader" data-js-preloader=""> 
        <div className="preloader__inner">
            <img src="./public/images/logoAnimation.gif" alt="Loader..." width={500} height={500} className="preloader__image" />
        </div>
     </div>
    </>
  )
}
