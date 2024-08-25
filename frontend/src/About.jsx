// AboutSection.js
import React from 'react';
import { Box, Heading, Text, Image, VStack, Flex, HStack, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import logo from "./"
const AboutSection = () => {
  const sectionPadding = useBreakpointValue({ base: '4vw', md: '2vw 5vh' });
  const borderRadius = '16px';
  const boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';

  return (
    <Box padding={sectionPadding} bg="linear-gradient(135deg, #f3f4f6, #e5e7eb)" color="gray.800">
      <VStack spacing={8} mb={12}>
        {/* Logo */}
        {/* <Image
          src="https://your-logo-url.png" // Replace with your logo URL
          alt="Shoeping Logo"
          boxSize="150px"
          objectFit="contain"
          mb={6}
          borderRadius="full"
        />
         */}
        <Heading
          as="h1"
          size="2xl"
          bgGradient="linear(to-r, teal.300, blue.500)"
          bgClip="text"
          fontWeight="bold"
          textAlign="center"
          mb={6}
        >
          About Us
        </Heading>
        
        {/* <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="center"
          gap={10}
          wrap="wrap"
        >
          <Box
            border={`2px solid #e5e7eb`}
            p={8}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            bg="white"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.02)' }}
            flex="1"
            maxW="2xl"
          >
            <Heading className="flex justify-center self-center mx-auto" size="lg" mb={4} color="teal.600">About Shoeping</Heading>
            <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" gap={6}>
            <Image
            className="flex items-center self-center"
          src="https://shoeping-shop.vercel.app/static/media/Shoeping-logo.1cddbf3dd454ce2b01e8.png" // Replace with your logo URL
          alt="Shoeping Logo"
          boxSize="160px"
          objectFit="fill"
          borderRadius="full"
        />
            <Box>
            <Text fontSize="lg" mb={4}>
              Welcome to Shoeping! We're dedicated to providing you with the best online shopping experience.
              Our platform offers a wide range of products from fashion to essentials, designed for convenience and quality.
            </Text>
            <Text fontSize="lg">
              Discover our carefully curated selection and enjoy a seamless shopping experience. Thank you for choosing Shoeping!
            </Text>
            </Box>
            </Flex>
          </Box>

          <Box
            border={`2px solid #e5e7eb`}
            p={8}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            bg="white"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.02)' }}
            flex="1"
            maxW="lg"
          >
            <Heading size="lg" mb={4} color="teal.600">Meet the Developer</Heading>
            <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" gap={6}>
              <Image
                src="https://your-image-url.jpg" // Replace with the developer’s profile image URL
                alt="Developer Profile"
                boxSize="120px"
                objectFit="cover"
                borderRadius="full"
                border={`2px solid #e5e7eb`}
              />
              <VStack align="start" spacing={4} textAlign={{ base: 'center', md: 'left' }}>
                <Text fontSize="lg">
                  Hi, I'm the developer behind Shoeping! I strive to create engaging digital experiences and ensure our platform meets your shopping needs effectively.
                </Text>
                <HStack spacing={6} justify="center">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Icon as={FaTwitter} boxSize={8} color="blue.400" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Icon as={FaLinkedin} boxSize={8} color="blue.600" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Icon as={FaInstagram} boxSize={8} color="pink.400" />
                  </a>
                  <a href="mailto:developer@example.com">
                    <Icon as={FaEnvelope} boxSize={8} color="teal.500" />
                  </a>
                </HStack>
              </VStack>
            </Flex>
          </Box>
        </Flex> */}
      </VStack>
    </Box>
  );
};

export default AboutSection;
