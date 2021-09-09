import React from "react"
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

function MobileMenu() {
    return (
        <div className="mobile-menu">
            <Menu width={280} height={400} noOverlay>
                <Link to="/">Men's</Link>
                <Link to="/">Women's</Link>
                <Link to="/">Accessories</Link>
                <Link to="/">Sale!</Link>
            </Menu>
        </div>
    )
}

export default MobileMenu