import React from "react";
import { Link } from "react-router-dom";
import img from '../../public/Images/errorPage.jpg'

const ErrorPage = () => {
  return (
    <div>
      <div className="text-right px-10 pt-10 ">
        <button className="btn btn-outline"><Link to="/"> Back to Home Page</Link></button>
      </div>
      <img className="w-full h-screen" src={img} alt="" />
    </div>
  );
};

export default ErrorPage;
