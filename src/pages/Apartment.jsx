import { useEffect, useState } from "react";

import { Helmet } from "react-helmet-async";
import ApartmentCard from "../components/ApartmentCard";
import { PiBuildingApartment } from "react-icons/pi";
import { MdApartment } from "react-icons/md";


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


   <h2 className=" flex justify-center gap-2 text-4xl text-center items-center mt-10 text-teal-500 mb-10">Apartment <MdApartment /></h2> 


    <hr className="text-teal-500" />
      <div className="my-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 mx-10">
       {
        apartments.map(apartment => <ApartmentCard key={apartment._id}  apartment={apartment}></ApartmentCard>)
       }
    </div>
    
    <div className="join grid grid-cols-2 mb-10 text-teal-500">
  <button className="join-item btn btn-outline">Previous page</button>
  <button className="join-item btn btn-outline">Next</button>
</div>

    </div>
  );
};

export default Apartment;