import Lottie from 'lottie-react';
import React from 'react';
import lottieAnimation from "../assets/lottie.json"
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const handleLogin = (event) =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(email
      ,password
    )
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Lottie animationData={lottieAnimation}></Lottie>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="fieldset-label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div>
         <p>Don't Have Any Account? <Link className="text-red-500"to="/register">Register</Link>
         </p>
          </div>
          <button className="btn mt-4 bg-teal-400 hover:bg-teal-200">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default LoginPage;