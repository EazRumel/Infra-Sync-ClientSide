import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAgreement from '../../hooks/useAgreement';
import { FaHome, FaRegThumbsUp } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { GrAnnounce } from 'react-icons/gr';
import { MdAdminPanelSettings, MdRememberMe } from 'react-icons/md';
import { BsFillFileEarmarkRuledFill } from 'react-icons/bs';
import { RiCoupon3Line } from 'react-icons/ri';
import { CiHome } from 'react-icons/ci';
import { GoHomeFill } from 'react-icons/go';

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="flex "> 
<div className="w-64 min-h-screen bg-teal-600">
 <ul className="menu p-4">

  { 
    isAdmin ? <>
   
    <li>
  <NavLink to="/"><MdAdminPanelSettings />Admin Profile</NavLink>
  </li>
  <li>
     <NavLink to="/dashboard/manageMembers"><MdRememberMe/>Manage Members</NavLink>
     </li>
  <li>
     <NavLink to="/dashboard/userDashboard"><GrAnnounce />
  Make Announcements
</NavLink>
     </li>
  <li>
     <NavLink to="/dashboard/agreementRequest"><BsFillFileEarmarkRuledFill />
  Agreement Requests
</NavLink>
     </li>
  <li>
     <NavLink to="/dashboard/userDashboard"><RiCoupon3Line />
  Manage Coupons
</NavLink>
     </li>
     <div className="divider"></div>
     <li><NavLink to="/"><GoHomeFill />Home</NavLink></li>
    </>
     : 
     <>
    <li>
  <NavLink to="/"><FaHome />My Home</NavLink>
  </li>
  <li>
     <NavLink to="/dashboard/userDashboard"><CgProfile />My Profile</NavLink>
     </li>
  <li>
     <NavLink to="/dashboard/userDashboard"><GrAnnounce />
  Announcements
</NavLink>
     </li>
     <div className="divider"></div>
    </>
  }

 </ul>
</div>
<div>
  <Outlet></Outlet>
</div>

    </div>
  );
};

export default Dashboard;