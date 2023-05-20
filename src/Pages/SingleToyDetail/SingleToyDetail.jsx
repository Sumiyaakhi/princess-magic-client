import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const SingleToyDetail = () => {
    const {user} = useContext(AuthContext);
    const singleToy = useLoaderData()

    const {img, sellerName, dollName,subCategoryName,price, ratings,quantityAvailable,description} = singleToy;
    console.log(singleToy);
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">{dollName}</h1>
      <h2 className='text-xl py-2 font-bold'>Seller name: {sellerName}</h2>
      <h3>Email: {user?.email}</h3>
      <p className="py-3">Price: ${price}</p>
      <p>Available Quantity: {quantityAvailable}</p>
      <p>Ratings:  
<Rating placeholderRating={ratings}
    readonly
    emptySymbol={<FaRegStar></FaRegStar>}
    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
    fullSymbol={<FaStar></FaStar>}
    >

    </Rating>
</p>
      <p className="py-3"> Detail description: {description}</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <img src={img} alt="" />
      </div>
    </div>
  </div>
</div>



    );
};

export default SingleToyDetail;