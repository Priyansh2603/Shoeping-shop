import React, { useState, useEffect } from 'react';
import { Box, Button, Text, Flex, IconButton, Heading } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const slides = [
  { 
    id: 1, 
    image: 'https://media.istockphoto.com/id/494756060/photo/woman-buying-vegetables-in-grocery-store.jpg?s=1024x1024&w=is&k=20&c=IWyRGb3xHBjPwafkynvDJdOoqT29URX4xTuMOtLMpH4=', 
    alt: 'Grocery Shopping', 
    headline: "Experience Convenience Like Never Before", 
    subtext: "Discover fresh products, daily essentials, and more—all at your fingertips." 
  },
  { 
    id: 2, 
    image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    alt: 'Effortless Shopping', 
    headline: "Shop Smarter, Not Harder", 
    subtext: "Enjoy a seamless shopping experience with our intuitive platform." 
  },
  { 
    id: 3, 
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    alt: 'Time Saving', 
    headline: "Your Time is Precious—We Get It", 
    subtext: "Get what you need quickly with our fast and reliable service." 
  },
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
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <Box position="relative" width="100vw" height="100vh" overflow="hidden">
      {slides.map((slide, i) => (
        <Box
          key={slide.id}
          position="absolute"
          width="100%"
          height="115%"
          transform={`translateX(${(i - index) * 100}%)`}
          transition="transform 0.8s ease-in-out"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundImage={`url(${slide.image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgGradient: 'linear(to-r, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))',
            zIndex: 1,
          }}
        >
          <Box
            position="relative"
            zIndex={2}
            bg="rgba(0, 0, 0, 0.4)"
            backdropFilter="blur(5px)"
            p={8}
            borderRadius="md"
            textAlign="center"
            animation="fadeIn 1s ease-in-out"
          >
            <Heading
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight="extrabold"
              color="white"
              textShadow="0px 0px 20px rgba(0, 0, 0, 0.7)"
              mb={4}
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.05)',
              }}
            >
              {slide.headline}
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'xl' }}
              color="gray.300"
              textShadow="0px 0px 15px rgba(0, 0, 0, 0.7)"
              transition="all 0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.05)',
              }}
            >
              {slide.subtext}
            </Text>
          </Box>
        </Box>
      ))}
      <Flex
        position="absolute"
        top="50%"
        width="100%"
        justifyContent="space-between"
        px={4}
      >
        <IconButton
          aria-label="Previous Slide"
          icon={<ArrowBackIcon />}
          onClick={handlePrev}
          bg="rgba(0, 0, 0, 0.5)"
          _hover={{ bg: 'rgba(0, 0, 0, 0.8)' }}
          borderRadius="full"
          color="white"
        />
        <IconButton
          aria-label="Next Slide"
          icon={<ArrowForwardIcon />}
          onClick={handleNext}
          bg="rgba(0, 0, 0, 0.5)"
          _hover={{ bg: 'rgba(0, 0, 0, 0.8)' }}
          borderRadius="full"
          color="white"
        />
      </Flex>
      <Flex
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        justifyContent="center"
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            width={index === i ? "12px" : "8px"}
            height={index === i ? "12px" : "8px"}
            bg={index === i ? "white" : "gray.400"}
            borderRadius="50%"
            mx={1}
            transition="all 0.3s"
            opacity={index === i ? 1 : 0.6}
            _hover={{
              width: "14px",
              height: "14px",
              bg: "white",
            }}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Carousel;
