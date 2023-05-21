import React from 'react';
import { Link } from 'react-router-dom';

const AllToyRow = ({alltoy}) => {
    const {_id,sellerName,img, dollName,subCategoryName, price,quantityAvailable } = alltoy;




    return (
        
      <tr>
         <td>
          
            <div className="avatar">
              <div className="w-20 h-20 rounded">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>  
        
        </td>
        
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