import React, { useState } from 'react';

export default function Carousel2() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, image: 'https://media.istockphoto.com/id/494756060/photo/woman-buying-vegetables-in-grocery-store.jpg?s=1024x1024&w=is&k=20&c=IWyRGb3xHBjPwafkynvDJdOoqT29URX4xTuMOtLMpH4=', alt: 'Image 1', text: "Welcome to Shoeping", color: "blue" },
        { id: 2, image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 20', text: "Shop Effortlessly" },
        { id: 3, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 3', text: "We respect your time" },
    ];

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {slides.map((slide, i) => (
                        <div key={i} className={`duration-700 ease-in-out ${i === currentSlide ? 'block' : 'hidden'}`} data-carousel-item>
                            <img src={slide.image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={slide.alt} />
                        </div>
                    ))}
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {slides.map((_, i) => (
                        <button key={i} type="button" className={`w-3 h-3 rounded-full ${i === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`} aria-current={i === currentSlide} aria-label={`Slide ${i + 1}`} onClick={() => goToSlide(i)}></button>
                    ))}
                </div>
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}>
                    {/* Previous button SVG */}
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={() => goToSlide((currentSlide + 1) % slides.length)}>
                    {/* Next button SVG */}
                </button>
            </div>
        </div>
    );
}
