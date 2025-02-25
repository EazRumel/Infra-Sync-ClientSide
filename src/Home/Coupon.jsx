import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";


const Coupon = () => {
  const axiosSecure = useAxiosSecure()
  const [coupon,setCoupon] = useState([])
  useEffect(()=> {
    axiosSecure.get("/coupons")
    .then(response => {
      setCoupon(response.data)
    })
  },[])
  return (
    <div>
    <h2 className="text-center text-4xl text-teal-400 font-bold">Coupon Collection</h2>
    <hr className = "text-teal-500 mx-10 my-5"/>
      <h2>{coupon.length}</h2>
    </div>
  );
};

export default Coupon;