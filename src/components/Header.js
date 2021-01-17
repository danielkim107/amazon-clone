import React from 'react'
import { Link } from 'react-router-dom';
import Search from '@material-ui/icons/Search';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import LocationOn from '@material-ui/icons/LocationOn';
import '../css/Header.css';

function Header() {
	return (
		<nav className="header">
			<Link to="/">
				<img className="header__logo" alt="" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
			</Link>
			<div className="header__nav">
				<Link to="/" className="header__link">
				<div className="header__location">
					<LocationOn/>
					<div className="header__option">
						<span className="header__optionLineOne">Deliver to</span>
						<span className="header__optionLineTwo">Republic of Korea</span>
					</div>
					</div>
				</Link>
			</div>
			<div className="header__search">
				<input type="text" className="header__searchInput"/>
				<Search className="header__searchIcon"/>
			</div>
			<div className="header__nav">
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Hello, Daniel</span>
						<span className="header__optionLineTwo">Sign In</span>
					</div>
				</Link>
				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
				<Link to="/checkout" className="header__link">
					<div className="header__optionBasket">
						<ShoppingCart/>
						<span className="header__optionLineTwo header__basketCount">0</span>
					</div>
				</Link>
			</div>
		</nav>
	)
}

export default Header;
