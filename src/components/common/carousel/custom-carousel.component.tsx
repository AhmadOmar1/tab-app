import React from 'react';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import style from './carousel.module.css';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { IconButton } from '@mui/material';



const CustomNextArrow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ onClick }) => (
    <div className={style.customArrowLeft} onClick={onClick}>
        <IconButton
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                position: 'absolute', 
                left: '-20px',
            }}
        >
            <ChevronRight />
        </IconButton>
    </div>
);

const CustomPrevArrow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ onClick }) => (
    <div className={style.customArrowRight} onClick={onClick}>
        <IconButton
             sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                position: 'absolute', 
                left: '0px',
            }}
        >
            <ChevronLeft />
        </IconButton>
    </div>
);

interface CustomCarouselProps<T> {
    items: T[];
    renderCarouselItem: (item: T, index: number) => React.ReactNode;
    responsive?: ResponsiveType
}

const CustomCarousel = <T,>({
    items,
    renderCarouselItem,
    responsive = {
        desktopL: {
            breakpoint: { max: 3000, min: 1366 },
            items: 4,
            slidesToSlide: 4,
        },
        desktopM: {
            breakpoint: { max: 1810, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tabletL: {
            breakpoint: { max: 1399, min: 900 },
            items: 2,
            slidesToSlide: 2,
        },
        tabletM: {
            breakpoint: { max: 970, min: 768 },
            items: 1,
            slidesToSlide: 1,
        },
        tabletS: {
            breakpoint: { max: 890, min: 600 },
            items: 1,
            slidesToSlide: 1,
        },
        mobileL: {
            breakpoint: { max: 600, min: 464 },
            items: 1,
            slidesToSlide: 1,
        },
        mobileM: {
            breakpoint: { max: 464, min: 375 },
            items: 1,
            slidesToSlide: 1,
        },
        mobileS: {
            breakpoint: { max: 375, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    }
}: CustomCarouselProps<T>) => {
    return (
        <div className={style.parent}>
            <Carousel
                responsive={responsive}
                keyBoardControl={true}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                transitionDuration={1000}
                arrows={true}
                customRightArrow={<CustomNextArrow />}
                customLeftArrow={<CustomPrevArrow />}
            >
                {items.map((item, index) => (
                    <div className={style.slider} key={index}>
                        {renderCarouselItem(item, index)}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CustomCarousel;
