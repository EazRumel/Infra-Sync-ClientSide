import React from 'react';

const ApartmentCard = ({apartment}) => {

  return (
    <div className="card bg-base-100 image-full  shadow-sm">
  <figure>
    <img
      src={apartment.apartment_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default ApartmentCard;