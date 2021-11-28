import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src="https://www.themarysue.com/wp-content/uploads/2019/07/amazon-frown.jpg" alt="amazon frown logo" />
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
            {/* Logo */}
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Grant</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </div>

        </div>
    )
}   

export default Header

