import React from "react";
import CategoryTile from "../components/CategoryTile";

const CategoryTiles = () => {
    return (
        <section className="category-tiles">
            <div className="container">
                <CategoryTile 
                    image={'categories/womens.jpg'}
                    title={"Women's"}
                    linkTo={'/'}
                />
                <CategoryTile 
                    image={'categories/mens.jpg'}
                    title={"Men's"}
                    linkTo={'/'}
                />
                <CategoryTile 
                    image={'categories/accessories.jpg'}
                    title={"Accessories"}
                    linkTo={'/'}
                />
            </div>
        </section>
    )
}

export default CategoryTiles