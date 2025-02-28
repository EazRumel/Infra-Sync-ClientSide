import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import CouponCard from "./CouponCard";


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
    <hr className = "text-teal-500 mx-5 my-5"/>
    <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
      coupon.map(cou => <CouponCard key={cou._id} cou={cou}></CouponCard>)
    }
    </div>
    </div>
  );
};

export default Coupon;