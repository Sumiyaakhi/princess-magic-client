import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const MyToyRow = ({doll}) => {

    const {img, dollName,
        SellerName,email, SubCategory, price, rating, quantity,description, _id} = doll;
    return (
        <tr>
        <th>
        <button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-20 h-20 rounded">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{dollName}</div>
              <div className="text-sm opacity-50">{SubCategory}</div>
            </div>
          </div>
        </td>
        <td>
         {
SellerName}
          <br/>
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>${price}</td>
        <td>  
<Rating placeholderRating={rating}
    readonly
    emptySymbol={<FaRegStar></FaRegStar>}
    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
    fullSymbol={<FaStar></FaStar>}
    >

    </Rating></td>
        <td>{quantity}</td>
        <td>{description}</td>
        <td>
          <button className="btn btn-ghost btn-xs">Update</button>
        </td>
      </tr>
    );
};

export default MyToyRow;