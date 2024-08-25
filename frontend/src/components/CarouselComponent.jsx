// Carousel.js
import React, { useState, useEffect } from 'react';
import { Box, Button,Text } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
const slides = [
  { id: 1, image: 'https://media.istockphoto.com/id/494756060/photo/woman-buying-vegetables-in-grocery-store.jpg?s=1024x1024&w=is&k=20&c=IWyRGb3xHBjPwafkynvDJdOoqT29URX4xTuMOtLMpH4=', alt: 'Image 1', text:"Welcome to Shoeping", color:"blue" },
  { id: 2, image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 20', text:"Shop Effortlessly" },
  { id: 3, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Image 3',text:"We respect your time" },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // Auto-scroll every 3 seconds (adjust the interval as needed)
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      // Cleanup the interval on component unmount
      clearInterval(interval);
    };
  }, [index]); // Re-run the effect whenever the index changes

  return (
    <Box position="relative" overflowX="hidden" width="auto" height="90vh" >
      {slides.map((slide, i) => (
        <Box
          key={slide.id}
          position="absolute"
          width="100vw"
          height="100%"
          transform={`translateX(${(i - index) * 100}%)`}
          transition="transform 0.5s ease-in-out"
          display="flex" 
          bg= {slides.color}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <img src={slide.image} alt={slide.alt} style={{ minWidth: '100%', maxHeight: '90%' }} />
          <div><Text color={"whatsapp.100"}><h2 style={{color:"black",margin:"1vh"}}>{slide.text}</h2></Text></div>
        </Box>
      ))}
      <Button position="absolute" left="3"  top="50%" onClick={handlePrev}>
        <ArrowBackIcon color="black"/>
      </Button>
      <Button position="absolute" right="8" top="50%" onClick={handleNext}>
        <ArrowForwardIcon color="black"/>
      </Button>
    </Box>
  );
};

export default Carousel;
