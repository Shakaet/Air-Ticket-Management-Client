import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const ManageBooking = () => {
  const fetchBookings = async () => {
    const { data } = await axios.get("https://air-ticket-server-xi.vercel.app/bookedData"); // Replace with your API
    return data;
  };

  const { data: bookings, isLoading, error, refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
  });

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await axios.patch(`https://air-ticket-server-xi.vercel.app/bookings/${id}`);

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Status Updated!",
          text: `Flight status changed to ${newStatus}`,
          icon: "success",
        });
        refetch();
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (isLoading) return <p>Loading Bookings...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  if (bookings.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-4xl font-bold text-red-500 animate-pulse">
          🚀 No Data Found! 🚀
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Manage Flight Bookings ✈️
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
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Airplane Image</th>
              <th className="py-3 px-4">Airline</th>
              <th className="py-3 px-4">Flight No.</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => (
              <motion.tr
                key={booking._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-gray-200 hover:bg-gray-100 transition duration-200"
              >
                <td className="py-3 px-4">{booking.email}</td>
                <td className="py-3 px-4">
                  <img
                    src={booking.airplaneImage}
                    alt="Flight"
                    className="w-16 h-16 rounded-md shadow-md"
                  />
                </td>
                <td className="py-3 px-4 font-semibold">{booking.airline}</td>
                <td className="py-3 px-4">{booking.flightNumber}</td>
                <td className="py-3 px-4">
                  <select
                    className="px-3 py-1 border rounded-md"
                    value={booking.status}
                    onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                  </select>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
};

export default ManageBooking;
