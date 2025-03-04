import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

export const FlightsDetails = () => {

    let {id}= useParams()

    let {user}=useContext(Context)
    console.log(user)
    

    const fetchFlights = async () => {
        const { data } = await axios.get(`http://localhost:3000/flightsDetails/${id}`); // Replace with your API
        return data;
      };

      const { data: flights, isLoading, error,refetch } = useQuery({
        queryKey: ["flights"], 
        queryFn: fetchFlights, 
      });

      let handlebook=(item)=>{
        // console.log(item)

        let bookData={
          flight_id:id,
          airplaneImage:item?.airplaneImage,
          airline:item?.airline,
          flightNumber:item?.flightNumber,
          aircraft:item?.aircraft,
          email:user?.email,
          status:"pending"


        }

        console.log(bookData)

        axios.post("http://localhost:3000/bookedData",bookData)
        .then((res) => {
          if (res.data.insertedId) {
            refetch()
            Swal.fire({
              title: "Flight Booked Successfully!",
              icon: "success",
              draggable: true
            });
          }
        })
        .catch((error) => {
          console.error("User already exists or error occurred:", error);
        });

      }


  return (
    <div className="container mx-auto p-4">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img
            src={flights?.airplaneImage}
            alt={`Airplane ${flights?.flightNumber}`}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h2 className="text-2xl font-semibold mb-4">{flights?.airline}</h2>
          <p className="text-xl font-bold mb-2">Flight Number: {flights?.flightNumber}</p>
          <p className="text-gray-700 mb-2">
            <strong>Aircraft:</strong> {flights?.aircraft}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Departure:</strong> {flights?.departureCity}, {flights?.departureCountry} ({flights?.departureAirport}) <br />
            <strong>Arrival:</strong> {flights?.arrivalCity}, {flights?.arrivalCountry} ({flights?.arrivalAirport})
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Departure Time:</strong> {new Date(flights?.departureDateTime).toLocaleString()} <br />
            <strong>Arrival Time:</strong> {new Date(flights?.arrivalDateTime).toLocaleString()}
          </p>
          <p className="text-gray-500 mb-4">
            <strong>Duration:</strong> {flights?.duration}
          </p>
          
          <div className="flex justify-between items-center">
            <p className={`text-sm ${flights?.status ? 'text-green-500' : 'text-red-500'}`}>
              Status: {flights?.status=="available" ? 'Available' : 'Not Available'}
            </p>
            <button
            onClick={()=>handlebook(flights)}
              disabled={flights?.status=="unavailable"}
              className={`py-2 px-4 rounded-md text-white ${flights?.status ? 'bg-blue-500' : 'bg-gray-500 cursor-not-allowed'}`}
            >
              {flights?.status=="available" ? 'Book Now' : 'Not Available'}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
