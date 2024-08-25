import React from 'react'
import { SimpleGrid,Text,VStack } from '@chakra-ui/react';
import shoes from './shoes.json';
import Card from './Card';
export default function Footwear({checkoutHandler}) {
  return (
    <div className="mt-40" style={{paddingTop:'6.4rem'}}>
      {/* <Navbar /> */}
      <VStack h="11vh" justifyContent="center" position="fixed" minWidth="100vw" zIndex='500'  alignItems="center" marginTop="-20" backgroundColor="gray.900" >
    <Text textColor="gray.50"  textTransform="uppercase"  fontSize="25px" fontWeight="bold">
      Walk Freely!
    </Text>
  </VStack>
      <SimpleGrid columns={{base:2,sm: 3, md: 3, lg: 4, xl: 5 }} backgroundColor="gray.100"  spacing={6} p={7} py={10}>
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
