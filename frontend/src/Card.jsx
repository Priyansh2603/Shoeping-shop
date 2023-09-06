import { Button, VStack, Image, Text, Box } from '@chakra-ui/react';
import React from 'react';

const Card = ({ amount, img, model, Item_id, checkoutHandler, left, name, brand, rating }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md" 
      borderColor="gray.300"
      p={4}
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }}
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <VStack align="center" spacing={2}>
        <Image src={img} boxSize={40} objectFit="contain" overflow="hidden" />
        <Text fontWeight="bold" fontSize="xl">
          ₹{amount}
        </Text>
        {rating && <Text>Rating: {rating}*</Text>}
        <Text>{brand}</Text>
      </VStack>
      <Button
        width="100%"
        bg="whatsapp.100"
        color="black"
        onClick={() => checkoutHandler(amount, model, Item_id)}
      >
        Buy Now
      </Button>
    </Box>
  );
};

export default Card;
