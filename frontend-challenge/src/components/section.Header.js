import React from "react"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className="header">
            <div className="header-menu-mobile">
                <Link to="/">
                    <img src="icons/meat.svg" alt="mobile nav" />
                </Link>
            </div>
            <div className="header-logo">
                <Link to="/">
                    <img src="logo.svg" alt="logo" />
                </Link>
            </div>
            <div className="header-menu-desktop">
                <Link to="/">Men's</Link>
                <Link to="/">Women's</Link>
                <Link to="/">Accessories</Link>
                <Link to="/">Sale!</Link>
            </div>
            <div className="header-options">
                <Link to="/" className="search">
                    <img src="icons/loupe.svg" alt="search" />
                </Link>
                <Link to="/" className="search">
                    <img src="icons/user.svg" alt="account" />
                </Link>
                <Link to="/" className="search">
                    <img src="icons/shopping-cart.svg" alt="cart" />
                </Link>
            </div>
        </nav>
    )
}

export default Header