import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToyRow from "./AllToyRow";
import { FaSearch } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
    const [toy, setToy] = useState('');
    const [order, setOrder] =useState("ASC");
useTitle('AllToys')

    const sortDataByPrice = ()=>{
      
            const sortedToy = [...toy]
          
            sortedToy.sort((a,b)=>{
                if(order === "ASC"){
                    return a.price - b.price;
                }
                else{
                    return b.price - a.price;
                }
            });
            setToy(sortedToy);
    }
    console.log(toy);
  const allToys = useLoaderData();
//   console.log(allToys);
  return (
    <div>
     
      <div className="bg-white  rounded  px-3 shadow-sm my-6 flex items-center mx-32 ">
     <FaSearch className=""></FaSearch>
     <input className="search w-full h-10 py-3 " type="text" onChange={(e)=> setToy(e.target.value)} placeholder="Type to search doll..." />
      </div>
      <div className="dropdown ms-16 mb-16">
  <label tabIndex={0} className="btn bg-blue-300 border-0  m-1">Sort By Price</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><button onClick={sortDataByPrice}>
        Sort by Price ({order === 'asc' ? 'Ascending' : 'Descending'})</button></li>
    
  </ul>
</div>
      <div className="overflow-x-auto mx-10 ps-5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Seller Name</th>
              <th>Doll Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.filter((alltoy)=>{
                return toy.toLowerCase() === "" ? alltoy : alltoy.dollName.toLowerCase().includes(toy);

            }).map((alltoy) => (
              <AllToyRow key={alltoy._id} alltoy={alltoy}></AllToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
