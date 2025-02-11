import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../shared/Loading';

const PrivateRoute = ({children}) => {
  const location = useLocation()

  const {user,loading} = useContext(AuthContext)
  if(loading){
    return <Loading></Loading>
  }
  if(user){
    return children
  }
  return (
    <div>
      <Navigate to="/login" state={{from:location}} replace> 
</Navigate>
    </div>
  );
};

export default PrivateRoute;