// AccountInformation.js

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../App';
import './AccountInformation.css';
import ProfileHeader from './ProfileHeader';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
const AccountInformation = () => {
    const { name, lastname, email, picture, gender, age, interests,bio } = useContext(AppState).userdetails;
    const {loggedIn} = useContext(AppState);
    const {user} = useContext(AppState);
    const [isEditing, setIsEditing] = useState(false);
    const [editedGender, setEditedGender] = useState(gender);
    const [editedAge, setEditedAge] = useState(age);
  const [editedBio, setEditedBio] = useState(bio);
    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };
    const handleSaveChanges = async() => {
        // Implement logic to save changes to the server or state
        console.log(user);
        const response = await axios.patch(`http://localhost:8000/auth/update/${user}`, {
            userId : user,
            gender: editedGender,
            age: editedAge,
            bio: editedBio,
            // Add other fields as needed
          });
          if(response.data===false){
            toast.error("Error Upadating Profile! ",{theme:"dark",autoClose:2000,position:"top-center"});
          }
          else{
            console.log(response.data);
            toast.success("Edited Profile Successfully!",{theme:"dark",autoClose:2000,position:"top-center"});
          }
        setIsEditing(false);
    };
    return (
        // <div className='account-page-container'>
        <>
            <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f1f3f6' }}><ProfileHeader /></div>
            <div className="account-information-container">
                <div className="flipkart-card">
                    <div className="card-header">
                        <img className="profile-picture" src={picture} alt={`${name} ${lastname}`} />
                        <div className="bio-container">
                            {isEditing ? (
                                <textarea
                                    rows="3"
                                    placeholder="Edit Bio..."
                                    value={editedBio}
                                    onChange={(e) => setEditedBio(e.target.value)}
                                />
                            ) : (
                                <p className="bio">{editedBio}</p>
                            )}
                        </div>
                    </div>
                    <div className="card-details">
                        <h2>{`${name} ${lastname}`}</h2>
                        <p className="email">{email}</p>
                        {isEditing ? (
                            <>
                                <label>Edit Gender:</label>
                                <input type="text" value={editedGender} onChange={(e) => setEditedGender(e.target.value)} />
                                <label>Edit Age:</label>
                                <input type="number" value={editedAge} onChange={(e) => setEditedAge(e.target.value)} />
                                {/* Add other editable fields */}
                            </>
                        ) : (
                            <>
                                <p>{editedGender}, {editedAge} years old</p>
                                {/* Display other non-editable fields */}
                            </>
                        )}
                        <div className="interests">
                            <h3>Interests:</h3>
                            <ul>
                                {interests.map((interest, index) => (
                                    <li key={index}>{interest}</li>
                                ))}
                            </ul>
                        </div>
                        
                            {isEditing ? <button className="edit-button" onClick={handleSaveChanges}>Update Changes </button>: <button className="edit-button" onClick={handleEditClick}>Edit Profile</button>}
                        
                        <button className="edit-button" >
                            <Link to={'/profile'}>Back</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
        //  </div>
    );
};

export default AccountInformation;
