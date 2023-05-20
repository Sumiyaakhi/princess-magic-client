import React from 'react';

const AllToyRow = ({alltoy}) => {
    const {sellerName, dollName,subCategoryName, price,quantityAvailable } = alltoy;
    return (
        
          
      
      <tr>
        
        <td>{sellerName}</td>
        <td>{dollName}</td>
    <td>{subCategoryName}</td>
    <td> ${price}</td>
    <td className='text-center'>{quantityAvailable}</td>
    <td><button className='btn bg-blue-300 border-0'>View Details</button></td>
      </tr>
     
   
      
    );
};

export default AllToyRow;