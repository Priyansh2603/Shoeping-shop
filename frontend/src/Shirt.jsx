import React from 'react';
import shirt from './shirt.json';
import { SimpleGrid,Text,VStack } from '@chakra-ui/react';
import Card from './Card';
import Navbar from './Navbar';

export default function Shirt({ checkoutHandler }) {
  return (
    <div className="mt-40" style={{paddingTop:'6.4rem'}}>
      {/* <Navbar /> */}
      <VStack h="11vh" justifyContent="center" position="fixed" minWidth="100vw" zIndex='500'  alignItems="center" marginTop="-20" backgroundColor="gray.900" >
        <Text textColor="gray.50" textTransform="uppercase" fontSize="25px" fontWeight="bold">
          House of Fashion!
        </Text>
      </VStack>
      <SimpleGrid columns={{base:2,sm: 3, md: 3, lg: 4, xl: 5 }} backgroundColor="gray.100"  spacing={6} p={7} py={10}>
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
