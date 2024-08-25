// HeroSection.js
import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Image, VStack, Button } from '@chakra-ui/react';
import hero from "../img/hero.webp"
const boxStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

const overlayStyle = {
  content: '""',
  // backgroundImage: `url("https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.webp?b=1&s=170667a&w=0&k=20&c=Q73ir-wB0u0cUX1Ho6OABXrQEBoD9b8FFV4Bn_DsEB8=")`,
  // backgroundImage: `url("https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.webp?b=1&s=170667a&w=0&k=20&c=Q73ir-wB0u0cUX1Ho6OABXrQEBoD9b8FFV4Bn_DsEB8=")`,
  opacity: 1, // Adjust the opacity value as needed (0 to 1)
  // position: 'absolute',
  backgroundColor: 'black' ,
  top: 0,
  left: 0,
  // width: '100vw',
  color: 'white',
  // height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
const HeroSection = ({  title, subtitle }) => {
  return (
    <Box style={overlayStyle} textAlign="center" h={'88vh'}  py={16} display={"flex"} flexDirection={{base:'column-reverse',md:'row'}} alignItems={"center"} justifyContent={"center"}>
      {/* <Image position={'absolute'} w={'100vw'} h={'88vh'} zIndex={'-1'} opacity={'0.7'} src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"></Image> */}
      <VStack opacity={1} w={{base:'100%',md:'50%'}} h="100%" spacing={4} justifyContent={"center"} m={5}>
        
        <Heading className='bg-gradient' fontSize={{base:"2xl",md:"4xl"}} color={'gray.400'}>{title}</Heading>
        <Text w="70%" fontSize="lg" textAlign={"justify"}>{subtitle}</Text>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
        <Button colorScheme='yellow' mr="40">Get Started -></Button>
        <Button colorScheme='yellow'>Shop Now</Button>
        </Box>
      </VStack>
      <Image opacity={1} src={"https://media.istockphoto.com/id/1347626309/photo/latina-female-using-desktop-computer-with-clothing-online-web-store-to-choose-and-buy-clothes.webp?b=1&s=170667a&w=0&k=20&c=4kUNbsgz6Qx2yGHGw_z3KI814Ekc8xHmrByZ-0VsALM="} alt="Hero Image" w={{base:'80%',md:'40%'}} objectFit="cover" borderRadius="10" />
    </Box>
  );
};

export default HeroSection;
