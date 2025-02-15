import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseInit';



export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
 
  const newUser  = (email,password) =>{
   return createUserWithEmailAndPassword(auth,email,password)
  }
  
  const sigInWithGoogle = () =>{
    const provider = new GoogleAuthProvider;
    return signInWithPopup(auth,provider)
  }

  const signInUser =  (email,password) => {
   return signInWithEmailAndPassword(auth,email,password)
  }
  const updateUserProfile = (updatedData) =>{
    return updateProfile(auth.currentUser,updatedData)
    
   }

  const logOut = () => {
  setLoading(false)
  return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser => {
      setUser(currentUser);
      // //console.log(currentUser)
      setLoading(false)
    });
    return () => {
     return unsubscribe();
    }
  },[])
   const authInfo = {
   user,
   setUser,
   loading,
   newUser,
   signInUser ,
   sigInWithGoogle,
   logOut,
   updateUserProfile
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