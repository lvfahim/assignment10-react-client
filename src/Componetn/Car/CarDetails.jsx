import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../../Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';


const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const { user } = useContext(AuthContext)
  const [carData, setCarData] = useState([])
  const [refetch, setRefetch] = useState(0)



  useEffect(() => {
    fetch(`https://assigment-10-server-gamma.vercel.app/carDetails/${id}`)
      .then(res => res.json())
      .then(data => setCar(data))
      .catch(err => console.error(err));
  }, [id]);
  useEffect(() => {
    fetch("https://assigment-10-server-gamma.vercel.app/myBookingList", {
      headers: {
        authorization: `Bearer ${user.accessToken}`
      }
    })
      .then(res => res.json())
      .then(data => setCarData(data))
  }, [refetch, id,user])
  const exist = carData.find(car => car.carId === id)
  console.log(carData)

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading></Loading>
      </div>
    );
  }

  const {
    name,
    description,
    image,
    category,
    price,
    location,
    providerName,
    providerEmail,
    _id
  } = car;


  const heandleBook = () => {
    const { email } = user || {}
    const newCard = { name, image, category, price, location, email, carId: _id }
    if (user?.email) {
      fetch("https://assigment-10-server-gamma.vercel.app/carBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCard)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            toast.success("Car Booked successfully!");
            setRefetch(refetch + 1)
          }

        });

    }
  }


  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} className="w-full h-96 bg-cover object-cover" />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{name}</h2>
          <p className="text-gray-600">{description}</p>

          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Rent Price:</strong> ${price}/day</p>
            <p><strong>Location:</strong> {location}</p>
            <div>
              <strong>Status: </strong>
              {exist
                ? <span className="bg-red-500 text-white p-2 rounded-2xl inline-block w-20 text-center">Unavailable</span>
                : <span className="bg-blue-500 text-white p-2 rounded-2xl inline-block w-20 text-center">Available</span>
              }
            </div>

          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Provider Information</h3>
            <p><strong>Name:</strong> {providerName}</p>
            <p><strong>Email:</strong> {providerEmail}</p>
          </div>

          <div className="card-actions mt-6">
            <button onClick={heandleBook} disabled={exist} className={`${exist ? `bg-black text-white w-full btn ` : `btn btn-primary-gradient text-white w-full`}`}> {exist ? <p>It's Already Booked</p> : <p>Book Now</p>} </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
