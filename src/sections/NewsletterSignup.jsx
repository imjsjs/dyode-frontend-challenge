import React from "react";
import { Link } from 'react-router-dom';

const NewsletterSignup = () => {
    return (
        <section className="newsletter-signup">
            <h2 className="header1 text-center"><img src="icons/envelope.svg" alt="envelope"/>Sign Up & Stay Connected</h2>
            <div className="newsletter-signup-paragraph">
                <p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
            </div>
            <div className="newsletter-signup-input">
                <input type="text" placeholder="Enter Your Email Address"/>
                <Link to="/"><button className="button">Subscribe</button></Link>
            </div>
        </section>
    )
}

export default NewsletterSignup