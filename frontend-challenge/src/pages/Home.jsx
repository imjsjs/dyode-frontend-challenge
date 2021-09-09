import React from "react";
import CarouselBanner from '../sections/BannerCarousel'
import CategoryTiles from "../sections/CategoryTiles";
import HeroBanner from "../components/HeroBanner";
import NewArrivals from "../sections/NewArrivals";
import FeedInstagram from "../sections/FeedInstagram";
import NewsletterSignup from "../sections/NewsletterSignup";

function Home() {
    return (
        <div className="home">
            <CarouselBanner/>
            <CategoryTiles/>
            <NewArrivals/>
            <HeroBanner 
                image={'banners/hero-image-4.jpg'} 
                header={'Our Favorite Tees'} 
                subheader={'Everyday tees you need.'} 
                linkTo={'/'}
                whiteText={true}
                greenButton={true}
                alignRight={true}
            />
            <FeedInstagram/>
            <NewsletterSignup/>
        </div>
    )
}

export default Home