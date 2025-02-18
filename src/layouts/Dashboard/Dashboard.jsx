import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAgreement from '../../hooks/useAgreement';
import { FaHome, FaRegThumbsUp } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { GrAnnounce } from 'react-icons/gr';


const Dashboard = () => {
  const [agreement] = useAgreement()
  return (
    <div className="flex "> 
<div className="w-64 min-h-screen bg-teal-600">
 <ul className="menu p-4">
  <li>
  <NavLink to="/"><FaHome />My Home</NavLink>
  </li>
  <li>
  <li>
     <NavLink to="/dashboard/userDashboard"><CgProfile />
  My Profile
</NavLink>
     </li>
  <li>
     <NavLink to="/dashboard/userDashboard"><GrAnnounce />
  Announcements
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