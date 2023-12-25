import React from 'react';
import { Box,VStack,Text } from '@chakra-ui/react';

const Home = ({ checkoutHandler }) => {
  return (
    <Box  h="88.2vh" bg="whatsapp.100">
      <VStack h="81vh" justifyContent="center" alignItems="center" >
        <Text textColor="blackAlpha" textTransform="uppercase" fontSize="25px" fontWeight="bold">
          Welcome to the SHoeping, Shop Effortlessly!
        </Text>
      </VStack>
    </Box>
  );
};

export default Home;
