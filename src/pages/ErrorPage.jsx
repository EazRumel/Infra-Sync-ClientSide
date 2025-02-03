
import errorPic from "../assets/404 error.jpg"
const ErrorPage = () => {
  return (
    <div className="max-w-xl mx-auto">
      <img className="w-full h-full" src={errorPic} alt="" />
    </div>
  );
};

export default ErrorPage;