import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import HeroBanner from './section.HeroBanner';

class BannerCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay stopOnHover infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
                <HeroBanner 
                    image={'banners/hero-image-1.jpg'} 
                    header={'Shop New Arrivals'} 
                    subheader={'Our coolest new items are waiting for you!'} 
                    linkTo={'/'}
                />
                <HeroBanner 
                    image={'banners/hero-image-2.jpg'} 
                    header={'Our Fave Tees'} 
                    subheader={'Shop all of our favorites.'} 
                    linkTo={'/'}
                    whiteText={true}
                />
                <HeroBanner 
                    image={'banners/hero-image-3.jpg'} 
                    header={'Men’s Tees'} 
                    subheader={'Find the perfect shirt.'} 
                    linkTo={'/'}
                    whiteText={true}
                />
            </Carousel>
        );
    }
}

export default BannerCarousel