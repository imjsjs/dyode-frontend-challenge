import React from "react"
import { Link } from 'react-router-dom'

function FeedInstagram() {
    return (
        <section className="feed-instagram">
            <h2 className="header1 text-center">Follow Us On Instagram!</h2>
            <div className="container">
                <div className="feed-instagram-image">
                    <Link to="/"><img src="/social/social-1.png" alt="feed-1"/></Link>
                </div>
                <div className="feed-instagram-image">
                    <Link to="/"><img src="/social/social-2.png" alt="feed-2"/></Link>
                </div>
                <div className="feed-instagram-image">
                    <Link to="/"><img src="/social/social-3.png" alt="feed-3"/></Link>
                </div>
                <div className="feed-instagram-image">
                    <Link to="/"><img src="/social/social-4.png" alt="feed-4"/></Link>
                </div>
                <div className="feed-instagram-image">
                    <Link to="/"><img src="/social/social-5.png" alt="feed-5"/></Link>
                </div>
            </div>
        </section>
    )
}

export default FeedInstagram