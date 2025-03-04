import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const fetchFlights = async () => {
    const { data } = await axios.get("http://localhost:3000/allflights"); // Replace with your API
    return data;
  };
  

  export const AllFlights = () => {
    const { data, isLoading, error } = useQuery({
      queryKey: ["flights"], 
      queryFn: fetchFlights, 
    });
  
    console.log("Flights Data:", data);
  
    if (isLoading) return <p>Loading flights...</p>;
    if (error) return <p>Error loading flights: {error.message}</p>;
  
    const flights = Array.isArray(data) ? data : data?.flights || []; // Ensure it's an array
  
    return (
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {flights.length > 0 ? (
            flights.map((flight, index) => (
              <motion.div
                key={flight._id}
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={flight.airplaneImage}
                    alt={`Airplane ${flight.flightNumber}`}
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{flight.airline}</h2>
                <p className="text-gray-500 mb-2">{flight.flightNumber}</p>
                <p className="text-gray-700 mb-2">
                  <strong>Departure:</strong> {flight.departureCity}, {flight.departureCountry} <br />
                  <strong>Arrival:</strong> {flight.arrivalCity}, {flight.arrivalCountry}
                </p>
                <p className="text-gray-500 mb-4">
                  <strong>Duration:</strong> {flight.duration}
                </p>
                <div className="flex justify-between mb-4">
                  <div>
                   
                  </div>
                  <p className={`text-sm font-bold ${flight.status === "available" ? 'text-green-500' : 'text-red-500'}`}>
                    {flight.status}
                  </p>
                </div>
                <Link
                  to={`/flightDetails/${flight._id}`}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Details
                </Link>
              </motion.div>
            ))
          ) : (
            <p>No flights available</p>
          )}
        </div>
      </div>
    );
  };
  
