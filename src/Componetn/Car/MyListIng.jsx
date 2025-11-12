import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const MyListIng = () => {
    const [myData, setMyData] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/myCarList?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyData(data));
        }
    }, [user]);

    const deleteFrom = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carData/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // update state
                            setMyData(myData.filter(item => item._id !== _id));
                        }
                    });
            }
        });

    }

    return (
        <div className="overflow-x-auto p-6 w-9/12 mx-auto">
            <h1 className="text-2xl font-bold mb-4 w-9/12 mx-auto">
                My Car List ({myData.length})
            </h1>

            <table className="table w-9/12 mx-auto border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th>#</th>
                        <th>Car Name</th>
                        <th>Category</th>
                        <th>Rent Price</th>
                        <th>Status</th>
                        <th>Actions</th>
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
                                <td>
                                    <span
                                        className={`px-3 py-1 rounded-full text-white text-sm ${car.status === "available"
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                            }`}
                                    >
                                        {car.status}
                                    </span>
                                </td>
                                <td className='flex gap-4'>
                                    <button className="btn btn-sm btn-outline btn-info mr-2">
                                        Update
                                    </button>
                                    <button onClick={() => { deleteFrom(car._id) }} className="btn btn-sm btn-outline btn-error">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center py-4 text-gray-500">
                                No cars found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyListIng;
