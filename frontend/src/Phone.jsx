import React from 'react';
import phone from './phone.json';
import { SimpleGrid,Text,  Box, Button,VStack, } from '@chakra-ui/react';
import Card from './Card';
import {} from '@mui/system';
export default function Phone({ checkoutHandler }) {
  
  return (
    <div className="mt-40 relative bg-gray-100" style={{paddingTop:'6.4rem', backgroundColor:"gray.100"}}>
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        h="12vh"
        bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))"
        color="white"
        textAlign="center"
        py={4}
        zIndex="1"
        marginTop={3}
        
      >
        <Text
          fontSize={{ base: "24px", md: "32px" }}
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wider"
          mb={2}
        >
          Discover Our Latest Electronics
        </Text>
        <Button
          bg="teal.500"
          color="white"
          _hover={{ bg: 'teal.600' }}
          size="lg"
          borderRadius="full"
          marginBottom={28}
        >
          Explore Now
        </Button>
      </Box>
      <SimpleGrid columns={{base:2,sm: 3, md: 3, lg: 4, xl: 5 }}  spacing={6} p={7} mt={10} py={10}>
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
