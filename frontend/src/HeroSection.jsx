import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const HeroSection = ({ title, subtitle }) => {
  return (
    <Box
      position="relative"
      height="100vh"
      bgImage="url('https://media.istockphoto.com/id/1347626309/photo/latina-female-using-desktop-computer-with-clothing-online-web-store-to-choose-and-buy-clothes.webp?b=1&s=170667a&w=0&k=20&c=4kUNbsgz6Qx2yGHGw_z3KI814Ekc8xHmrByZ-0VsALM=')"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _after={{
        content: `''`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgGradient: 'linear(to-r, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3))',
        zIndex: 1,
      }}
    >
      <VStack
        spacing={8}
        maxW="2xl"
        textAlign="center"
        zIndex={2}
        px={6}
        color="white"
      >
        <Heading
          as={motion.h1}
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          fontWeight="extrabold"
          lineHeight="1.2"
          color="whiteAlpha.900" // Subtle off-white color for better contrast
          textShadow="0 4px 8px rgba(0, 0, 0, 0.6)"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {title}
        </Heading>
        <Text
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
          fontWeight="normal"
          maxW="2xl"
          mx="auto"
          lineHeight="1.8"
          color="whiteAlpha.700" // Slightly less opaque white for subtitle
          textShadow="0 2px 4px rgba(0, 0, 0, 0.4)"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {subtitle}
        </Text>
        <Button
          as={motion.button}
          bg="teal.500"
          color="white"
          size="lg"
          borderRadius="full"
          px={8}
          py={6}
          fontWeight="bold"
          _hover={{ bg: 'teal.600' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Shop Now
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroSection;
