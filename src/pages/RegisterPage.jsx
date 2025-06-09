import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import lottieAnimation from "../assets/lottie2.json"
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import usePublicAxios from '../hooks/usePublicAxios';
import SocialLogin from '../shared/SocialLogin';
// import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';



const RegisterPage = () => {
const [errorMessage,setErrorMessage] = useState("")
const axiosPublic = usePublicAxios()
//console.log(errorMessage)
  const { newUser, updateUserProfile, setUser } = useAuth()
  const navigate = useNavigate()
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(name, photo, email, password) 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    if(!passwordRegex.test(password)){
      setErrorMessage("Password must have one uppercase one lower case one character")
      return;
    }
    setErrorMessage("")
    newUser(email, password)
    
      .then(result => {
        // const user = result.user;
        // setUser(user);
        console.log(result)
        
        updateUserProfile({ displayName: name, photoURL: photo })
        .then(()=> {
          const userInfo = {
            userName :name,
            userEmail:email
          }
          axiosPublic.post("/users",userInfo)
          .then(response => {
            if(response.data.insertedId){
              // console.log("user added to the database",response.data)
              Swal.fire({
                title: "Registered Successfully!",
                icon: "success",
                draggable: true
              });
            }

            // if user already exists then this else if will work
            // else if (response.data.message === "User Already Exists") { 

            //   Swal.fire({
            //     title: "Registered Successfully!",
            //     icon: "success",
            //     draggable: true
            //   });
            // }
            navigate("/") 
          })
        })
        
      })
      .catch(error => {
        //console.log(error.message);
        Swal.fire({
          title: "Registration Failed!",
          icon: "error",
          draggable: true
        });
      })
  }

  return (
    <div>
      <Helmet>
        <title>Register Page || IS</title>
      </Helmet>
      <h2 className="text-5xl mt-10 text-center text-teal-500">Register Page</h2>
      <hr className="mt-10 text-teal-500" />
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
           {
            errorMessage && 
            <p className="text-red-600">{errorMessage}</p>
           }
                  <p>Already Have Any Account? <Link className="text-green-500" to="/login">Login</Link>
                  </p>

                </div>
                <button className="btn text-white mt-4 bg-teal-400 hover:bg-teal-200">Register</button>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
