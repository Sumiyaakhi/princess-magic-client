import React from "react";
import { useForm } from "react-hook-form";

const UpdateDoll = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

   


  return (
    <form className="grid grid-cols-1 gap-2" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl text-center font-bold font-serif text-blue-300">Update data </h1>
      <input
        className="input input-bordered input-info w-full max-w-xs"
        placeholder="Doll price"
        defaultValue=""
        {...register("price", { required: true })}
      />
     
      <input
        className="input input-bordered input-info w-full max-w-xs"
        placeholder="Available Quantity"
        defaultValue=""
        {...register("quantity", { required: true })}
      />

      <input
        className="input input-bordered input-info w-full max-w-xs"
        placeholder="Detail Description"
        defaultValue=""
        {...register("description", { required: true })}
      />


    </form>
  );
};

export default UpdateDoll;
