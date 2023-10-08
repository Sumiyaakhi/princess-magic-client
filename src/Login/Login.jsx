import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/AuthProvider";
import useTitle from "../hooks/useTitle";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  useTitle('login')
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        Swal.fire({
          icon: "success",
          title: "Login Successful",
        });
        form.reset();
        navigate(from, { replace: true });
      })

      .catch((error) => console.log(error));
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className=" ">
        <h1 className="text-5xl font-semibold text-blue-400 text-center pb-8">
          {" "}
          Login now!
        </h1>
        <div className="card   max-w-sm w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-blue-400 border-0 hover:bg-blue-600"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="">
              New to Princess Magic?{" "}
              <span className="text-blue-400 underline underline-offset-4">
                <Link to="/registration">Registration</Link>
              </span>{" "}
            </p>
          </div>
        </div>
        <button onClick={handleGoogleSignIn}>
        <div className="ms-20 my-8 flex items-center justify-center">
       
            <FcGoogle className="w-6 h-6 "></FcGoogle>
         
          <h4> Login with Google</h4>
        </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
