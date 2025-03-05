import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../provider/AuthProvider";
import useAdmin from "../hook/useAdmin";
import useUser from "../hook/useUser";
import { FaBars, FaUserCircle } from "react-icons/fa";

export const Nav = () => {
  let [isAdmin] = useAdmin();
  let [isUser] = useUser();
  const { user, signOuts } = useContext(Context);
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  let logout = () => {
    signOuts();
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-white">
        {/* Left - Brand Logo & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl p-2"
          >
            <FaBars />
          </button>
          <Link to="/" className="text-2xl font-bold tracking-wide">
            ✈️ Air Tickets
          </Link>
        </div>

        {/* Center - Desktop Menu */}
        <div className="hidden lg:flex space-x-6 font-semibold text-lg">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/allflights" className="hover:text-yellow-300 transition">All Flights</Link>
          {isUser && (
            <Link to="/mybookings" className="hover:text-yellow-300 transition">
              My Bookings
            </Link>
          )}
          {isAdmin && (
            <>
              <Link to="/managebooking" className="hover:text-yellow-300 transition">
                Manage Booking
              </Link>
              <Link to="/manageUser" className="hover:text-yellow-300 transition">
                Manage User
              </Link>
            </>
          )}
        </div>

        {/* Right - Profile & Auth Button */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-2">
              
                <FaUserCircle className="text-3xl" />
            
              
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white text-black p-4 rounded-md shadow-md absolute left-0 right-0 top-16 z-50">
          <ul className="space-y-3 font-semibold text-lg">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/allflights" onClick={() => setIsOpen(false)}>All Flights</Link></li>
            {isUser && (
              <li>
                <Link to="/mybookings" onClick={() => setIsOpen(false)}>
                  My Bookings
                </Link>
              </li>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/managebooking" onClick={() => setIsOpen(false)}>
                    Manage Booking
                  </Link>
                </li>
                <li>
                  <Link to="/manageUser" onClick={() => setIsOpen(false)}>
                    Manage User
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
