import Lottie from 'lottie-react';
import React from 'react';
import lottieAnimation from "../assets/lottie.json"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  const handleLogin = (event) =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
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
           <p>Don't Have Any Account? <Link className="text-red-500"to="/register">Register</Link>
           </p>
            </div>
            <button className="btn mt-4 text-white bg-teal-400 hover:bg-teal-200">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default LoginPage;
