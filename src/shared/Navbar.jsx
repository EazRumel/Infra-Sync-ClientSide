import React, { useContext } from 'react';
import logo from "../assets/icons8-building-sci-fi-96.png"
import { CiLogin, CiLogout } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Tooltip as ReactTooltip } from "react-tooltip";
import { FaRegThumbsUp } from 'react-icons/fa';
import useAgreement from '../hooks/useAgreement';


const Navbar = () => {
  const [agreement] = useAgreement()
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
    .then(() =>{})
    .catch(error =>{
       //console.log(error.message)
    })
  }
  const links = <>
     <li className="text-teal-400 hover:text-teal-200">
     <Link to="/">Home</Link>
     </li>
     <li className="text-teal-400 hover:text-teal-200">
     <Link to="/apartment">Apartment</Link>
     </li>
     {/* <li>
     <Link to="/dashboard/myAgreement" className="btn">
  Inbox <btn className="badge badge-sm badge-secondary"><FaRegThumbsUp />{agreement.length}</btn>
</Link>
     </li> */}
  </>
  
  return (
    <div className="navbar max-w-screen-xl mx-auto z-10 bg-opacity-30 bg-base-100 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {
            links
          }
        </ul>
      </div>
     <div className="flex items-center">
     <img className="w-[50px]" src={logo} alt="" />
     <p>Infra<span className="text-teal-400">Sync</span></p>
     </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {
          links
        }
      </ul>
    </div>
    <div className="navbar-end">
    
  <div className="dropdown dropdown-start mx-16 mt-4 mb-7">
  <div tabIndex={0} role="button" className="btn m-1">
    {
      user && user.email ? <>
      <div className="w-8 rounded-x">
      <img className="w-10 rounded-full cursor-pointer mr-2" src={user?.photoURL} data-tooltip-content={user?.displayName || "No name available"} data-tooltip-id="user-tooltip" /> 


<ReactTooltip
id="user-tooltip"
place="bottom"
type="dark"
effect="solid"
/>
      </div>
</> : <>
<div className="w-8 rounded-x">
<img src="https://www.webiconio.com/_upload/255/image_255.svg" alt="" />
    </div>
</>
    }
  </div>
  <ul tabIndex={0} className="dropdown-content menu  z-1  p-2 shadow-sm">
  {
      user ?  <> 
     
      <li className="text-teal-400 hover:text-teal-200">
     <Link to="/dashboard">Dashboard</Link>
     </li>
      <button onClick={handleLogOut}><button className="btn btn-link text-teal-400 btn-accent">Logout <CiLogout /></button></button>
       </>
       :
       <>
       <div className="w-8 rounded-x">
    <p></p>
    
  </div>
       <li className="text-teal-400 hover:text-teal-200">
     <Link to="/dashboard">Dashboard</Link>
     </li>
       <Link to="/login"><button className="btn btn-link text-teal-400 btn-accent">Login <CiLogin /></button></Link></>
    }
  </ul>
</div>
   
    
    </div>
  </div>
  );
};

export default Navbar;
