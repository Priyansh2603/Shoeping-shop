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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useEffect, useState } from 'react';
import Cart from './Cart.jsx'
import Error from './Error.jsx'
const AppState = createContext();
function App() {
  const [login,setLogin] = useState(false);
  const [user,setUser] = useState(null);
  const [name,setName] = useState('');
  const [cart,setCart] = useState([]);
  const [UserId,setUserId] = useState('');
  function loggedIn(check,usrnm,id){
    setLogin(check);
    setName(usrnm);
    setUser(id);
    settingUserId(id);
    // console.log("LoggedIn ",check," ",usrnm);
  }
  function settingUserId(id){
    setUserId(id.toString());
  }
  function logout(check,user,id){
    loggedIn(check,user,id);
    setUser(id);
    setUserId(user);
    setCart([]);
  }
  function addingCart(obj) {
    setCart((prevCart) => [...prevCart, obj]);
  }
  function removeCartItem(Item_id) {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.Item_id !== Item_id);
      return updatedCart;
    });
  }
  async function getCart(){
    // console.log("In get cart ",UserId)
    try{
      // const UserId = user.toString();
      const res = await axios.post("http://localhost:8000/cart/getcart",{UserId,name});
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
  }, [cart]);
  useEffect(()=>{
    // console.log("Tried: ",name," ",login," ",UserId);
    getCart();
  },[name,user,login,UserId])
  const checkoutHandler=async(amount,model,Item_id) => {
    // console.log("From CheckoutHandler:",amount," ",model," ",Item_id)
    const { data: {key} } = await axios.get("http://localhost:8000/api/getkey");
    const { data: {order} } = await axios.post("http://localhost:8000/api/checkout",{amount,model,Item_id,user});
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
        callback_url: `http://localhost:8000/api/paymentveri`,
        model:model,
        Item_id: Item_id,
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9000090000"
        },
        notes: {
            address: "Razorpay Corporate Office"
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
    <AppState.Provider value={{login, loggedIn,checkoutHandler, logout,user, name,setUser,setName,cart,setCart,addingCart,removeCartItem}}>
     <Router>
      <ToastContainer/>
    <Navbar/>
    <div className="App" style={{alignItems : "center", justifyContent: "center",}}>
      <Routes>
        <Route path="/" element={<Home checkoutHandler= {checkoutHandler}/>} />
        <Route path="/shirt" element = {<Shirt checkoutHandler = {checkoutHandler}/>}/>
        <Route path="/phone" element = {<Phone checkoutHandler = {checkoutHandler}/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/pay" element={<Paysuccess/>}/>
        {login?<Route path="/cart" element={<Cart/>}/>:<Route path="/cart" element={<Error/>} />}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
     </Router>
     </AppState.Provider>
    </>
  );
}
export {AppState};
export default App;
