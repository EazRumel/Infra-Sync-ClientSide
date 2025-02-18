import React from 'react';
import useAuth from '../../../hooks/useAuth';

const MyProfile = () => {
  const {user} = useAuth()
  return (
    <div>
    <h2 className="text-center text-4xl text-teal-500">User Profile</h2>
    <hr className="text-teal-400" />
      <div className="profile flex flex-col items-center justify-center">
      {
            user && user?.email ? 
            <div className="profile-info mx-10 my-10">
            <img src={user?.photoURL} alt="" />
            <h2 className="my-3 text-teal-500">User Name: {user?.displayName}</h2>
            <p className="text-teal-500">Email Address:{user?.email}</p>
            <p className="text-teal-500 py-2">Floor:None</p>
            <p className="text-teal-500 py-2">Block:None</p>
            <p className="text-teal-500 py-2">Room Number:None</p>
            </div> 
            
            : 
            <h2 className="text-center text-red-500">User not logged in!</h2>
      }</div>
    </div>
  );
};

export default MyProfile;