import React, { useEffect,useState } from 'react';
// import {Link as RLink} from "react"
import { FaShoppingCart } from 'react-icons/fa';
import logo from './img/Shoeping-logo.png';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Flex,
  Spacer,
  Text,
  Button,
  Container,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Link,
  useBreakpointValue ,
  MenuItem,
  baseTheme,
} from '@chakra-ui/react';
import MenuIcon from '@mui/icons-material/Menu';
import {useContext} from 'react';
import { AppState } from './App';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import CustomLink from './Link';
import {Link as RLink} from 'react-router-dom'
import { ChevronDownIcon,HamburgerIcon } from '@chakra-ui/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Navbar.css" 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  const history = useNavigate();
  const login = useContext(AppState).login;
  const name = useContext(AppState).name;
  const user = useContext(AppState).user;
  const loggedIn = useContext(AppState).loggedIn;
  const { cart } = useContext(AppState);
  const [log,setLog] = useState(login);
  const [isSticky, setSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(()=>{
    setLog(login);
  },[login]);
  async function logout(){
      try{
        const sendCart = await axios.post("/cart/addcart",{cart,UserId:user,name}, {
          headers: {
            'Content-Type': 'application/json',
          },
            withCredentials: true,
        });
        // console.log("Sent cart");
        if(sendCart){
          window.alert("Cart Added");
        }
      }catch(e){
        // console.log(e)
      }
      loggedIn(false,'','',{});
      toast.info("You've been Logged Out!",{theme:"dark",autoClose:2000,position:"top-center"})
      document.title=`Shoeping`;
      history("/")
  }
  return (
    <Box h='12vh' bg="gray.800" py={3} className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <Flex
        align="center"
        className='flx'
        direction={{ md: 'row' }}
      >
      <RLink to={''} ><img className='logo' src={logo}/></RLink>
      <Spacer className='space' style={{maxWidth:"1vw"}} />
      <Link as="RLink" className="link" display={{ base: 'none',md: 'block' }} color="whatsapp.100" ml={2} mr={2}>
          <RLink className="link" to={''}>
            Home
          </RLink>
        </Link>
        <Link as="RLink" className="link" display={{ base: 'none', md: 'block' }} color="whatsapp.100" ml={2} mr={2}>
          <RLink className="link" to={'#about'}>
            About
          </RLink>
        </Link>
        <div className="menu" display={{ base: 'none', md: 'block' }}>
          <Menu className="menu">
            <MenuButton
              colorScheme="teal"
              color="whatsapp.100"
              variant="link"
              className="menu-button"
              ml={2} mr={2}
              style={{ display: "flex", flexDirection: 'row' }}
            >
              <span style={{ display: 'flex', flexDirection: 'row' }}>
                <p> Categories </p>
                <p><ChevronDownIcon className='dropdown' /></p>
              </span>
            </MenuButton>
            <MenuList bg="whatsapp.100" color="black" border="1px solid #e2e8f0">
              {/* ... (menu items) */}
              <RLink className='menu' to={'footwear'}><MenuItem bg="whatsapp.100" color="black" >FootWear</MenuItem></RLink>
              <RLink className='menu' to={'phone'}><MenuItem bg="whatsapp.100" color="black" >Electronics</MenuItem></RLink>
              <RLink className='menu' to={'shirt'}><MenuItem bg="whatsapp.100" color="black" >Clothing</MenuItem></RLink>
              <RLink className='menu' to={'grooming'}><MenuItem bg="whatsapp.100" color="black" >Grooming</MenuItem></RLink>
            </MenuList>
          </Menu>
        </div>
      <Link as="RLink" className="link" display={{ base: 'none', md: 'block' }} color="whatsapp.100" ml={2} mr={2}>
          <RLink className="link" to={''}>
            Services
          </RLink>
        </Link>
        

        {/* <ListIcon  className={"list-icon"} /> */}
        {/* <div className='space2'><Spacer  display={{ base: 'none', md: 'block' }} /></div> */}

      < >
      {/* <span className="search"> */}
      <div className={'search'} display={{ base: 'none', md: 'flex' }} centerContent>
          <Input type="text" placeholder="Search..." mt='3' />
          <Button className={'searchIcon'} colorScheme="yellow" size={windowWidth>=768?28:30} h={windowWidth>=768?10:12} ml={'1.5'}  mt='3'>
            <SearchIcon/>
          </Button>
          </div>
      </>
        
      {log?(<><p style={{fontSize:{windowWidth}>=768?'25px':'10px', marginRight:"10px"}} className='welcome'>{windowWidth>768?"Welcome":""} {name}</p> 
      <RLink to={'cart'}>
        {/* <ShoppingCartIcon style={{color:"white",minWidth:"4vw",minHeight:"6vh",marginRight:"1vw"}}/> */}
        <div style={{ position: 'relative', marginRight:"1vw",display:{windowWidth}<=540&&"none"}}>
        {/* <ShoppingCartIcon style={{color:"white",width:"2vw",height:"6vh"}}/> */}
      <FaShoppingCart style={{
            marginLeft:{windowWidth}<768?"0.5vw":"0vw"}} size={30} className='cart'  />
      {cart.length > 0 && (
        <span
          style={{
            position: 'absolute',
            top: {windowWidth}>768?"-0.6vh":"-0.7vh",
            fontSize:{windowWidth}<768?"2vw":"10px",
            right: {windowWidth}>768?"-1vh":"-0.5vh",
            height: cart.length > 9 ? "2.4vh" : "2.3vh",
            width: cart.length > 9 ? "1.5vw" : "1.1vw",
            display:"flex",
            fontWeight:{windowWidth}>768?"bold":"normal",
            justfyContent:"center",
            alignItems:"center",
            background: 'red',
            borderRadius: '100%',
            padding:{windowWidth}<768?"0vh 0.6vh":"0 0.8vh",
            paddingBottom:{windowWidth}>768?"0.3vh":"",
            color: 'white',
          }}
        >
          {cart.length}
        </span>
      )}
    </div>
        </RLink>
      <RLink to={'profile'} style={{marginRight:"0.5vw",marginLeft:{windowWidth}<768?"6vw":"1vw"}}>
        <Button className='sign' colorScheme="teal" variant="solid" minWidth={6} ml={2}>
        <AccountCircleIcon style={{marginRight:"0.25rem"}}/>
        {windowWidth>768?"Profile":""}
        </Button></RLink></>):(<div className='log'><RLink to={'login'} style={{marginRight:"1vw"}}>
        <Button className='sign' colorScheme="teal" variant="solid" style={{minWidth:"6vw"}}>
          Login
        </Button>
      </RLink>
      <RLink to={'register'}>
        <Button className='sign' colorScheme='teal' variant="solid" style={{minWidth:"6vw"}}>
          Signup
        </Button>
      </RLink></div>)}
      {windowWidth < 768 ? (
          <Menu>  
          <MenuButton >
            <HamburgerIcon color='white' boxSize={6} ml={4}  />
          </MenuButton>
          <MenuList bg="whatsapp.100" color="black" border="1px solid #e2e8f0">
            {/* ... (menu items) */}
            <RLink className='menu' to={''}><MenuItem  color="black" >Home</MenuItem></RLink>
            <RLink className='menu' to={'about'}><MenuItem  color="black" >About</MenuItem></RLink>
            <RLink className='menu' to={'service'}><MenuItem  color="black" >Service</MenuItem></RLink>
            <RLink className='menu' to={'profile'}><MenuItem color="black" >Profile</MenuItem></RLink>
          </MenuList>
        </Menu>
        ):<></>}
    </Flex>
  </Box>
);
};


export default Navbar;
