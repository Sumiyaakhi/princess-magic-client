import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToyRow from './MyToyRow';
import UpdateDoll from '../UpdateDoll/UpdateDoll';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    const [control, setControl] = useState(false);
useTitle('myToys')
    const [dollAdded, setDollAdded] = useState([]);
    
    const url = `http://localhost:5000/dollAdded?email=${user?.email}`;

    useEffect(()=>{
  fetch(url)
  .then(res => res.json())
  .then(data => setDollAdded(data))
    },[])

    const handleDelete = id => {
      const proceed = confirm('Are you sure to delete this one?')
      if(proceed){
        fetch(`http://localhost:5000/dollAdded/${id}`,{
          method:"DELETE",
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.deletedCount > 0){
            alert('Deleted successfully')
            const remaining = dollAdded.filter(doll => doll._id !== id);
            setDollAdded(remaining);
          }
        })
      }
    }

    const handleUpdateDoll = (data) => {
      fetch(`http://localhost:5000/dollAdded/${data._id}`,{
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
          body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
        console.log(result);
      });
    }  
   
    
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
        key={doll._id}
        doll={doll}
        handleDelete={handleDelete}
        handleUpdateDoll={handleUpdateDoll}
        ></MyToyRow>
       )
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