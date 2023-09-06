// import logo from './logo.svg';
// import './App.css';

import Home from "./Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Paysuccess from "./Paysuccess";
import axios from "axios";
import Shirt from "./Shirt.jsx";
import Navbar from "./Navbar";
import Phone from "./Phone.jsx";
function App() {
  const checkoutHandler=async(amount,model,Item_id) => {
    const { data: {key} } = await axios.get("http://localhost:8000/api/getkey");
    const { data: {order} } = await axios.post("http://localhost:8000/api/checkout",{amount,model,Item_id});
    // console.log(data)
    // console.log(window)
    console.log(order)
    const option = {
        key: key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Shoeping",
        description: "Shoe web",
        image: "",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: `http://localhost:8000/api/paymentveri?item=${model}`,
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
    <Navbar/>
    <div className="App" style={{alignItems : "center", justifyContent: "center",}}>
     <Router>
      <Routes>
        <Route path="/" element={<Home checkoutHandler= {checkoutHandler}/>} />
        <Route path="/shirt" element = {<Shirt checkoutHandler = {checkoutHandler}/>}/>
        <Route path="/phone" element = {<Phone checkoutHandler = {checkoutHandler}/>}/>
        <Route path="/paysuccess" element={<Paysuccess/>}/>
      </Routes>
     </Router>
    </div>
    </>
  );
}

export default App;
