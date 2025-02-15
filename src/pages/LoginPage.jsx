import Lottie from 'lottie-react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import lottieAnimation from "../assets/lottie.json"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { auth } from '../firebase/firebaseInit';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


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
  const {signInUser,sigInWithGoogle} = useContext(AuthContext);
  const handleGoogleLogin = () =>{
    sigInWithGoogle(auth)
    .then(result =>{
      //console.log(result);
      Swal.fire({
        title: "Logged In Successfully With Google!",
        icon: "success",
        draggable: true
      })
    })
  }
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
          <button disabled={disabled} onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
        </div>
      </div>      
    </div>

  </div>
    </div>
  );
};

export default LoginPage;
