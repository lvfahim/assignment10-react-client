import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const MyListIng = () => {
    const [myData, setMyData] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const { user } = useContext(AuthContext);
    const modalRef = useRef();

    useEffect(() => {
        if (user?.email) {
            fetch(`https://assigment-10-server-gamma.vercel.app/myCarList?email=${user.email}`,{
                headers:{
                    authorization:`Bearer ${user.accessToken}`
                }
            })
                .then(res => res.json())
                .then(data => setMyData(data));
        }
    }, [user]);

    // DELETE
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
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                            setMyData(myData.filter(item => item._id !== _id));
                        }
                    });
            }
        });
    };

    // UPDATE button — open modal
    const updateFrom = (car) => {
        setSelectedCar(car);
        modalRef.current.showModal();
    };

    //  PATCH request on form submit
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedCar = {
            name: form.name.value,
            category: form.category.value,
            price: form.price.value,
        };

        fetch(`http://localhost:5000/carData/${selectedCar._id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedCar),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Updated!", "Car details updated successfully.", "success");
                    // update local state
                    setMyData(prev =>  prev.map(item => item._id === selectedCar._id ? { ...item, ...updatedCar } : item )
                    );
                    modalRef.current.close();
                }
            });
    };

    return (
        <div className="overflow-x-auto p-6 w-9/12 mx-auto h-screen">
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
                                    <button
                                        onClick={() => updateFrom(car)}
                                        className="btn btn-sm btn-outline btn-info"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => {deleteFrom(car._id)}}
                                        className="btn btn-sm btn-outline btn-error"
                                    >
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

            {/* 🧩 UPDATE MODAL */}
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Update Car Info</h3>
                    {selectedCar && (
                        <form onSubmit={handleUpdateSubmit} className="space-y-3">
                            <input
                                type="text"
                                name="name"
                                defaultValue={selectedCar.name}
                                className="input input-bordered w-full"
                                placeholder="Car Name"
                                required
                            />
                            <input
                                type="text"
                                name="category"
                                defaultValue={selectedCar.category}
                                className="input input-bordered w-full"
                                placeholder="Category"
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                defaultValue={selectedCar.price}
                                className="input input-bordered w-full"
                                placeholder="Rent Price"
                                required
                            />

                            <div className="modal-action">
                                <button type="submit" className="btn btn-primary">
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => modalRef.current.close()}
                                >
                                    Close
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </dialog>
        </div>
    );
};

export default MyListIng;
