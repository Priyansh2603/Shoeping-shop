import React from 'react';
import phone from './phone.json';
import { SimpleGrid,Text,VStack } from '@chakra-ui/react';
import Card from './Card';
export default function Phone({ checkoutHandler }) {
  
  return (
    <div className="mt-40" style={{paddingTop:'6.4rem'}}>
      {/* <Navbar /> */}
      <VStack h="11vh" justifyContent="center" position="fixed" minWidth="100vw" zIndex='500'  alignItems="center" marginTop="-20" backgroundColor="gray.900" >
    <Text textColor="gray.50"  textTransform="uppercase"  fontSize="25px" fontWeight="bold">
      Be Upgraded!
    </Text>
  </VStack>
      <SimpleGrid columns={{base:2,sm: 3, md: 3, lg: 4, xl: 5 }} backgroundColor="gray.100"  spacing={6} p={7} py={10}>
        {phone.map((element) => (
        <>
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
          {console.log(element.category)}

          </>
        ))}
      </SimpleGrid>
    </div>
  );
}
