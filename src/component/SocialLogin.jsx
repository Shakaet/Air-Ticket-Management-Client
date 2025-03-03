import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../provider/AuthProvider'
import axios from 'axios'

export const SocialLogin = () => {


    let {googleSign}= useContext(Context)
    let navigate= useNavigate()
    let location= useLocation()
    const redirectPath = location.state?.from || "/";

    const handleGoogle = () => {
        googleSign()
          .then((result) => {
            let user=result.user
            // console.log(user)
            // toast.success("Google Sign in successfully!");
            navigate(redirectPath);

            let usersData={
                user_name:user?.displayName,
                user_email:user?.email,
                role:"user"


            }

            
      
            axios.post("http://localhost:3000/users",usersData)
            .then((res)=>{
                if(res.data.insertedId){
                    // alert("user added")
                    
                }
            })
            .catch((error)=>{
                // alert("user already existed")
            })
          })
          .catch((error) => {
            toast.error(error.message || "Failed to create account.");
          });
      };
  return (
    <div>
        <div>
            <button onClick={handleGoogle}  className="btn btn-accent mt-5 items-center flex mx-auto w-full">Login with Google</button>
        </div>
    </div>
  )
}
