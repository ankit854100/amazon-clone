import React from 'react'
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img
                    src="https://benjamindreyer.com/wp-content/uploads/2019/02/amazon-logo-white-png-transparent-15.png"
                    alt="amazon_logo"
                    className="header__logo"
                />
            </Link>
            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                {/* logo */}
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello guest</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">returns&</span>
                    <span className="header__optionLineTwo">orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">your</span>
                    <span className="header__optionLineTwo">prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
