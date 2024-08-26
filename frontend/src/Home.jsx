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
import Footer from './Footer';
import OurMissionSection from './OurMission';
import MeetTheFounderSection from './MeetDev';

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
    <div className='scrollbar-hidden'>
      <Box className="mt-40 scrollbar-hidden" bg="transparent">
        <Carousel /><Categories />
        <ChakraProvider theme={newtheme}>
          <HeroSection
            title="Step into Style with Shoeping"
            subtitle="From trendsetting footwear to must-have apparel and grooming essentials, explore our curated collections and exclusive offers. Elevate your wardrobe with the finest picks, tailored just for you. Thank you for choosing Shoeping, where every step is a statement!"
          />
        </ChakraProvider>
        <Products />
        <ChakraProvider theme={newtheme}>
          <Box id="about">
            <AboutSection />
          </Box>
        </ChakraProvider>
        <MeetTheFounderSection/>
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
