import React from "react";
import CarouselBanner from './section.BannerCarousel'
import CategoryTiles from "./section.CategoryTiles";
import HeroBanner from "./section.HeroBanner";
import NewArrivals from "./section.NewArrivals";
import FeedInstagram from "./section.FeedInstagram";
import NewsletterSignup from "./section.NewsletterSignup";

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