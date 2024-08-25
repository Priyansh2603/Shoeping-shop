import React from 'react';
import phone from './phone.json';
import { SimpleGrid,Text,VStack } from '@chakra-ui/react';
import Card from './Card';
export default function Phone({ checkoutHandler }) {
  return (
    <>
      {/* <Navbar /> */}
      <VStack h="10vh" justifyContent="center" alignItems="center" backgroundColor="whatsapp.500" >
    <Text textColor="blackAlpha" textTransform="uppercase" fontSize="25px" fontWeight="bold">
      Be Upgraded!
    </Text>
  </VStack>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }} backgroundColor="whatsapp.100" spacing={6} p={6}>
        {phone.map((element) => (
          <Card
          item={element}
            type="phone"
            key={element.id}
            img={element.thumbnail?element.thumbnail:element.images[0]}
            name={element.category} 
            brand={element.title}
            model={element.brand}
            amount={element.price}
            rating={element.rating?(element.rating.rate?element.rating.rate:element.rating):3.8}
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
