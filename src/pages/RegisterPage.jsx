import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import lottieAnimation from "../assets/lottie2.json"
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';


const RegisterPage = () => {
  const {newUser} = useContext(AuthContext)
  const handleRegister = (event) =>{
    event.preventDefault();
    const form = event.target
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password)
  }
  return (
   <div>
   <Helmet>
        <title>Register Page || IS</title>
      </Helmet>
   <h2 className="text-5xl mt-10 text-center text-teal-500">Register Page</h2>
   <hr  className="mt-10 text-teal-500"/>
     <div className="hero bg-base-200 min-h-screen">
   
   <div className="hero-content flex-col lg:flex-row-reverse">
     <Lottie animationData={lottieAnimation}></Lottie>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
       <div className="card-body px-12 py-16">
         <form onSubmit={handleRegister} className="fieldset">
           <label className="fieldset-label">Email</label>
           <input name="email" type="email" className="input" placeholder="Email" />
           <label className="fieldset-label">Name</label>
           <input name="name" type="text" className="input" placeholder="Name" />
           <label className="fieldset-label">Photo URL</label>
           <input name="photo" type="text" className="input" placeholder="Photo URL" />
           <label className="fieldset-label">Password</label>
           <input name="password" type="password" className="input" placeholder="Password" />
           <div>
          <p>Already Have Any Account? <Link className="text-green-500" to="/login">Login</Link>
          </p>
           </div>
           <button className="btn text-white mt-4 bg-teal-400 hover:bg-teal-200">Register</button>
         </form>
       </div>
     </div>
   </div>
 </div>
   </div>
  );
};

export default RegisterPage;