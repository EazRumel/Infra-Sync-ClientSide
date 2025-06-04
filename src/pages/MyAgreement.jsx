import { useEffect, useState } from 'react';
import useAgreementPub from '../hooks/userAgreementPub';
import { MdTextRotateVertical } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
// import useAgreement from '../hooks/useAgreement';


const MyAgreement = () => {


  const [agreement,refetch] = useAgreementPub();
  const axiosSecure = useAxiosSecure();
  const totalRent = agreement.reduce((total,item) => total + item.rent,0) //this accumulates and calculates the whole rent.that's why reduce is being used.
  const handleReject = (id) => {

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    axiosSecure.delete(`/agreement/${id}`)
    .then(response =>{
     if(response.data.deletedCount > 0){
     refetch()
     Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"

    })
    }
    })
  }
  
});

  }

  
  // const [agreements,setAgreements] = useState(0)



  // useEffect(()=> {
  //   useAgreement(setAgreements)
  // },[])

// console.log(agreement) 

  return (
    <div>
      <h2 className="text-right mr-10 text-2xl text-teal-500">Requests : {agreement.length}</h2>
      <h2 className="text-left ml-10 text-2xl text-teal-500">Total Rent : {totalRent}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 my-10 mx-5">
    {
      agreement.map(item => (
        <div key={item._id} className="card w-96 bg-base-100 card-md shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Apartment No:{item.apartment_no}</h2>
            <p>Name: {item.userName}</p>
            <p>Email: {item.userEmail}</p>
            <p>Floor No: {item.floor_no}</p>
            <p>Block No: {item.block_name}</p>
            <p>Rent: {item.rent}</p>
            <p>Request Date: {item.agreementDate}</p>
            <div className="justify-end card-actions">
              {/* <button className="btn btn-primary">Buy Now</button> */}
              <button className="btn btn-ghost bg-teal-400 text-white">Accept</button>
              <button onClick={()=>handleReject(item._id)} className="btn btn-ghost bg-red-400 text-white">Reject</button>
            </div>
          </div>
        </div>
      ))
    }
  </div>
    </div>
    
  );
};

export default MyAgreement;
