import { Link } from "react-router-dom";
import logo from "../assets/Princess_Magic_Logo.webp";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/alltoys">All Toys</Link>
      </li>
      <li>
        <Link to="/mytoys">My toys</Link>
      </li>
      <li>
        <Link to="/addatoys">Add a toys</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="bg-blue-400 w-full h-8">
        <h4 className="text-center text-white">
          FREE Delivery when you spend RM250 or more for a limited time
        </h4>
      </div>
      <div className="  ">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <div>
              <img className="w-40 ms-5" src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal pe-4">{navItems}</ul>
          </div>
          <div className="avatar ps-40">
            <div className=" w-10 md:w-16 rounded-full">
              <img src="https://w7.pngwing.com/pngs/823/103/png-transparent-graphy-person-thinking-child-face-studio-thumbnail.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
