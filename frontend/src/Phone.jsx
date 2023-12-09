import React from 'react';
import phone from './phone.json';
import { SimpleGrid } from '@chakra-ui/react';
import Card from './Card';
import Navbar from './Navbar';

export default function Phone({ checkoutHandler }) {
  return (
    <>
      {/* <Navbar /> */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} bg="whatsapp.100" spacing={6} p={6}>
        {phone.map((element) => (
          <Card
            key={element.id}
            img={element.thumbnail}
            name={element.category} 
            brand={element.title}
            model={element.brand}
            amount={element.price}
            rating={element.rating}
            Item_id={element.id}
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
    </>
  );
}
