import "./Hero.scss"
import Icon from "@/components/Icon"
import Button from "@/components/Button"

export default () => {
  return (
    <section className="hero__section" aria-labelledby="hero-title">
        <div className="hero__inner">
            <div className="hero__body container">
                <header className="hero__header"> 
                    <Icon className="hero__svg" name="hero" hasFill/>              
                    <h1 className="hero__title" id="hero-title">Escape to Pure Tranquility</h1>
                    <p className="hero__subtitle">Discover ultimate relaxation at Spa SOL 8 - where ancient wellness <br /> meets modern luxury. Book your transformative experience in seconds.</p>
                </header>
                <div className="hero__extra">
                    <Button href="#" className="hero__button button">Book Your Escape Now</Button>
                </div>
            </div>
        </div>
    </section>
  )
}
