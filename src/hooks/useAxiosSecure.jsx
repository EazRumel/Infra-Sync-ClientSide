import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
const axiosSecure = axios.create({
  baseURL:"http://localhost:3000"
})
const useAxiosSecure = () => {
  const navigate = useNavigate()
  const {logOut} = useAuth()
 axiosSecure.interceptors.request.use(function(config){
  const token = localStorage.getItem("access-token")
  console.log("stopped by the interruption of interceptor",token)



  
  config.headers.authorization = (`Bearer ${token}`)
   return config
 },function(error){
  return Promise.reject(error)
 })




axiosSecure.interceptors.response.use(function(response){
  return response
},async function (error){
  const status = error.response.status
  if(status === 401 || status === 403){
    await logOut()
   navigate("/login")
  }
  console.log("status error in the interceptor",status)
  return Promise.reject(error) //this error deals with the cases of 401,403 type status or we can say with the error status
})




  return axiosSecure;
}; //axiosSecure is being returned that's why it is important to use the exact name we are returning

export default useAxiosSecure;