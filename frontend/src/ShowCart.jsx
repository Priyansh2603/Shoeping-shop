import { Button, VStack, Image, Text, Box } from '@chakra-ui/react';
import React,{useContext,useState} from 'react';
import {AppState} from './App.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,Link } from 'react-router-dom';
import RemoveShoppingCart from '@mui/icons-material/RemoveShoppingCart.js';
export default function ShowCart({item,type,amount,img,model,Item_id,brand,rating,name}) {
  const cart = useContext(AppState).cart;
  const removeCartItem = useContext(AppState).removeCartItem;
  const checkoutHandler = useContext(AppState).checkoutHandler;
  const setItem = useContext(AppState).setItem;
  function removeCart(){
      removeCartItem(Item_id)
      toast.warning(`You Removed ${name} from cart! `,{theme:"dark",autoClose:2000,position:"top-center"})
  }
  async function OpenPay(){
    
    checkoutHandler(amount, model, Item_id)
  }
  const history = useNavigate();
  async function showItem(){
    await setItem(item);
    console.log('Card:',item);
    history(`/${type}/itemview`);
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
        <Link onClick={showItem}><Image src={img} boxSize={40} objectFit="contain" overflow="hidden" /></Link>
        <Text fontWeight="bold" fontSize="xl">
          ₹{amount}
        </Text>
        {rating && <Text>Rating: {rating}*</Text>}
        <Text>{brand}</Text>
      </VStack>
      <div style={{display:"flex",justifyContent:'center'}}>
      <Button
        width="20%"
        bg={"red.400"}
        color="black"
        onClick={removeCart}
        mb="1vh"
        mt="1vh"
      >
        <RemoveShoppingCart/>
        </Button>
      </div>
    </Box>
    </>
  )
}
