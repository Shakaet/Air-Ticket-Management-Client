import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../provider/AuthProvider";
import { SocialLogin } from "./SocialLogin";

const Login = () => {
  const { loginSetup, googleSign } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  let location= useLocation()
  const redirectPath = location.state?.from || "/";

  

  const handleLogin = (e) => {
    e.preventDefault();
    loginSetup(email, password)
      .then(() => {
        toast.success("Login successfully!");
        navigate(redirectPath);
      })
      .catch((error) => {
        toast.error(error.message || "Failed to login.");
      });
  };

  const handleForgetPassword = () => {
    navigate("/forget-password", { state: { email } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <button
                type="button"
                onClick={handleForgetPassword}
                className="label-text-alt text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
            </label>
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
            Login
          </button>
        </form>
        <SocialLogin></SocialLogin>
        <p className="text-center mt-5">
          Don't have an account?
          <Link to="/register" className="text-blue-500 font-bold ms-2">
            Register
          </Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;