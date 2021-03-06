import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ProductCard from './ProductCard';
import matchMediaBreakpoint from '../functions/matchMediaBreakpoint';

class BannerCarousel extends Component {
    render() {
        return (
            <Carousel 
                centerMode
                centerSlidePercentage={matchMediaBreakpoint()}
                infiniteLoop 
                showArrows 
                showThumbs={false} 
                showStatus={false} 
                showIndicators={false}
            >
                <ProductCard 
                    image={'products/womens-t-shirt.jpg'} 
                    title={'Product Title'} 
                    category={"Women's T-shirt"} 
                    price={'19.99'} 
                    linkTo={'/'}
                />
                <ProductCard 
                    image={'products/womens-t-shirt.jpg'} 
                    title={'Product Title'} 
                    category={"Women's T-shirt"} 
                    price={'19.99'} 
                    linkTo={'/'}
                />
                <ProductCard 
                    image={'products/womens-t-shirt.jpg'} 
                    title={'Product Title'} 
                    category={"Women's T-shirt"} 
                    price={'19.99'} 
                    linkTo={'/'}
                />
                <ProductCard 
                    image={'products/womens-t-shirt.jpg'} 
                    title={'Product Title'} 
                    category={"Women's T-shirt"} 
                    price={'19.99'} 
                    linkTo={'/'}
                />
                <ProductCard 
                    image={'products/womens-t-shirt.jpg'} 
                    title={'Product Title'} 
                    category={"Women's T-shirt"} 
                    price={'19.99'} 
                    linkTo={'/'}
                />
                <ProductCard 
                    image={'products/womens-t-shirt.jpg'} 
                    title={'Product Title'} 
                    category={"Women's T-shirt"} 
                    price={'19.99'} 
                    linkTo={'/'}
                />
                <ProductCard 
                    image={'products/womens-t-shirt.jpg'} 
                    title={'Product Title'} 
                    category={"Women's T-shirt"} 
                    price={'19.99'} 
                    linkTo={'/'}
                />
                <ProductCard 
                    image={'products/womens-t-shirt.jpg'} 
                    title={'Product Title'} 
                    category={"Women's T-shirt"} 
                    price={'19.99'} 
                    linkTo={'/'}
                />
            </Carousel>
        );
    }
}

export default BannerCarousel