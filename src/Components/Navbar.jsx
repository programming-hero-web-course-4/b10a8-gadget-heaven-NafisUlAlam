import { Link, NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar bg-[#9538E2] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/statistics"}>Statistics</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="font-bold text-xl">
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/statistics"}>Statistics</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <a className="btn w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <IoCart size={25} color="black" />
        </a>
        <a className="btn  w-12 h-12 rounded-full bg-white flex items-center justify-center">
          <FaHeart size={25} color="black" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
