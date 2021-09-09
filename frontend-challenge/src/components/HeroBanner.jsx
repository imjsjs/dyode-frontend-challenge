import React from "react";
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const HeroBanner = (props) => {
    const className = classNames({
        'hero-message': true,
        'white-text': props.whiteText,
        'green-button': props.greenButton,
        'align-right': props.alignRight
    })

    return (
        <div className="hero-banner">
            <img src={props.image} alt={props.header} />
            <div className={className}>
                <p className="header1">{props.header}</p>
                <p className="subheader">{props.subheader}</p>
                <Link to={props.linkTo}>
                    <button className="button">Shop Now</button>
                </Link>
            </div>
        </div>
    )
}

export default HeroBanner