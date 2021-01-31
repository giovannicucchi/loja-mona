import Link from "next/link";
import React, { useState } from 'react'

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

const CarouselComponent = ({banners}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false); 

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === banners.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? banners.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = banners.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.title}
                style={{ height: 280 }}
            >
                <img src={item.image[0].url} alt={item.title} style={{ height: 280, width: '100%', objectFit: 'cover' }} />
                <Link href={item.product ? `/products/${item.product.slug}` : ''}>
                    <a>
                        <CarouselCaption captionText={item.text} captionHeader={item.title} className="w-1/2" />
                    </a>
                </Link>
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={banners} activeIndex={activeIndex} onClickHandler={goToIndex} style={{ backgroundColor: 'var(--color-primary-4)!important', color: '--color-primary-4' }} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
    // return (
    //     <div>carrossel</div>
    // )
}

export default CarouselComponent;
