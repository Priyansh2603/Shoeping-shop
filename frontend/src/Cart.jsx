import React,{useContext, useEffect,useState} from 'react'
import {AppState} from './App.js'
import { SimpleGrid,Button } from '@chakra-ui/react';
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
    useEffect(()=>{
        const totalAmount = cart.reduce((total, item) => total + item.amount, 0);
        setTotal(totalAmount);
    },[cart])
  return (<>
  <ToastContainer/>
        <div  bg="whatsapp.100" style={{maxWidth:"100vw",backgroundColor:"pink", display:"flex",justifyContent:"center",paddingTop:"2vw",paddingBottom:"1vh"}}><h1 style={{display:"block"}}>You have {cart.length} items added in the cart</h1></div>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} bg={cart.length>0?"whatsapp.100":"white"} spacing={6} p={6}>
        {cart.map((element,i) => (
          <ShowCart
            key={i}
            Item_id={element.Item_id}
            img={element.image || element.img }
            name={element.name}
            brand={element.brand}
            rating={element.rating}
            amount={element.amount}
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
      {
        total?(<div style={{marginBottom:"4vw",marginLeft:"4vw",marginRight:"4vw",marginTop:"2vh"}}>
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
