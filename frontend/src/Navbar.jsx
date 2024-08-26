import React, { useEffect, useState, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import logo from './shoeping-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Flex,
  Spacer,
  Text,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  useDisclosure,
  Avatar,
} from '@chakra-ui/react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppState } from './App';
import { Link as RLink } from 'react-router-dom';
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const history = useNavigate();
  const { login, name, user, userdetails, loggedIn, cart } = useContext(AppState);
  const [isSticky, setSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('https://shoeping.onrender.com/cart/addcart', { cart, UserId: user, name });
      toast.info("You've been Logged Out!", { theme: 'dark', autoClose: 2000, position: 'top-center' });
      loggedIn(false, '', {}, {});
      history('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      className="mb-28"
      bg={ 'gray.50' }
      w={'100vw'}
      boxShadow={isSticky ? 'md' : 'none'}
      p={4}
      zIndex={1000}
    >
      <Flex align="center" justify="space-between" wrap="wrap">
        <RLink to="/">
          <img src={logo} alt="Shoeping Logo" className="logo" />
        </RLink>
        {/* <Spacer /> */}
        <Flex
          display={{ base: 'none', md: 'flex' }}
          align="center"
          gap={4}
          color={'black'}
          style={{color:'black'}}
        >
          <RLink to="/" className="nav-link" style={{color:'black'}}>Home</RLink>
          <RLink to="#about" className="nav-link" style={{color:'black'}}>About</RLink>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="transparent" color="black" className="nav-link">
              Categories
            </MenuButton>
            <MenuList bg="gray.100" color="black">
              <RLink to="footwear" style={{color:'black'}} className="menu-item">
                <MenuItem>Footwear</MenuItem>
              </RLink>
              <RLink to="phone" style={{color:'black'}} className="menu-item">
                <MenuItem>Electronics</MenuItem>
              </RLink>
              <RLink to="shirt" style={{color:'black'}} className="menu-item">
                <MenuItem>Clothing</MenuItem>
              </RLink>
              <RLink to="grooming" style={{color:'black'}} className="menu-item">
                <MenuItem>Grooming</MenuItem>
              </RLink>
            </MenuList>
          </Menu>
          <RLink to="/services" className="nav-link"  style={{color:'black'}}>Services</RLink>
          <Flex align="center" style={{display:'flex', alignItems: 'center'}} justify="center" className="flex justify-center items-center">
            <Input placeholder="Search..." display={{ base: 'none', md: 'block' }} />
            <Button ml={2} colorScheme="yellow" size="md">
              <SearchIcon />
            </Button>
          </Flex>
          {login ? (
            <Flex align="center">
              {/* <Text display={'flex'} alignItems={'center'} gap={1} fontSize={{ base: 'sm', md: 'lg' }} mr={2}><Avatar size={'sm'} name={name} src={user.picture}/>{name}</Text> */}
              <RLink to="/cart">
                <div style={{ position: 'relative', marginRight: '1vw' }}>
                  <FaShoppingCart color='black' size={30} className="cart-icon" />
                  {cart.length > 0 && (
                    <span className="cart-badge">{cart.length}</span>
                  )}
                </div>
              </RLink>
              {console.log(user)}
              <RLink to="/profile">
                <Button colorScheme="yellow" variant="solid" paddingY={2} >
                  {windowWidth > 768 ? <Text display={'flex'} alignItems={'center'} gap={1} fontSize={{ base: 'sm', md: 'lg' }} mr={2}><Avatar size={'sm'} name={name} src={userdetails.picture}/>{name}</Text> : <Avatar size={'sm'} name={name} src={userdetails.picture}/>}
                </Button>
              </RLink>
              <Button colorScheme="teal" variant="solid" ml={2} onClick={handleLogout}>
                Logout
              </Button>
            </Flex>
          ) : (
            <Flex align="center">
              <RLink to="/login">
                <Button colorScheme="teal" variant="solid">Login</Button>
              </RLink>
              <RLink to="/register">
                <Button colorScheme="teal" variant="solid" ml={2}>Signup</Button>
              </RLink>
            </Flex>
          )}
        </Flex>
        <Flex display={{ base: 'flex', md: 'none' }} sx={{color:'white'}}>
          <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <MenuButton as={Button} colorScheme="teal" variant="outline" rightIcon={<HamburgerIcon />}>
              Menu
            </MenuButton>
            <MenuList bg="gray.100" color="black">
              <RLink to="/"><MenuItem>Home</MenuItem></RLink>
              <RLink to="#about"> <MenuItem>About</MenuItem></RLink>
              <RLink to="/services" ><MenuItem>Services</MenuItem></RLink>
              {login&&<RLink to="/profile" ><MenuItem><Text display={'flex'} alignItems={'center'} gap={1} fontSize={{ base: 'sm', md: 'lg' }} mr={2}>{name}<Avatar size={'sm'} name={name} src={userdetails.picture}/></Text></MenuItem></RLink>}
              <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="transparent" color="black" className="nav-link">
              Categories
            </MenuButton>
            <MenuList bg="gray.100" color="black">
              <RLink to="footwear" style={{color:'black'}} className="menu-item">
                <MenuItem>Footwear</MenuItem>
              </RLink>
              <RLink to="phone" style={{color:'black'}} className="menu-item">
                <MenuItem>Electronics</MenuItem>
              </RLink>
              <RLink to="shirt" style={{color:'black'}} className="menu-item">
                <MenuItem>Clothing</MenuItem>
              </RLink>
              <RLink to="grooming" style={{color:'black'}} className="menu-item">
                <MenuItem>Grooming</MenuItem>
              </RLink>
            </MenuList>
          </Menu>
          <MenuList>{!login&&<><RLink to="/login">
                <Button colorScheme="teal" variant="solid">Login</Button>
              </RLink>
              <RLink to="/register">
                <Button colorScheme="teal" variant="solid" ml={2}>Signup</Button>
              </RLink></>}</MenuList>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <ToastContainer />
    </Box>
  );
};

export default Navbar;
