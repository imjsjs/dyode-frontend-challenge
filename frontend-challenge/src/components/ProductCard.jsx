import React from "react";
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    return (
        <Link to={props.linkTo}>
            <div className="product-card">
                <img src={props.image} alt={props.title} />
                <div className="product-card-info">
                    <p className="product-card-title">{props.title}</p>
                    <p className="product-card-category">{props.category}</p>
                    <p className="product-card-price">${props.price}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard