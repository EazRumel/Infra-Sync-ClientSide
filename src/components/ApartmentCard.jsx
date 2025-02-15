import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const ApartmentCard = ({ apartment }) => {
  const {user} = useAuth()
  const navigate = useNavigate()
  const handleAgreement = (agreement) => {

  //  console.log("User",user.email)
   if(user && user?.email){

   }
   else {
    Swal.fire({
      title: "You are not logged in!",
      text: "Please log in to continue!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log in!"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login")
      }
    });
   }
  }
 
  return (
    //     <div className="card bg-base-100 image-full  shadow-sm">
    //   <figure>
    //     <img
    //       src={apartment.apartment_image}
    //       alt="Shoes" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{apartment.apartment_no}</h2>
    //     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn bg-teal-500">Agreement</button>
    //     </div>
    //   </div>
    // </div>
    <div className="card bg-base-100  shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={apartment.apartment_image}
          alt="Shoes"
          className="rounded-xl w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-teal-500">Apartment Number:{apartment.apartment_no}</h2>
        <p className="">Floor Number:{apartment.floor_no}</p>
        <p className="">Block Number:{apartment.block_name}</p>
        <p className="">$:{apartment.rent}</p>
        <div className="card-actions">
            <button onClick={()=>handleAgreement(apartment)} className="btn bg-teal-500 hover:bg-teal-300 text-white">Agreement</button>
        </div>

      </div>
    </div>
  );
};

{/* <Link state={{apartment}} to={`/agreement/${apartment._id}`}>
            <button onClick={()=>handleAgreement(apartment)} className="btn bg-teal-500 hover:bg-teal-300 text-white">Agreement</button>
          </Link> */}

export default ApartmentCard;