// HeroSection.js
import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';
import hero from "./img/hero2.png"
const HeroSection = ({  title, subtitle }) => {
  return (
    <Box textAlign="center" bg="blue.50" py={16} display={"flex"} flexDirection={{base:'column-reverse',md:'row'}} alignItems={"center"} justifyContent={"center"}>
      <VStack w={{base:'100%',md:'50%'}} h="100%" spacing={4} justifyContent={"center"} m={5}>
        
        <Heading fontSize={{base:"2xl",md:"4xl"}}>{title}</Heading>
        <Text w="70%" fontSize="lg" textAlign={"justify"}>{subtitle}</Text>
      </VStack>
      <Image src={"https://media.istockphoto.com/id/1347626309/photo/latina-female-using-desktop-computer-with-clothing-online-web-store-to-choose-and-buy-clothes.webp?b=1&s=170667a&w=0&k=20&c=4kUNbsgz6Qx2yGHGw_z3KI814Ekc8xHmrByZ-0VsALM="} alt="Hero Image" w={{base:'80%',md:'40%'}} objectFit="cover" borderRadius="10" />
    </Box>
  );
};

export default HeroSection;
