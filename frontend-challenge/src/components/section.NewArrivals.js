import React from "react";
import NewArrivalsCarousel from "./component.NewArrivalsCarousel";

function NewArrivals() {
    return (
        <section className="new-arrivals">
            <h2 className="header1 text-center">New Arrivals</h2>
            <NewArrivalsCarousel/>
        </section>
    )
}

export default NewArrivals