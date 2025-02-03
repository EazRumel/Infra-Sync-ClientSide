const ApartmentCard = ({apartment}) => {

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
    <h2 className="card-title">Apartment Number:{apartment.apartment_no}</h2>
    <p>Floor Number:{apartment.floor_no}</p>
    <p>Block Number:{apartment.block_name}</p>
    <p>Rent:{apartment.rent}</p>
    <div className="card-actions">
      <button className="btn bg-teal-500 hover:bg-teal-300 text-white">Agreement</button>
    </div>
    

  </div>
</div>
  );
};

export default ApartmentCard;