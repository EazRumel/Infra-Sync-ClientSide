import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
import apartment from "../assets/Apartment2.jpg"
import apartment2 from "../assets/Apartment3.jpg"
import apartment3 from "../assets/apartment5.jpg"
import Navbar from '../shared/Navbar';


const Slider = () => {
  return (
    <div>
      <div >
      <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={2000}
  >
    
    
    <div className="w-full relative" >
      <img  className="w-full" src={apartment2} alt="" />
      <div className="absolute top-1/2 left-1">
      <h2 className="text-white  text-center text-3xl lg:text-7xl font-extralight ">Next Level Of Living</h2>
      <p className="text-white ml-5 mt-3 text-sm">More appeasing in living with InfraSync.We provide comfort living and to live with peace with everyone</p>
      </div>
    </div>
    <div className="w-full relative" >
      <img  className="w-full" src={apartment3} alt="" />
      <div className="absolute top-1/2 left-1">
      <h2 className="text-white  text-center text-3xl lg:text-7xl font-extralight ">Next Level Of Living</h2>
      <p className="text-white ml-5 mt-3 text-sm">More appeasing in living with InfraSync.We provide comfort living and to live with peace with everyone</p>
      </div>
    </div>

    <div className="w-full relative" >
      <img  className="w-full" src={apartment} alt="" />
      <div className="absolute top-1/2 left-1">
      <h2 className="text-white  text-center text-3xl lg:text-7xl font-extralight  ">Next Level Of Living</h2>
      <p className="text-white ml-5 mt-3 text-sm">More appeasing in living with InfraSync.We provide comfort living and to live with peace with everyone</p>
      </div>
    </div>
    <div className="w-full relative" >
      <img  className="w-full" src="https://media.istockphoto.com/id/479381750/photo/apartment-building-at-dusk.jpg?s=1024x1024&w=is&k=20&c=dGw3I4yogHj87GI_ej6YIqK_P48SkEefOMjy5EPMnck=" alt="" />
      <div className="absolute top-1/2 left-1">
      <h2 className="text-white  text-center text-3xl lg:text-7xl font-extralight ">Next Level Of Living</h2>
      <p className="text-white ml-5 mt-3 text-sm">More appeasing in living with InfraSync.We provide comfort living and to live with peace with everyone</p>
      </div>
    </div>
  </AutoplaySlider>
    </div>
    </div>
  );
};

export default Slider;