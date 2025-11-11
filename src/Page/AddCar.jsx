import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast , ToastContainer } from 'react-toastify';


const AddCar = () => {
    const { user } = useContext(AuthContext);

    const handleForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const category = form.category.value;
        const price = form.price.value;
        const location = form.location.value;
        const image = form.image.value;
        // console.log(name,description,category,price,location,image)

        const newCar = {
            name,
            description,
            category,
            price,
            location,
            image,
            providerName: user?.displayName,
            providerEmail: user?.email
        };

        fetch("http://localhost:5000/carData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Car added successfully!");
                    form.reset();
                }
            });
    };

    return (
        <div className='mt-16'>
            <title>Add Car</title>
            <h1 className='text-3xl md:text-4xl font-bold text-center mb-10'>
                Create <span className='text-blue-500'>A Car</span>
            </h1>

            <div className="hero pb-14">
                <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold mb-2">Fill Out The Form</h1>

                        <form onSubmit={handleForm}>

                            <label className="label">Car Name :</label> <br />
                            <input type="text" name='name' className="input" required placeholder="Car Name" /><br />

                            <label className="label">Description :</label><br />
                            <textarea name="description" className="textarea" placeholder="Write about the car features in 150 word" required /> <br />

                            <label className="label">Category:</label><br />
                            <select name="category" className="select" required>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Luxury">Luxury</option>
                                <option value="Electric">Electric</option>
                            </select> <br />

                            <label className="label">Rent Price (Per Day) :</label><br />
                            <input type="number" name='price' className="input" placeholder="Price" required /><br />

                            <label className="label">Location :</label><br />
                            <input type="text" name='location' className="input" placeholder="Dhaka, Bangladesh" required /><br />

                            <label className="label">Hosted Image URL :</label><br />
                            <input type="text" name='image' className="input" placeholder="Photo URL" required /><br />

                            <label className="label">Provider Name :</label><br />
                            <input type="text" className="input" value={user?.displayName} readOnly /><br />

                            <label className="label">Provider Email  :</label><br />
                            <input type="email" className="input" value={user?.email} readOnly /><br />

                            <button className="btn btn-primary-gradient w-full mt-4 text-lg">Submit Car</button><br />
                        </form>
                    <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCar;
