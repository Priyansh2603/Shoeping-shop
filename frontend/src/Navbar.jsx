import React from 'react';
// import {Link as RLink} from "react"
import {
  Box,
  Flex,
  Spacer,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  baseTheme,
} from '@chakra-ui/react';
// import CustomLink from './Link';
import { ChevronDownIcon } from '@chakra-ui/icons';
import "./Navbar.css" 
const Navbar = () => {
  return (
    <Box bg="gray.800" py={3}>
      <Flex align="center" px={8}>
        <Text fontSize="xl" fontWeight="bold" color="whatsapp.100">
          Shoeping
        </Text>
        <Spacer />
        <Link  className="link" href="/" color="whatsapp.100" mr={4}>
          Home
        </Link>
        {/* <CustomLink/> */}
        <Link  className="link" href="/phone" color="whatsapp.100" mr={4}>
          Shop
        </Link>
        <Menu>
          <MenuButton as={Button} fontWeight={baseTheme} colorScheme="teal" color="whatsapp.100" variant="link" mr={2}>
            Categories
            <ChevronDownIcon ml={1} />
          </MenuButton>
          <MenuList bg="whatsapp.100" color="black" border="1px solid #e2e8f0">
            <MenuItem bg="whatsapp.100">Electronics</MenuItem>
            <MenuItem bg="whatsapp.100">Clothing</MenuItem>
            <MenuItem bg="whatsapp.100">Books</MenuItem>
            <MenuItem bg="whatsapp.100">Accessories</MenuItem>
          </MenuList>
        </Menu>
        <Link as="a" className="link" href="/shirt"  color="whatsapp.100" mr={4}>
          Shirt
        </Link>
        <Button colorScheme="teal" variant="solid">
          Sign In
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
