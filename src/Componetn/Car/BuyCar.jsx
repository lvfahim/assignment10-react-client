import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const BuyCar = () => {
    const [myData, setMyData] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/myBookingList?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyData(data));
        }
    }, [user]);

    return (
        <div className="overflow-x-auto p-6 w-9/12 mx-auto h-screen">
            <h1 className="text-2xl font-bold mb-4 w-9/12 mx-auto">
                My Booked Cars ({myData.length})
            </h1>

            <table className="table border border-gray-200 w-9/12 mx-auto">
                <thead className="bg-gray-100">
                    <tr>
                        <th>#</th>
                        <th>Car Name</th>
                        <th>Category</th>
                        <th>Rent Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {myData.length > 0 ? (
                        myData.map((car, index) => (
                            <tr key={car._id} className="border-t">
                                <td>{index + 1}</td>
                                <td>{car.name}</td>
                                <td>{car.category}</td>
                                <td>${car.price}</td>
                                <td><div className='bg-blue-500 w-20 rounded-2xl text-white p-2'>{car.status}</div></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center py-4 text-gray-500">
                                No bookings found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BuyCar;
