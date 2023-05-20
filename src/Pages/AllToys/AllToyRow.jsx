import React from 'react';
import { Link } from 'react-router-dom';

const AllToyRow = ({alltoy}) => {
    const {_id,sellerName, dollName,subCategoryName, price,quantityAvailable } = alltoy;




    return (
        
      <tr>
        
        <td>{sellerName}</td>
        <td>{dollName}</td>
    <td>{subCategoryName}</td>
    <td> ${price}</td>
    <td className='text-center'>{quantityAvailable}</td>
    <td><Link to={`/toy/${_id}`}><button  className='btn bg-blue-300 border-0'>View Details</button></Link></td>
      </tr>
     
   
      
    );
};

export default AllToyRow;