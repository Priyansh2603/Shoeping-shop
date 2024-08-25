import { Button, VStack, Image, Text, Box } from '@chakra-ui/react';
import React,{useContext,useState} from 'react';
import {AppState} from '../App.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
const Card = ({ item,amount, img, model, Item_id, checkoutHandler,type, left, name, brand, rating }) => {
  const [added,setAdded] = useState(false);
  const addingCart = useContext(AppState).addingCart;
  const setItem = useContext(AppState).setItem;
  const cart = useContext(AppState).cart;
  const log = useContext(AppState).login;
  const removeCartItem = useContext(AppState).removeCartItem;
  const history = useNavigate();
  function OpenPay(){
    checkoutHandler(amount, model, Item_id,"item");
  }
  function AddCart(){
      addingCart(item);
      toast.success(`You Added ${name} to cart Successfully! `,{theme:"dark",autoClose:2000,position:"top-center"})
      setAdded(true);
  }
  function removeCart(){
      removeCartItem(Item_id);
      toast.warning(`You Removed ${name} from cart! `,{theme:"dark",autoClose:2000,position:"top-center"})
      setAdded(false);
  }
  async function showItem(){
    await setItem(item);
    console.log('Card:',item);
    history(`/${type}/itemview`);
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
      <VStack  align="center" spacing={2} >
        
      <Link onClick={showItem}>
        <Image src={img} boxSize={40} objectFit="contain" overflow="hidden" />
      </Link>
        <Text fontWeight="bold" fontSize="xl">
          ₹{amount}
        </Text>
        {rating && <Text>Rating: {rating}*</Text>}
        <Text>{brand && brand}</Text>
      </VStack>
      {log?(added?(<div style={{display:"flex",justifyContent:'center'}}><Button
        width="20%"
        bg={"red.300"}
        color="black"
        onClick={removeCart}
        mb="1vh"
        mt="1vh"
      >
        <RemoveShoppingCartIcon/>
      </Button></div>):(<div style={{display:"flex",justifyContent:'center'}}>
        <Button
        width="20%"
        bg={"yellow.300"}
        color="black"
        onClick={AddCart}
        mb="1vh"
        mt="1vh"
      >
        <AddShoppingCartIcon/>
      </Button>
      </div>)):<></>}
      <div style={{display:"flex",justifyContent:'center'}}>
      <Button
        width="100%"
        bg="whatsapp.100"
        color="black"
        onClick={OpenPay}
      >
        Buy Now
      </Button>
      </div>
    </Box>
  );
};

export default Card;
