import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAgreement from '../../hooks/useAgreement';
import { FaHistory, FaHome, FaRegThumbsUp } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { GrAnnounce } from 'react-icons/gr';
import { MdAdminPanelSettings, MdOutlinePayment, MdRememberMe } from 'react-icons/md';
import { BsFillFileEarmarkRuledFill } from 'react-icons/bs';
import { RiCoupon3Line } from 'react-icons/ri';
import { CiHome } from 'react-icons/ci';
import { GoHomeFill } from 'react-icons/go';
import useAgreementPub from '../../hooks/userAgreementPub';

const Dashboard = () => {
  const isAdmin = true;

  const [agreement] = useAgreementPub()
  return (
    <div className="flex "> 
<div className="w-64 min-h-screen bg-teal-600">
 
  { 
    isAdmin ?
   <ul className="menu p-4">
   
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
  Agreement Requests ({agreement.length})
</NavLink>
     </li>
  <li>
     <NavLink to="/dashboard/userDashboard"><RiCoupon3Line />
  Manage Coupons
</NavLink>
     </li>
     <div className="divider"></div>
    </ul>
     : 
     <ul className="menu p-4">
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
    </ul>

  }


 
  
 
</div>
<div>
  <Outlet></Outlet>
</div>

    </div>
  );
};

export default Dashboard;