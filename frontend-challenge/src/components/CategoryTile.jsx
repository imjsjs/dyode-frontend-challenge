import React from "react";
import { Link } from 'react-router-dom';

const CategoryTile = (props) => {
    return (
        <div className="category-tile-container">
            <Link to={props.linkTo}>
                <div className="category-tile">
                    <img src={props.image} alt={props.title} />
                    <div className="category-tile-button">{props.title}</div>
                </div>
            </Link>
        </div>
    )
}

export default CategoryTile