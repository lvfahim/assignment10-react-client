import React from 'react';
import { Link } from 'react-router';

const ShowCarMap = ({ car }) => {
    console.log(car)
    return (
        <div>
            <div className="p-4 rounded-2xl shadow w-[348px] h-auto">
                <img src={car.image} alt={car.name} className="rounded-md w-[348px] h-[445px] object-cover" />
                <h2 className="text-xl font-bold mt-2">Name : {car.name}</h2>
                <p className="text-sm text-gray-600">Category : {car.category}</p>
                <p className="text-lg font-semibold mt-2">৳ {car.price} / day</p>
                <p className="text-sm mt-1 text-gray-500">{car.providerName}</p>
                <Link to={`/carDetails/${car._id}`}> <button className='btn mt-2 w-full p-2 rounded-xl btn-primary-gradient'>View Details</button></Link>
            </div>
        </div>
    );
};

export default ShowCarMap;