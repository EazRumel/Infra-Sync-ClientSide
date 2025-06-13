import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseInit';
import usePublicAxios from '../hooks/usePublicAxios';




export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const axiosPublic = usePublicAxios();
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
      if(currentUser){
       const userInfo = {email:currentUser.email};
       axiosPublic.post("/jwt",userInfo)
       .then(response=>{
        if(response.data.token){
          localStorage.setItem("access-token",response.data.token)
        }
       })
      }
      else{
         localStorage.removeItem("access-token")
      }
    
     console.log(currentUser)
      setLoading(false)
    });
    return () => {
     return unsubscribe();
    }
  },[axiosPublic]) //used axiosPublic as dependency
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