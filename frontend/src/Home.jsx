import React from 'react';
import { Box,VStack,Text } from '@chakra-ui/react';

const Home = ({ checkoutHandler }) => {
  return (
      <Box h='88vh'  bg="whatsapp.100">
     
      <VStack h='90%' justifyContent="center" alignItems="center" >
      <div className='stack' >
        <Text textColor="blackAlpha" textTransform="uppercase" fontSize="25px" fontWeight="bold">
          Welcome to the SHoeping, Shop Effortlessly!
        </Text>
      </div>
      </VStack>
    </Box>
  );
};

export default Home;
