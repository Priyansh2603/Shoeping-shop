import React, { useEffect,useState } from 'react';
// import {Link as RLink} from "react"
import { FaShoppingCart } from 'react-icons/fa';
import logo from './img/Shoeping-logo.png'
import {
  Box,
  Flex,
  Spacer,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Link,
  MenuItem,
  baseTheme,
} from '@chakra-ui/react';
import {useContext} from 'react';
import { AppState } from './App';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import CustomLink from './Link';
import {Link as RLink} from 'react-router-dom'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Navbar.css" 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const history = useNavigate();
  const login = useContext(AppState).login;
  const name = useContext(AppState).name;
  const user = useContext(AppState).user;
  const loggedIn = useContext(AppState).loggedIn;
  const { cart } = useContext(AppState);
  const [log,setLog] = useState(login);
  useEffect(()=>{
    setLog(login);
  },[login]);
  async function logout(){
      try{
        const sendCart = await axios.post("http://localhost:8000/cart/addcart",{cart,UserId:user,name});
        if(sendCart){
          window.alert("Cart Added");
        }
      }catch(e){
        console.log(e)
      }
      loggedIn(false,'',null);
      toast.info("You've been Logged Out!",{theme:"dark",autoClose:2000,position:"top-center"})
      document.title=`Shoeping`;
      history("/")
  }
  return (
    <Box bg="gray.800" py={3} >
    <Flex align="center" px={8}>
      <RLink to={''}><img style={{minwidth:"4.8vw",maxHeight:"4vw",marginRight:"1vw",marginLeft:"2vw"}} src={logo}/></RLink>
      <Spacer style={{maxWidth:"1vw"}} />
      <Link as="RLink" className="link"  color="whatsapp.100" mr={4}>
        <RLink className="link" to={''}>
      Home
        </RLink>
        </Link>
      <Link as="RLink" className="link"  color="whatsapp.100" mr={4}>
        <RLink className="link" to={'phone'}>

        Electronics
        </RLink>
      </Link>
      <Menu>
        <MenuButton
          fontWeight="bold"
          colorScheme="teal"
          color="whatsapp.100"
          variant="link"
          className="menu-button"
          mr={2}
        >
          Categories
          <ChevronDownIcon ml={1} />
        </MenuButton>
        <MenuList bg="whatsapp.100" color="black" border="1px solid #e2e8f0">
          {/* ... (menu items) */}
          <MenuItem bg="whatsapp.100" color="black"  >First</MenuItem>
          <MenuItem bg="whatsapp.100" color="black" >First</MenuItem>
          <MenuItem bg="whatsapp.100" color="black" >First</MenuItem>
          <MenuItem bg="whatsapp.100" color="black" >First</MenuItem>
        </MenuList>
      </Menu>
      <Link as="RLink" className="link"  color="whatsapp.100" mr={4}>
        <RLink className="link" to={'shirt'}>
          Clothing
        </RLink>
        </Link>
      <Spacer style={{maxWidth:"60vw"}} />
      {log?(<><p style={{color:"white",marginRight:"1vw"}}>Welcome {name} !</p> 
      <RLink to={'cart'}>
        {/* <ShoppingCartIcon style={{color:"white",minWidth:"4vw",minHeight:"6vh",marginRight:"1vw"}}/> */}
        <div style={{ position: 'relative', marginRight:"2vw"}}>
      <FaShoppingCart size={30} color="white" mr="2vw" />
      {cart.length > 0 && (
        <span
          style={{
            position: 'absolute',
            top: "-0.8vh",
            fontSize:"0.8vw",
            right: "-1vh",
            height: cart.length > 9 ? "2.4vh" : "2.3vh",
            width: cart.length > 9 ? "1.5vw" : "1.1vw",
            display:"flex",
            fontWeight:"bold",
            justfyContent:"center",
            alignItems:"center",
            background: 'red',
            borderRadius: '100%',
            padding:"0vh 0.6vh",
            paddingBottom:"0.3vh",
            color: 'white',
          }}
        >
          {cart.length}
        </span>
      )}
    </div>
        </RLink>
      <RLink style={{marginRight:"1vw"}}>
        <Button colorScheme="teal" variant="solid" onClick={logout} style={{minWidth:"6vw"}}>
          Logout
        </Button></RLink></>):(<><RLink to={'login'} style={{marginRight:"1vw"}}>
        <Button colorScheme="teal" variant="solid" style={{minWidth:"6vw"}}>
          Login
        </Button>
      </RLink>
      <RLink to={'register'}>
        <Button colorScheme='teal' variant="solid" style={{minWidth:"6vw"}}>
          Signup
        </Button>
      </RLink></>)}
    </Flex>
  </Box>
);
};


export default Navbar;
