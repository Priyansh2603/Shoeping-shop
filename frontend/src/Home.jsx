import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Card from './Card';
import axios from 'axios';
import mainlogo from './img/logo.png';
import shoes from './shoes.json';
import bannerimage from './img/banner/banner-img.png';
import fi1 from './img/features/f-icon1.png';
import fi2 from './img/features/f-icon2.png';
import fi3 from './img/features/f-icon3.png';
import fi4 from './img/features/f-icon4.png';
import c1 from './img/category/c1.jpg';
import c2 from './img/category/c2.jpg';
import c3 from './img/category/c3.jpg';
import c4 from './img/category/c4.jpg';
import c5 from './img/category/c5.jpg';
import Navbar from './Navbar';

const Home = ({ checkoutHandler }) => {
  return (
    <div>
      {/* <Navbar /> */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} bg="whatsapp.100" spacing={6} p={6}>
        {shoes.map((element,i) => (
          <Card
            key={i}
            Item_id={element.id}
            img={element.imageURL}
            name={element.name}
            brand={element.brand}
            rating={element.rating}
            amount={element.price}
            model={element.category}
            left={element.items_left}
            checkoutHandler={checkoutHandler}
            // Adjusted width and height styles
            width="100%"
            maxW="300px"
            height="fit-content"
            boxShadow="md" 
            borderRadius="md"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default Home;
