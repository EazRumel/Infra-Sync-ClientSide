import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import AboutBuilding from "./AboutBuilding";
import CouponCard from "./Coupon";


const Home = () => {
  return (
    <div> 
    <Helmet>
      <title>Home Page || IS</title>
    </Helmet>
    <div className="mb-10">
    <Slider></Slider>
    {/* <hr className="my-10 text-teal-500" /> */}
    <div className="my-20">
    <AboutBuilding></AboutBuilding>
    </div>
<CouponCard></CouponCard>
    </div>
    </div> 
  );
};

export default Home;