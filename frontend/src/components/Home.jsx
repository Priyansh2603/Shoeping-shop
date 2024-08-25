import React from 'react';
import { Box,VStack,Text,SimpleGrid } from '@chakra-ui/react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Carousel from './CarouselComponent';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import HeroSection from './HeroSection';
import AboutSection from './About';
import Testimonial from './Testimonial';
import Carousel2 from './Carousel';
import Hero from './Hero';

const testimonials = [
  {
    name: 'John Doe',
    position: 'Web Developer',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non felis nec justo convallis.',
    avatarUrl: 'url-to-avatar-1',
  },
  {
    name: 'Jane Doe',
    position: 'Designer',
    comment: 'Integer sit amet justo vel velit tristique facilisis nec in justo. Sed in feugiat odio.',
    avatarUrl: 'url-to-avatar-2',
  },
  {
    name: 'John Doe',
    position: 'Web Developer',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non felis nec justo convallis.',
    avatarUrl: 'url-to-avatar-1',
  },
  {
    name: 'Jane Doe',
    position: 'Designer',
    comment: 'Integer sit amet justo vel velit tristique facilisis nec in justo. Sed in feugiat odio.',
    avatarUrl: 'url-to-avatar-2',
  },
  // Add more testimonials as needed
];
const newtheme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
        height: "50%"
      },
    },
  },
});

const Home = ({ checkoutHandler }) => {
  // const imageUrl = {logo};

  const theme = createTheme();
  return (
    <>
        <Box  bg="transparent">
          <ChakraProvider theme={newtheme}>
          {/* <HeroSection  title="Hello! We are Shoeping" subtitle="Are you looking for Footwears, Clothing, Groomings, exploring new arrivals, or enjoying exclusive deals, we have something for everyone. Thank you for choosing Shoeping for your online shopping needs!" /> */}
          <Hero/>
          <Box ><Carousel/></Box>
    </ChakraProvider>
          {/* <Carousel2/> */}
          <ChakraProvider theme={newtheme}>
            <Box id="about">
            <AboutSection/>
            </Box>
          </ChakraProvider>
      <Box centerContent mt={8}>
        <VStack spacing={4}>
      {/* <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }}  spacing={6} p={6}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </SimpleGrid> */}
        </VStack>
      </Box>
    </Box>
    </>
  );
};

export default Home;
