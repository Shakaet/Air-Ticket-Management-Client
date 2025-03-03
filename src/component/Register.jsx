import React, { useContext } from 'react'
import { SocialLogin } from './SocialLogin'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../provider/AuthProvider'
import axios from 'axios'

export const Register = () => {

    let {createRegistered}= useContext(Context)

    let link=useNavigate()


    let handleSubmit=(e)=>{
        e.preventDefault()

        let name=e.target.name.value
        let email=e.target.email.value
        let pass=e.target.password.value

        console.log(name,email,pass)

        let userData={
            user_name:name,
            user_email:email,
            role:"user"
        }

        createRegistered(email, pass)
  .then((res) => {
    

    axios
      .post("http://localhost:3000/users", userData)
      .then((res) => {
        if (res.data.insertedId) {
          console.log("User added successfully");
        }
      })
      .catch((error) => {
        console.error("User already exists or error occurred:", error);
      });

    e.target.reset();
    link("/");
  })
  .catch((error) => {
    console.error("Error during registration:", error);
  });




    }
  return (
    <div>

<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg">
    <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />

      

      <input
        type="password"
        name="password"
        required
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md"
      >
        Register
      </button>
    </form>
    <div className="text-center mt-4">
      <span>Already have an account? </span>
      <Link to={"/login"} className="text-blue-500">Login</Link>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>

    </div>
  )
}
