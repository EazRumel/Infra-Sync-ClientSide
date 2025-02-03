import { useEffect, useState } from "react";
import ApartmentCard from "../assets/components/ApartmentCard";
import { Helmet } from "react-helmet-async";


const Apartment = () => {
  const [apartments,setApartments] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/apartment")
    .then(response => response.json())
    .then(data =>{
      setApartments(data)
    }
    )
  },[])
  return (
    <div>
    <Helmet>
      <title>Apartment || IS</title>
    </Helmet>
    <h2 className="text-4xl text-center mt-10 text-teal-500 mb-10">Apartment</h2>
    <hr className="text-teal-500" />
      <div className="my-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-10">
       {
        apartments.map(apartment => <ApartmentCard key={apartment._id} apartment={apartment}></ApartmentCard>)
       }
    </div>
    </div>
  );
};

export default Apartment;