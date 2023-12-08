import { Button, VStack, Image, Text, Box } from '@chakra-ui/react';
import React,{useContext,useState} from 'react';
import {AppState} from './App.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = ({ amount, img, model, Item_id, checkoutHandler, left, name, brand, rating }) => {
  const [added,setAdded] = useState(false);
  const addingCart = useContext(AppState).addingCart;
  const cart = useContext(AppState).cart;
  const log = useContext(AppState).login;
  const removeCartItem = useContext(AppState).removeCartItem;
  function OpenPay(){
    checkoutHandler(amount, model, Item_id)
  }
  function AddCart(){
      addingCart({amount,img,model,Item_id,brand,rating,name});
      toast.success(`You Added ${name} to cart Successfully! `,{theme:"dark",autoClose:2000,position:"top-center"})
      setAdded(true);
  }
  function removeCart(){
      removeCartItem(Item_id)
      toast.warning(`You Removed ${name} from cart! `,{theme:"dark",autoClose:2000,position:"top-center"})
      setAdded(false);
  }
  return (
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
      {log?(added?(<Button
        width="100%"
        bg={"red.100"}
        color="black"
        onClick={removeCart}
        mb="1vh"
        mt="1vh"
      >
        Remove from Cart
      </Button>):(<Button
        width="100%"
        bg={"gray.100"}
        color="black"
        onClick={AddCart}
        mb="1vh"
        mt="1vh"
      >
        Add to Cart
      </Button>)):<></>}
      <Button
        width="100%"
        bg="whatsapp.100"
        color="black"
        onClick={OpenPay}
      >
        Buy Now
      </Button>
    </Box>
  );
};

export default Card;
