import React, { useContext } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../Providers/AuthProvider";
import useTitle from "../hooks/useTitle";
import Swal from "sweetalert2";


const Registration = () => {
    const {googleSignIn, createUser, updateUserProfile} = useContext(AuthContext)
    useTitle('registration')
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/" ;

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { photo, name, email, password };
    console.log(user);

    createUser(email,password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        console.log("update user data", name, photo)
        updateUserProfile(name, photo)
          .then(() => {
            // Profile updated successfully
            console.log("Profile updated:");
            Swal.fire({
              icon: "success",
              title: "Login Successful",
            });
            form.reset();
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log("Error updating profile:", error);
          });
    })
    .catch(error => console.log(error))
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body ">
            <h1 className="text-4xl text-blue-400 text-center mb-3 font-bold">
              Registration!
            </h1>
            <form className="space-y-6" onSubmit={handleRegister}>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="photo"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
            
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-blue-400 border-0 hover:bg-blue-600"
                  type="submit"
                  value="Registration"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              {" "}
              Already have an account?{" "}
              <span className="text-blue-300 underline underline-offset-2 font-bold">
                <Link to="/login">Login</Link>
              </span>{" "}
            </p>
          </div>
          <button onClick={handleGoogleSignIn}>
       <div className=" mb-6 flex rounded mx-3 py-2 bg-blue-300 items-center justify-center">
      <FcGoogle className="w-6 h-6 "></FcGoogle>
       <h4 className="text-white"> Login with Google</h4>
       </div>
       </button>
        </div>
      
      </div>
       
    </div>
  );
};

export default Registration;
