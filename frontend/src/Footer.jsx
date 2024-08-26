import {
    Box,
    Text,
    Stack,
    Link,
    HStack,
    Input,
    Button,
    IconButton,
    VStack,
    SimpleGrid,
    Avatar
  } from "@chakra-ui/react";
  import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
  import { motion } from "framer-motion";
  
  const MotionIconButton = motion(IconButton);
  
  const Footer = () => {
    return (
      <Box
        bg="rgba(255, 255, 255, 0.85)"
        backdropFilter="blur(15px)"
        py={16}
        px={6}
        borderTop="1px solid rgba(0, 0, 0, 0.1)"
        boxShadow="0 -2px 10px rgba(0, 0, 0, 0.05)"
      >
        <Stack spacing={10} maxW="7xl" mx="auto" align="center">
          {/* Join Our Community Section */}
          <VStack spacing={4} textAlign="center" maxW="lg">
            <Text fontSize="3xl" fontWeight="extrabold" color="teal.700" letterSpacing="tight">
              Join Our Community
            </Text>
            <Text fontSize="lg" color="gray.600" lineHeight="tall">
              Stay updated with our latest offers and news. Subscribe to our newsletter!
            </Text>
            <HStack>
              <Input
                placeholder="Enter your email"
                size="lg"
                borderRadius="full"
                bg="white"
                shadow="sm"
                _placeholder={{ color: "gray.400" }}
              />
              <Button colorScheme="teal" size="lg" borderRadius="full" px={8} _hover={{ bg: "teal.600" }}>
                Subscribe
              </Button>
            </HStack>
          </VStack>
  
          {/* Quick Links Section */}
          <SimpleGrid columns={[1, 2, 4]} spacing={10} width="100%" textAlign="left" py={8}>
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold" color="teal.700">
                Customer Service
              </Text>
              <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>Contact Us</Link>
              <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>FAQ</Link>
              <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>Shipping & Returns</Link>
              <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>Track Your Order</Link>
            </VStack>
  
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold" color="teal.700">
                Information
              </Text>
              <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>About Us</Link>
              <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>Careers</Link>
              <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>Privacy Policy</Link>
              <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>Terms & Conditions</Link>
            </VStack>
  
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold" color="teal.700">
                My Account
              </Text>
              <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>Login</Link>
              <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>My Orders</Link>
              <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>Wishlist</Link>
              <Link href="#" color="gray.600" _hover={{ color: "teal.500" }}>Gift Cards</Link>
            </VStack>
  
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold" color="teal.700">
                Contact Us
              </Text>
              <Text color="gray.600">Email: priyansh262003@gmail.com</Text>
              <Text color="gray.600">Phone: +91 879 XXX XXXX</Text>
              <Text color="gray.600">Address: 123 Main St, Anytown, USA</Text>
            </VStack>
          </SimpleGrid>
  
          {/* Social Media Icons */}
          <HStack spacing={8} justifyContent="center">
            <MotionIconButton
              as="a"
              href="https://facebook.com"
              icon={<FaFacebook />}
              color="teal.600"
              bg="transparent"
              _hover={{ color: "teal.400" }}
              aria-label="Facebook"
              whileHover={{ scale: 1.2 }}
              size="lg"
            />
            <MotionIconButton
              as="a"
              href="https://twitter.com"
              icon={<FaTwitter />}
              color="teal.600"
              bg="transparent"
              _hover={{ color: "teal.400" }}
              aria-label="Twitter"
              whileHover={{ scale: 1.2 }}
              size="lg"
            />
            <MotionIconButton
              as="a"
              href="https://instagram.com"
              icon={<FaInstagram />}
              color="teal.600"
              bg="transparent"
              _hover={{ color: "teal.400" }}
              aria-label="Instagram"
              whileHover={{ scale: 1.2 }}
              size="lg"
            />
          </HStack>
          {/* Copyright Text */}
          <Text fontSize="sm" color="gray.500">
          <Avatar src="http://localhost:3000/static/media/shoeping-logo.1cddbf3dd454ce2b01e8.png" size={'xs'}/> © {new Date().getFullYear()}  Shoeping. All rights reserved.
          </Text>
        </Stack>
      </Box>
    );
  };
  
  export default Footer;
  