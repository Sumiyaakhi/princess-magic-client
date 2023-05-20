import React from 'react';
import {  FaRegStar,FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const DisneyCard = ({disneyDoll}) => {
    const {img, dollName, price, ratings} = disneyDoll;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-[400px] h-[300px]' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-serif ">Name: {dollName}</h2>
    <h2 className="">Price: ${price}</h2>
<p>Ratings:  
<Rating placeholderRating={ratings}
    readonly
    emptySymbol={<FaRegStar></FaRegStar>}
    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
    fullSymbol={<FaStar></FaStar>}
    >

    </Rating>
</p>
   
    <div className="card-actions justify-end">
      <button className='btn bg-blue-300 border-0'><Link to='/viewdetails'>View Details</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DisneyCard;