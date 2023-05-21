import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToyRow from './MyToyRow';

const MyToys = () => {
    const {user} = useContext(AuthContext);

    const [dollAdded, setDollAdded] = useState([])
    const url = `http://localhost:5000/dollAdded?email=${user?.email}`
    useEffect(()=>{
  fetch(url)
  .then(res => res.json())
  .then(data => setDollAdded(data))
    },[])
    return (
        <div>
            <h1 className='text-3xl text-blue-300 font-bold font-serif text-center py-6'>Add some doll information: {dollAdded.length} </h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Doll image and name</th>
        <th>Seller Name</th>
        <th>price</th>
        <th>Rating</th>
        <th>quantity</th>
        <th>description</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        dollAdded.map(doll=> <MyToyRow 
        key={dollAdded._id}
        doll={doll}
        ></MyToyRow> )
     }
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Doll</th>
        <th>Seller Name</th>
        <th>price</th>
        <th>Rating</th>
        <th>quantity</th>
        <th>description</th>
        <th>Update</th>
      </tr>
    </tfoot>
    
  </table>
</div>


        </div>


    );
};

export default MyToys;



// http://localhost:5000/dollAdded?email=sumiya.akhi793@gmail.com&sort=1