// ProfileHeader.js
import React, { useContext } from 'react';
import { AppState } from '../App';
const ProfileHeader = () => {
    const {name, lastname} = useContext(AppState).userdetails;
  return (
    <div>
      <h1>{name} {lastname}</h1>
    </div>
  );
};

export default ProfileHeader;
