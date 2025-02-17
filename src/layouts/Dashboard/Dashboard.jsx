import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAgreement from '../../hooks/useAgreement';
import { FaHome, FaRegThumbsUp } from 'react-icons/fa';


const Dashboard = () => {
  const [agreement] = useAgreement()
  return (
    <div className="flex "> 
<div className="w-64 min-h-screen bg-green-200">
 <ul className="menu p-4">
  <li>
  <NavLink to="/"><FaHome />My Home</NavLink>
  </li>
  <li>
  <li>
     <NavLink to="/dashboard/myAgreement" className="btn">
  Inbox <btn className="badge badge-sm badge-secondary"><FaRegThumbsUp />{agreement.length}</btn>
</NavLink>
     </li>
  </li>
 </ul>
</div>
<div>
  <Outlet></Outlet>
</div>

    </div>
  );
};

export default Dashboard;