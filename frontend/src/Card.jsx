import { Button, VStack, Image, Text, Box, Flex, Badge, useBreakpointValue } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { AppState } from './App.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { motion } from 'framer-motion';

const Card = ({ item, amount, img, model, Item_id, checkoutHandler, type, name, brand, rating }) => {
  const [added, setAdded] = useState(false);
  const { addingCart, setItem, removeCartItem, login } = useContext(AppState);
  const history = useNavigate();

  const handleAddToCart = () => {
    addingCart(item);
    toast.success(`Added ${name} to cart successfully!`, { theme: "dark", autoClose: 2000, position: "top-center" });
    setAdded(true);
  };

  const handleRemoveFromCart = () => {
    removeCartItem(Item_id);
    toast.warning(`Removed ${name} from cart!`, { theme: "dark", autoClose: 2000, position: "top-center" });
    setAdded(false);
  };

  const handleShowItem = async () => {
    await setItem(item);
    history(`/${type}/itemview`);
  };

  const handleOpenPay = () => {
    checkoutHandler(amount, model, Item_id, "item");
  };

  const cardWidth = useBreakpointValue({ base: '13rem', md: '15rem' });
  const imageSize = useBreakpointValue({ base: '7rem', md: '10rem' });

  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      borderColor="gray.300"
      onClick={handleShowItem}
      bg="white"
      boxShadow="2xl"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{ 
        transform: 'scale(1.05)', 
        boxShadow: '2xl' 
      }}
      width={cardWidth}
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      textAlign="center"
      overflow="hidden"
      mx="auto"
      position="relative"
    >
      {/* Badge for Rating */}
      {rating && (
  <Badge
    position="absolute"
    top={2}
    right={2}
    fontSize="md" // Increase font size
    px={3} // Increase padding on the x-axis
    py={1} // Increase padding on the y-axis
    bg="gold" // Goldish background color
    color="black" // Text color for contrast
    borderRadius="full" // Optional: make the badge more circular
  >
    {rating}★
  </Badge>
)}

      
      {/* Image */}
      <Flex justify="center" mb={3}>
        <Image 
          src={img} 
          boxSize={imageSize} 
          objectFit="cover" 
          borderRadius="md" 
          fallbackSrc="https://via.placeholder.com/200"
        />
      </Flex>
      
      {/* Title and Brand */}
      {/* 
      
      {/* Price */}
      {/* <Text fontWeight="bold" fontSize="lg" mb={1}>
        {name.name}
      </Text> */}
      <Text fontSize="md" color="gray.600" mb={2}>
        {brand}
      </Text>
      <Text fontWeight="semibold" fontSize="xl" mb={2}>
        ₹{amount}
      </Text> 

      {/* Action Buttons */}
      <Flex direction="column" align="center" gap={2}>
        {login && (
          added ? (
            <Button
              colorScheme="red"
              variant="solid"
              leftIcon={<RemoveShoppingCartIcon />}
              onClick={handleRemoveFromCart}
              width="full"
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              colorScheme="yellow"
              variant="solid"
              leftIcon={<AddShoppingCartIcon />}
              onClick={handleAddToCart}
              width="full"
            >
              Add to Cart
            </Button>
          )
        )}
        
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={handleOpenPay}
          width="full"
        >
          Buy Now
        </Button>
      </Flex>
    </Box>
  );
};

export default Card;
