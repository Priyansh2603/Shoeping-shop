// import logo from './logo.svg';
import './App.css';

import Home from "./Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Paysuccess from "./Paysuccess";
import axios from "axios";
import Shirt from "./Shirt.jsx";
import Navbar from "./Navbar";
import Phone from "./Phone.jsx";
import Register from "./Register.jsx";
import Login from './Login.jsx';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useEffect, useState } from 'react';
import Cart from './Cart.jsx'
import Error from './Error.jsx'
import ProfilePage from './profile/ProfilePage.jsx';
import GeneralView from './profile/GeneralView.jsx';
import AccountInformation from './profile/AccountInformation.jsx';
import OrderHistory from './profile/OrderHistory.jsx';
import ContactInformation from './profile/ContactInformation.jsx';
import Wishlist from './profile/Wishlist.jsx';
import Groom from './Groom.jsx';
import Footwear from './Footwear.jsx';
import ProductDetails from './ProductDetails.jsx';
import Cookies from 'js-cookie';
const AppState = createContext();
function App() {
  const [userdetails,setUserdetails] = useState({});
  const [login,setLogin] = useState(false);
  const [user,setUser] = useState(null);
  const [name,setName] = useState('');
  const [cart,setCart] = useState([]);
  const [UserId,setUserId] = useState('');
  const [item,setItem] = useState({});
  async function loadUser(){
    const id = Cookies.get("user")
    console.log(id);
    const strId = id.toString();
    
      try {
        const res = await axios.post("/auth/getuser", { user_id:strId }, {
          headers: {
            'Content-Type': 'application/json',
          },
            withCredentials: true,
        });
        console.log("Getting User!");
    
        if (!res.data) {
          loggedIn(false, '', '');
          // console.log("It must be false");
        } else {
          console.log("Logged In as:",res.data.name)
          toast.success(`Logged in Successfully as ${res.data.name}`,{theme:"dark",autoClose:2000,position:"top-center"});
          document.title=`Shoeping (${res.data.name})`
          loggedIn(true, res.data.name, res.data._id,res.data);
          // console.log("after pay ", res.data.name, " ", res.data._id);
        }
    
      } catch (error) {
        // Handle error (e.g., network error, server error)
        console.error("Error fetching user:", error.message);
        // Optionally, handle the error by calling loggedIn with appropriate parameters
        loggedIn(false, '', '',{});
      }
    
  }
  useEffect(()=>{
    loadUser();
  },[])
  function loggedIn(check,usrnm,id,details){
    setLogin(check);
    setName(usrnm);
    setUser(id);
    settingUserId(id);
    setUserdetails(details);
    console.log("LoggedIn ",id);
  }
  function settingUserId(id){
    setUserId(id.toString());
  }
  function logout(check,user,id,details){
    loggedIn(check,user,id,details);
    setUser(id);
    setUserId(user);
    setCart([]);
  }
  function addingCart(obj) {
    setCart((prevCart) => [...prevCart, obj]);
  }
  function removeCartItem(Item_id) {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== Item_id);
      return updatedCart;
    });
  }
  async function getCart(){
    // console.log("In get cart ",UserId)
    try{
      // const UserId = user.toString();
      const res = await axios.post("/cart/getcart",{UserId,name}, {
        headers: {
          'Content-Type': 'application/json',
        },
          withCredentials: true,
      });
      if(res.data==="Not found"){
        // console.log("Not Found")
        setCart([]);
        return;
      }
      const resCart = res.data.Items;
      // console.log("Response",resCart);
      setCart(resCart);
    }
    catch(e){
      // console.log("Getting Cart Error ",e);
    }
  }
  useEffect(() => {
    // console.log("Cart updated:", cart);
    console.log(item);
  }, [item]);
  useEffect(()=>{
    // console.log("Tried: ",name," ",login," ",UserId);
    getCart();
  },[name,user,login,UserId])
  const checkoutHandler=async(amount,model,Item_id) => {
    // console.log("From CheckoutHandler:",amount," ",model," ",Item_id)
    const { data: {key} } = await axios.get("/api/getkey", {
      headers: {
        'Content-Type': 'application/json',
      },
        withCredentials: true,
    });
    const { data: {order} } = await axios.post("/api/checkout",{amount,model,Item_id,user}, {
      headers: {
        'Content-Type': 'application/json',
      },
        withCredentials: true,
    });
    // console.log(data)
    // console.log(window)
    // console.log("Item_id:",Item_id)
    const option = {
        key: key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Shoeping",
        description: "Shoe web",
        image: "",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: `/api/paymentveri`,
        model:model,
        Item_id: Item_id,
        prefill: {
            name: "Priyansh Daksha",
            email: "ishudaksh2603@example.com",
            contact: "8791152142"
        },
        notes: {
            address: "Muzaffarnagar,India"
        },
        theme: {
            color: "#3399cc"
        } 
    };
    alert(model)
    const razor = new window.Razorpay(option);
    // document.getElementById('rzp-button1').onclick=function(e){
    razor.open()
    }
  return (
    <>
    <AppState.Provider value={{login,setItem, loggedIn,userdetails,checkoutHandler, logout,user, name,setUser,setName,cart,setCart,addingCart,removeCartItem}}>
     <Router>
      <ToastContainer/>
    <div style={{display:"absolute"}}><Navbar style={{display:"sticky"}}/></div>
    <div className="App" style={{alignItems : "center", justifyContent: "center",}}>
      <Routes>
        <Route path="/" element={<Home checkoutHandler= {checkoutHandler}/>} />
        <Route path="/shirt" element = {<Shirt checkoutHandler = {checkoutHandler}/>}/>
        <Route path="/phone" element = {<Phone checkoutHandler = {checkoutHandler}/>}/>
        <Route path="/grooming" element = {<Groom checkoutHandler = {checkoutHandler}/>}/>
        <Route path="/footwear" element = {<Footwear checkoutHandler = {checkoutHandler}/>}/>
        <Route path="/:type/itemview" element = {<ProductDetails product={item}/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/pay" element={<Paysuccess/>}/>
        {login?<Route path="/cart" element={<Cart/>}/>:<Route path="/cart" element={<Error/>} />}
        {login?<Route path="/profile" element={<ProfilePage/>}/>:<Route path="/cart" element={<Error/>} />}
        <Route path="*" element={<Error />} />
        <Route path="/profile/accountinfo" element={<AccountInformation/>}/>
        <Route path="/profile/orders" element={<OrderHistory/>}/>
        <Route path="/profile/contactInfo" element={<ContactInformation/>}/>
        <Route path="/profile/wishlist" element={<Wishlist/>}/>
      </Routes>
    </div>
     </Router>
     </AppState.Provider>
    </>
  );
}
export {AppState};
export default App;
