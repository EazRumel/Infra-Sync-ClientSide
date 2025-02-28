import React from 'react';

const CouponCard = ({cou}) => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
    <div className="card w-96 bg-base-100 shadow-xl transform transition-transform duration-300 hover:scale-105">
      <div className="card-body text-center">
        <h2 className="text-3xl font-bold text-teal-500 mb-4">{cou.code}</h2>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Discount:</span> {cou.discount}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Description:</span> {cou.description}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">Expiry Date:</span> {cou.expiryDate}
        </p>
        <div className="card-actions justify-center">
          
        </div>
      </div>
    </div>
  </div>
  );
};

export default CouponCard;