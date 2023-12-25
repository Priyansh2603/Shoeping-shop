import React from 'react';
import groom from './grooming.json'
import { SimpleGrid,Text,VStack } from '@chakra-ui/react';
import Card from './Card';
export default function Groom({checkoutHandler}) {
  return (<>    
  <VStack h="10vh" justifyContent="center" alignItems="center" backgroundColor="whatsapp.500" >
    <Text textColor="blackAlpha" textTransform="uppercase" fontSize="25px" fontWeight="bold">
      Style you and your place!
    </Text>
  </VStack>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }} bg="whatsapp.100" spacing={6} p={6}>
        {groom.map((element) => (
          <Card
            key={element.id}
            item={element}
            type="grooming"
            img={element.thumbnail}
            name={element.category} 
            brand={element.title}
            model={element.brand}
            amount={element.price}
            rating={element.rating.rate?element.rating.rate:element.rating}
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
  )
}
