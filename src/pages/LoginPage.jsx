import Lottie from 'lottie-react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import lottieAnimation from "../assets/lottie.json"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { auth } from '../firebase/firebaseInit';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import SocialLogin from '../shared/SocialLogin';


const LoginPage = () => {
   const captchaRef = useRef(null);
   const [disabled,setDisabled] = useState(true)
   const location = useLocation()
   console.log(location.state)
   const navigate = useNavigate()
   const from = location.state?.from.pathname || "/"
   const handleCaptcha = (event) =>{
    const captchaValue = captchaRef.current.value;
    //console.log(captchaValue)
    if(validateCaptcha(captchaValue)){
      setDisabled(false);
    }
  else{
    setDisabled(true);
  }
   }
  useEffect(()=>{
    loadCaptchaEnginge(6)
  },[])
  const {signInUser} = useContext(AuthContext);
  
  const handleLogin = (event) =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email,password)
    signInUser(email,password)
    .then(result =>{
      //console.log(result)
      Swal.fire({
        title: "Logged In Successfully!",
        icon: "success",
        draggable: true
      });
      navigate(from,{replace:true})
    })
    .catch(error=>{
          //console.log(error.message)
          Swal.fire({
            title: "Login Failed!",
            icon: "error",
            draggable: true
          });
          
        })
  }
  return (
    <div>
    <Helmet>
      <title>Login Page || IS</title>
    </Helmet>
    <h2 className="text-5xl mt-10 text-center text-teal-500">Login Page</h2>
    <hr  className="mt-10 text-teal-500"/>
      <div className="hero bg-base-200 min-h-screen">
    
    <div className="hero-content flex-col lg:flex-row-reverse">
      <Lottie animationData={lottieAnimation}>Lottie</Lottie>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body px-12 py-16">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="fieldset-label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <div>
          
           <div>
         <label className="label"> <LoadCanvasTemplate/></label>
           </div>
           
          <div>
          <input type="text" ref={captchaRef} name="captcha" placeholder="Type Your Captcha" className="input input-md mt-3" />
          <button onClick={handleCaptcha} className="btn btn-block mt-2 btn-xs">Verify</button>
          </div>
          <p>Don't Have Any Account? <Link className="text-red-500"to="/register">Register</Link>
          </p>
            </div>
            <button disabled={disabled} className="btn mt-4 text-white bg-teal-400 hover:bg-teal-200">Login</button>
           
          </form>
          {/* Google Login */}
          <SocialLogin></SocialLogin>
        </div>
      </div>      
    </div>

  </div>
    </div>
  );
};

export default LoginPage;
