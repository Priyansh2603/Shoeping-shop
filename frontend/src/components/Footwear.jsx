import React from 'react'
import { SimpleGrid,Text,VStack } from '@chakra-ui/react';
import shoes from './shoes.json';
import Card from './Card';
export default function Footwear({checkoutHandler}) {
  return (
    <div>
      {/* <Navbar /> */}
      <VStack h="10vh" justifyContent="center" alignItems="center" backgroundColor="whatsapp.500" >
        <Text textColor="blackAlpha" textTransform="uppercase" fontSize="25px" fontWeight="bold">
          Walk Freely!
        </Text>
      </VStack>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }} bg="whatsapp.100" spacing={6} p={6}>
        {shoes.map((element,i) => (
          <Card
            key={i}
            item={element}
            type="footwear"
            Item_id={element.id}
            img={element.image}
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
  )
}
