import { useLocation, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";


const Agreement = () => {
  const {id} = useParams();
  const {user} = useAuth()
   //console.log(user)
  const location = useLocation();
  const apartment = location.state?.apartment
  
  //console.log(location.state)

  if(!apartment){
    //console.log("No Apartment Data found")}
  return (
    <div>
     <Helmet>
          <title>Agreement || IS</title>
        </Helmet>
    <h2>{apartment.floor_no}</h2>
    </div>
  );
}};

export default Agreement;