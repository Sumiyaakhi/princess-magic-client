import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToyRow from "./AllToyRow";
import { FaSearch } from "react-icons/fa";

const AllToys = () => {
    const [toy, setToy] = useState('');
    console.log(toy);
  const allToys = useLoaderData();
//   console.log(allToys);
  return (
    <div>
      <h1>All toys are coming soon!!!</h1>
      <div className="bg-white  rounded  px-3 shadow-sm my-6 flex items-center mx-32">
     <FaSearch className=""></FaSearch>
     <input className="search w-full h-10 py-3 " type="text" onChange={(e)=> setToy(e.target.value)} placeholder="Type to search doll..." />
      </div>
      <div className="overflow-x-auto mx-10 ps-5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              
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
