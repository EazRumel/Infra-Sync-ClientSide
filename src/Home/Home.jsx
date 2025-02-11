import { Helmet } from "react-helmet-async";
import Slider from "./Slider";


const Home = () => {
  return (
    <div> 
    <Helmet>
      <title>Home Page || IS</title>
    </Helmet>
    <div className="mb-10">
    <Slider></Slider>
    
    </div>
    </div> 
  );
};

export default Home;