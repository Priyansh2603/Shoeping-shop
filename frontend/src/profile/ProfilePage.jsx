// ProfilePage.js

import React, { useContext } from 'react';
import ProfileHeader from './ProfileHeader';
import AccountInformation from './AccountInformation';
import ContactInformation from './ContactInformation';
import OrderHistory from './OrderHistory';
import Wishlist from './Wishlist'; // Create a Wishlist component
// import Preferences from './Preferences'; // Create a Preferences component
// import ReviewsAndRatings from './ReviewsAndRatings'; // Create a ReviewsAndRatings component
// import ReturnsAndRefunds from './ReturnsAndRefunds'; // Create a ReturnsAndRefunds component
// import SecuritySettings from './SecuritySettings'; // Create a SecuritySettings component
// import AccountActivity from './AccountActivity'; // Create an AccountActivity component
// import RewardsAndLoyalty from './RewardsAndLoyalty'; // Create a RewardsAndLoyalty component
// import Settings from './Settings'; // Create a Settings component
// import HelpAndSupport from './HelpAndSupport'; // Create a HelpAndSupport component
// import LogoutButton from './LogoutButton'; // Create a LogoutButton component
import './ProfilePage.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { AppState } from '../App';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Navbar.css" 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
const ProfilePage = () => {
    const history = useNavigate();
  const login = useContext(AppState).login;
  const name = useContext(AppState).name;
  const user = useContext(AppState).user;
  const loggedIn = useContext(AppState).loggedIn;
  const { cart } = useContext(AppState);
    async function logout(){
      console.log(cart);
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
          console.log("Error Logout!",e);
        }
        loggedIn(false,'','',{});
        localStorage.setItem("userId",'');
        Cookies.set("user",'');
        toast.info("You've been Logged Out!",{theme:"dark",autoClose:2000,position:"top-center"})
        document.title=`Shoeping`;
        history("/")
    }
  return (
    <div className="profile-container">
      <ProfileHeader />
      <div className="profile-content">
        <div className="profile-section">
        <Link to={'accountinfo'}>Account Information</Link>
        </div>

        <div className="profile-section">
        <Link to={'contactInfo'}>Contact Information</Link>
        </div>
        <div className="profile-section">
        <Link to={'/cart'}>Cart Details</Link>
        </div>
        <div className="profile-section">
        <Link to={'contactInfo'}>Contact Information</Link>
        </div>
        <div className="profile-section">
        <Link to={'contactInfo'}>Contact Information</Link>
        </div>
        <div className="profile-section">
        <Link to={'contactInfo'}>Contact Information</Link>
        </div>

        <div className="profile-section">
          <Link to='orders'>Order History</Link>
        </div>

        <div className="profile-section">
          <Link to={'wishlist'}>Wishlist</Link>
        </div>

        {/* <div className="profile-section">
          <h2>Preferences</h2>
          <Preferences />
        </div>

        <div className="profile-section">
          <h2>Reviews and Ratings</h2>
          <ReviewsAndRatings />
        </div>

        <div className="profile-section">
          <h2>Returns and Refunds</h2>
          <ReturnsAndRefunds />
        </div>

        <div className="profile-section">
          <h2>Security Settings</h2>
          <SecuritySettings />
        </div>

        <div className="profile-section">
          <h2>Account Activity</h2>
          <AccountActivity />
        </div>

        <div className="profile-section">
          <h2>Rewards and Loyalty</h2>
          <RewardsAndLoyalty />
        </div>

        <div className="profile-section">
          <h2>Settings</h2>
          <Settings />
        </div>

        <div className="profile-section">
          <h2>Help and Support</h2>
          <HelpAndSupport />
        </div> */}

        <div className="profile-section">
          {/* This is just a button example; customize it based on your logout functionality */}
          <Link ><button><h2 onClick={logout}>Logout</h2></button></Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
