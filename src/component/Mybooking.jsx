import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react'
import { motion } from "framer-motion";
import { Context } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { h2 } from 'framer-motion/client';



  
export const Mybooking = () => {

    let {user}= useContext(Context)

    const fetchFlights = async () => {

    
        const { data } = await axios.get(`http://localhost:3000/bookedData/${user?.email}`); // Replace with your API
        return data;
      };

    const { data, isLoading, error,refetch } = useQuery({
        queryKey: ["flightsBokking",user?.email], 
        queryFn: fetchFlights, 
      });
      if (isLoading) return <p>Loading flights...</p>;
    if (error) return <p>Error loading flights: {error.message}</p>;


    let handleDelete=(id,flight_id)=>{

        // console.log(id,flight_id)

        Swal.fire({
            title: "Are you sure?",
            text: "Do you Want to Delete this item?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I Want"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/bookedData/${id}?flight_id=${flight_id}`)
                .then((res)=>{
                    if(res.data.deletedCount>0){
                        refetch()
                        Swal.fire({
                            title: "This item is successfully deleted !",
                            text: "This user is successfully deleted !",
                            icon: "success"
                          });
                    }
                })
              
            }
          });
      }




      if (data.length === 0) {
        return (
          <div className="flex justify-center items-center h-screen">
            <h2 className="text-4xl font-bold text-red-500 animate-pulse">
              🚀 No Data Found! 🚀
            </h2>
          </div>
        );
      }
      
    
       
        
        
        
      

    
  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        My Flight Bookings ✈️
      </h2>
      <div className="overflow-x-auto">
        <motion.table
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg"
        >
          <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Airline</th>
              <th className="py-3 px-4 text-left">Flight No.</th>
              <th className="py-3 px-4 text-left">Aircraft</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((booking, index) => (
              <motion.tr
                key={booking.flight_id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-gray-200 hover:bg-gray-100 transition duration-200"
              >
                <td className="py-3 px-4">
                  <img
                    src={booking.airplaneImage}
                    alt="Flight"
                    className="w-12 h-12 rounded-md shadow-md"
                  />
                </td>
                <td className="py-3 px-4 font-semibold">{booking.airline}</td>
                <td className="py-3 px-4">{booking.flightNumber}</td>
                <td className="py-3 px-4">{booking.aircraft}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-md text-white text-sm ${
                      booking.status === "confirmed"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleDelete(booking._id,booking.flight_id)}
                    className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-md transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  )
}
