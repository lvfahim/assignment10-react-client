import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const BuyCar = () => {
    const [myData, setMyData] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assigment-10-server-gamma.vercel.app/myBookingList?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            })
                .then(res => res.json())
                .then(data => setMyData(data));
        }
    }, [user]);

    if (!myData) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Loading></Loading>
            </div>
        );
    }

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
                        <th>location</th>
                        <th>providerName</th>
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
                                <td>{car.location}</td>
                                <td>{car.providerName}</td>
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
