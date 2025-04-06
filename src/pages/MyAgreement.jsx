import { useEffect, useState } from 'react';
import useAgreementPub from '../hooks/userAgreementPub';
// import useAgreement from '../hooks/useAgreement';


const MyAgreement = () => {


  const [agreement] = useAgreementPub()
  // const [agreements,setAgreements] = useState(0)



  // useEffect(()=> {
  //   useAgreement(setAgreements)
  // },[])

console.log(agreement) 

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 my-10 mx-5">
    {
      agreement.map(item => (
        <div key={item._id} className="card w-96 bg-base-100 card-md shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Apartment No:{item.apartment_no}</h2>
            <p>Name:{item.userName}</p>
            <p>Email:{item.userEmail}</p>
            <p>Floor No:{item.floor_no}</p>
            <p>Block No:{item.block_no}</p>
            <p>Rent:{item.rent}</p>
            <p>Request Date:{item.agreementDate}</p>
            <div className="justify-end card-actions">
              {/* <button className="btn btn-primary">Buy Now</button> */}
              <button className="btn btn-ghost bg-teal-400 text-white">Accept</button>
              <button className="btn btn-ghost bg-red-400 text-white">Reject</button>
            </div>
          </div>
        </div>
      ))
    }
  </div>
  );
};

export default MyAgreement;
