import MenuItem from "@/components/MenuItem"
import "./Menu.scss"


export default () => {
  return (
    <>
    <section className="menu__section" aria-labelledby="menu-title">
        <div className="menu__inner container">
            <div className="menu__header">
                <h2 className="menu__title h3" id="menu-title">Menu</h2>
            </div>
            <div className="menu__body">
                <ul className="menu__list">
                    <MenuItem/>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}
