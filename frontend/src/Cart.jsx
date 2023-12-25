import React,{useContext, useEffect,useState} from 'react'
import {AppState} from './App.js'
import { SimpleGrid,Text,VStack,Button } from '@chakra-ui/react';
import ShowCart from './ShowCart.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default function Cart({}) {
    const cart = useContext(AppState).cart;
    const checkoutHandler = useContext(AppState).checkoutHandler;
    const user = useContext(AppState).user;
    const name = useContext(AppState).name;
    const [total,setTotal] = useState(0);
    async function OpenPay(){
        // console.log(total," ",name," ",user)
        checkoutHandler(total, name, user)
    }
    console.log("Cart",cart.length);
    useEffect(()=>{
        const totalAmount = cart.reduce((total, item) => total + item.price, 0);
        setTotal(totalAmount);
    },[cart])
  return (<>
  <ToastContainer/>
  <VStack h="10vh" justifyContent="center" alignItems="center" backgroundColor="whatsapp.500" >
    <Text textColor="blackAlpha" textTransform="uppercase" fontSize="25px" fontWeight="bold">
      You have {cart.length} {cart.length===1?"item":"items"} added in the cart!
    </Text>
  </VStack>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }} bg={cart.length>0?"whatsapp.100":"white"} spacing={6} p={6}>
      
        {cart.map((element,i) => (
          <ShowCart
            item={element}
            type="cart"
            key={i}
            Item_id={element.Item_id?element.Item_id:element.id}
            img={element.image?element.image:element.thumbnail?element.thumbnail:element.images[0] }
            name={element.name}
            brand={element.brand}
            rating={element.rating?(element.rating.rate===undefined?element.rating:element.rating.rate):" "}
            amount={element.price?element.price:element.amount}
            model={element.model}
            left={element.items_left}
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
      {cart.length ?(<div style={{marginBottom:"4vw",marginLeft:"4vw",marginRight:"4vw",marginTop:"2vh"}}>
            <Button
            width="100%"
            bg="whatsapp.100"
            color="black"
            onClick={OpenPay}
          >
            Pay ₹{total}
          </Button>
        </div>):(<></>)
      }
      </>
  )
}
