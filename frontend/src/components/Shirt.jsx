import React from 'react';
import shirt from './shirt.json';
import { SimpleGrid,Text,VStack } from '@chakra-ui/react';
import Card from './Card';
import Navbar from './Navbar';

export default function Shirt({ checkoutHandler }) {
  return (
    <div>
      {/* <Navbar /> */}
      <VStack h="10vh" justifyContent="center" alignItems="center" backgroundColor="whatsapp.500" >
        <Text textColor="blackAlpha" textTransform="uppercase" fontSize="25px" fontWeight="bold">
          House of Fashion!
        </Text>
      </VStack>
      <SimpleGrid columns={{ sm: 3, md: 2, lg: 5 }} bg="whatsapp.100" spacing={6} p={6}>
        {shirt.map((element) => (
          <Card
            key={element.id}
            item={element}
            type="shirt"
            img={element.image?element.image:(element.price===100 || element.price===10?element.category.image:element.images[0])}
            name={element.name}
            brand={element.category.name?element.category.name:element.category}
            model={element.title}
            amount={element.price}
            rating=""
            Item_id={element.id}
            left={element.rating?element.rating.count:0}
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
