import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const AddAtoy = () => {
    const {user} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (addedDoll) => {
        
        fetch('http://localhost:5000/dollAdded',{
            method:"POST",
            headers:{
                "content-type": 'application/json'
            },
            body: JSON.stringify(addedDoll)
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Booking added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
          })
        console.log(addedDoll);
      }
     

      
  return (
    <div>
      <div >
        <h1 className="text-3xl py-6 font-bold text-center font-serif  text-blue-300">Let's join with us</h1>
      <form className="grid grid-cols-2 gap-3 ms-20 md:w-1/2 " onSubmit={handleSubmit(onSubmit)}>
        
        <input className="input input-bordered input-info w-full max-w-xs" placeholder="Doll name" defaultValue="" {...register("doll name", { required: true })} />
        
        <input className="input input-bordered input-info w-full max-w-xs" placeholder="Photo URL" defaultValue="" {...register("img", { required: true })} />
        
        <input className="input input-bordered input-info w-full max-w-xs" placeholder="Seller name" defaultValue={user?.displayName} {...register("Seller name")} />
        
        <input className="input input-bordered input-info w-full max-w-xs" type="email" placeholder="Seller Email" defaultValue={user?.email} {...register("email")} />
        <select className="input input-bordered input-info w-full max-w-xs" {...register("SubCategory")}>
        <option value="Princess">Princess</option>
        <option value="Frozen">Frozen</option>
        <option value="Classic Characters">Classic Characters</option>
        <option value="Toy Story">Toy Story</option>
        <option value="The Little Mermaid">The Little Mermaid</option>
        <option value="Beauty and the Beast">Beauty and the Beast</option>
        <option value="The Princess and the Frog">The Princess and the Frog</option>
        <option value="Aladdin">Aladdin</option>
        <option value="other">other</option>
      </select>
        
        <input className="input input-bordered input-info w-full max-w-xs" placeholder="Doll price" defaultValue="" {...register("price", { required: true })} />
        <input className="input input-bordered input-info w-full max-w-xs" placeholder="Rating" defaultValue="" {...register("rating", { required: true })} />
        <input className="input input-bordered input-info w-full max-w-xs" placeholder="Available Quantity" defaultValue="" {...register("quantity", { required: true })} />

        <input className="input input-bordered input-info w-full max-w-xs" placeholder="Detail Description" defaultValue="" {...register("description", { required: true })} />

       
        
        {errors.exampleRequired && <span>This field is required</span>}

        <input className="btn bg-blue-300 border-0 my-8" type="submit" />
      </form>{" "}
      </div>
    </div>
  );
};

export default AddAtoy;
