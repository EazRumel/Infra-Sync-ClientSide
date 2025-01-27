import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState } from 'react';
import { auth } from '../firebase/firebaseInit';


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
 
  const newUser  = (email,password) =>{
   return createUserWithEmailAndPassword(auth,email,password)
  }

  const signInUser =  (email,password) => {
   return signInWithEmailAndPassword(auth,email,password)
  }
   const authInfo = {
   user,
   loading,
   newUser,
   signInUser 
  }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;