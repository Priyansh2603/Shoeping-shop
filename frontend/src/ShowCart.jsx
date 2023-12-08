import { Button, VStack, Image, Text, Box } from '@chakra-ui/react';
import React,{useContext,useState} from 'react';
import {AppState} from './App.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ShowCart({amount,img,model,Item_id,brand,rating,name}) {
  const cart = useContext(AppState).cart;
  const removeCartItem = useContext(AppState).removeCartItem;
  const checkoutHandler = useContext(AppState).checkoutHandler;
  function removeCart(){
      removeCartItem(Item_id)
      toast.warning(`You Removed ${name} from cart! `,{theme:"dark",autoClose:2000,position:"top-center"})
  }
  function OpenPay(){
    checkoutHandler(amount, model, Item_id)
  }
  return (<>
    <Box
      borderWidth="1px"
      borderRadius="md" 
      borderColor="gray.300"
      p={4}
      bg="white"
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
        bg={"red.100"}
        color="black"
        onClick={removeCart}
        mb="1vh"
        mt="1vh"
      >
        Remove from Cart
        </Button>
    </Box>
    </>
  )
}
