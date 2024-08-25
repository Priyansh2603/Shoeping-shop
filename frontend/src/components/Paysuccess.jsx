import { Box, VStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState,useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppState } from '../App';
import axios from 'axios';
const Paysuccess = () => {
  const {loggedIn} = useContext(AppState);
  const {user} = useContext(AppState);
  const location = useLocation();
  const [order_id, setOrder_id] = useState(null); // Initialize with an appropriate default value
  const [pay_id,setPay_id] = useState(null);
  const [user_id,setUser_id] = useState('');
  // console.log("Effect k bahar: ",user_id);
  async function findUser() {
    try {
      const res = await axios.post("https://shoeping.onrender.com/auth/getuser", { user_id });
      // console.log("Response:", res.data);
  
      if (!res.data) {
        loggedIn(false, '', '');
        // console.log("It must be false");
      } else {
        loggedIn(true, res.data.name, res.data._id,res.data);
        document.title=`Shoeping (${res.data.name})`
        // console.log("after pay ", res.data.name, " ", res.data._id);
      }
  
    } catch (error) {
      // Handle error (e.g., network error, server error)
      console.error("Error fetching user:", error.message);
      // Optionally, handle the error by calling loggedIn with appropriate parameters
      loggedIn(false, '', '',{});
    }
  }
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const userIdfromURL = searchParams.get('reference');
    const orderIdFromURL = searchParams.get('order_id');
    const payIdfromURL = searchParams.get('payment_id');
    // console.log("At start:",userIdfromURL);
    setOrder_id(orderIdFromURL);
    setPay_id(payIdfromURL);
    setUser_id(userIdfromURL); 
    findUser();
    // console.log('user_id:', user_id);
    // console.log('order_id:', orderIdFromURL);
  },[user_id]);

  return (
    <Box  h="88vh" bg="whatsapp.100">
      <VStack h="80vh" justifyContent="center" alignItems="center" >
        <Text textColor="blackAlpha" textTransform="uppercase" fontSize="25px" fontWeight="bold">
          Your Order is placed, Successfully.
        </Text>
        <Text textColor="black" fontSize="20px">Your order id is : {order_id}</Text>
        <Text textColor="black" fontSize="20px">Your payment id is : {pay_id}</Text>
      </VStack>
    </Box>
  );
};

export default Paysuccess;
