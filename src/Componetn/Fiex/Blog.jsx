import React from 'react';
import Img1 from '../../assets/download.jpg'
import Img2 from '../../assets/download (1).jpg'
import Img3 from '../../assets/images.jpg'
import {ToastContainer, toast } from 'react-toastify';

const Blog = () => {
    const readme = ()=>{
        toast("It's Not Work")
    }
    return (
        <div className="w-11/12 md:w-10/12 mx-auto py-14">
            <title>Blog</title>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                Latest <span className='text-blue-500'>Blog & News</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              
                <div className="bg-base-200 p-5 rounded-xl shadow-md hover:shadow-lg duration-300">
                    <img
                        className="rounded-lg mb-4 w-full"
                        src={Img1}
                        alt="Car rental"
                    />
                    <h3 className="font-semibold text-xl mb-2">How to Choose the Right Rental Car</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Learn how to pick the perfect car for your trip based on comfort, mileage, and budget.
                    </p>
                    <button onClick={readme} className="btn btn-primary btn-sm">Read More</button>
                </div>

              
                <div className="bg-base-200 p-5 rounded-xl shadow-md hover:shadow-lg duration-300">
                    <img
                        className="rounded-lg mb-4 w-full"
                        src={Img2}
                        alt="Bike rental"
                    />
                    <h3 className="font-semibold text-xl mb-2">Top Benefits of Renting a Car</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Renting a bike offers flexibility, affordability, and freedom—perfect for exploring cities.
                    </p>
                    <button onClick={readme} className="btn btn-primary btn-sm">Read More</button>
                </div>

               
                <div className="bg-base-200 p-5 rounded-xl shadow-md hover:shadow-lg duration-300">
                    <img
                        className="rounded-lg mb-4 w-full "
                        src={Img3}
                        alt="Yacht travel"
                    />
                    <h3 className="font-semibold text-xl mb-2">Experience Luxury with Yacht Rentals</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Discover how renting a yacht can turn any trip into an unforgettable luxury experience.
                    </p>
                    <button onClick={readme} className="btn btn-primary btn-sm">Read More</button>
                </div>
            <ToastContainer />
            </div>
        </div>
    );
};

export default Blog;
