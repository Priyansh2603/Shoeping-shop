import React from 'react';
import { Box, VStack, Text, SimpleGrid } from '@chakra-ui/react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Carousel from './CarouselComponent';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import HeroSection from './HeroSection';
import AboutSection from './About';
import Testimonial from './Testimonial';
import Categories from './Categories';
import Products from './Product';

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
      <Box className="mt-40 scrollbar-hidden" bg="transparent">
        <ChakraProvider theme={newtheme}>
        <HeroSection 
  title="Step into Style with Shoeping" 
  subtitle="From trendsetting footwear to must-have apparel and grooming essentials, explore our curated collections and exclusive offers. Elevate your wardrobe with the finest picks, tailored just for you. Thank you for choosing Shoeping, where every step is a statement!" 
/>

        </ChakraProvider>
        <Categories/>
        <Products/>
        <Carousel />
        <ChakraProvider theme={newtheme}>
          <Box id="about">
            <AboutSection />
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
