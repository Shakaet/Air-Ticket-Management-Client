import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../provider/AuthProvider";
import useAdmin from "../hook/useAdmin";
import useUser from "../hook/useUser";


export const Nav = () => {

  let [isAdmin] = useAdmin()
  let [isUser]= useUser()
  
  
    const { user, signOuts } = useContext(Context);
    let nav=useNavigate()
   let logout=()=>{
    signOuts()
    nav("/login")

   }
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
      <div className="navbar container mx-auto px-4 py-3 text-white">
        {/* Left Side - Brand & Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              className="menu menu-sm dropdown-content bg-white text-black mt-3 w-52 rounded-box p-2 shadow"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/allflights">All Flights</Link></li>
              
                {
                  isUser && <li><Link to="/mybookings">My Bookings</Link></li>
                }
              
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold tracking-wide">
            ✈️ Air Tickets
          </Link>
        </div>

        {/* Center - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 font-semibold text-xl">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allflights">All Flights</Link></li>
            {
                  isUser && <li><Link to="/mybookings">My Bookings</Link></li>
            }
            
          </ul>
        </div>

        {/* Right Side - Auth Button */}
        <div className="navbar-end">
          {user ? (
            <button
              onClick={logout}
              className="btn bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="btn bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
