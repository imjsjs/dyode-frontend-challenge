import React from "react"
import Collapsible from 'react-collapsible'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <section className="footer">
            <Collapsible trigger="Customer Service" open>
                <ul class="footer-link-list">
                    <li><Link to="/">Accessibility</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                    <li><Link to="/">Return Policy</Link></li>
                    <li><Link to="/">FAQ</Link></li>
                    <li><Link to="/">Gift Certificates</Link></li>
                    <li><Link to="/">Wishlist</Link></li>
                </ul>
            </Collapsible>
            <Collapsible trigger="Company">
                <ul class="footer-link-list">
                    <li><Link to="/">About Us</Link></li>
                    <li><Link to="/">Careers</Link></li>
                    <li><Link to="/">Press</Link></li>
                    <li><Link to="/">Affiliates</Link></li>
                </ul>
            </Collapsible>
            <div class="footer-socials">
                <h2 className="header2">Follow Us</h2>
                <div class="footer-socials-container">
                    <Link to="/"><img src="/icons/facebook.svg" alt="facebook"/></Link>
                    <Link to="/"><img src="/icons/instagram.svg" alt="instagram"/></Link>
                    <Link to="/"><img src="/icons/twitter.svg" alt="twitter"/></Link>
                </div>
            </div>
        </section>
    )
}

export default Footer