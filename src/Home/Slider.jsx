import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
import apartment from "../assets/Apartment2.jpg"
import apartment2 from "../assets/Apartment3.jpg"

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
      <img  className="w-full" src={apartment} alt="" />
      <h2 className="absolute top-1/2 text-teal-600 left-1 text-center text-7xl font-bold ">Next Level Of Living</h2>
    </div>
    
    <div className="w-full relative" >
      <img  className="w-full" src={apartment2} alt="" />
      <h2 className="absolute top-1/2 left-1 text-center text-teal-600 text-7xl font-bold">Next Level Of Living</h2>
    </div>
    <div className="w-full relative" >
      <img  className="w-full" src="https://media.istockphoto.com/id/479381750/photo/apartment-building-at-dusk.jpg?s=1024x1024&w=is&k=20&c=dGw3I4yogHj87GI_ej6YIqK_P48SkEefOMjy5EPMnck=" alt="" />
      <h2 className="absolute top-1/2 text-center left-1 text-teal-600 text-7xl font-bold">Next Level Of Living</h2>
    </div>
    

  </AutoplaySlider>
    </div>
    </div>
  );
};

export default Slider;