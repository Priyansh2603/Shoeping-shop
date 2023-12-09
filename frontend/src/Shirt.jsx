import React from 'react';
import shirt from './shirt.json';
import { SimpleGrid } from '@chakra-ui/react';
import Card from './Card';
import Navbar from './Navbar';

export default function Shirt({ checkoutHandler }) {
  return (
    <div>
      {/* <Navbar /> */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} bg="whatsapp.100" spacing={6} p={6}>
        {shirt.map((element) => (
          <Card
            key={element.id}
            img={element.image}
            name={element.name}
            brand={element.category}
            model={element.title}
            amount={element.price}
            rating=""
            Item_id={element.id}
            left={element.rating.count}
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
}
