import React from 'react';

const Blog = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto py-14">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                Latest Blog & News
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Blog Card 1 */}
                <div className="bg-base-200 p-5 rounded-xl shadow-md hover:shadow-lg duration-300">
                    <img
                        className="rounded-lg mb-4"
                        src="https://images.unsplash.com/photo-1519643398295-16fcfcec8f54"
                        alt="Car rental"
                    />
                    <h3 className="font-semibold text-xl mb-2">How to Choose the Right Rental Car</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Learn how to pick the perfect car for your trip based on comfort, mileage, and budget.
                    </p>
                    <button className="btn btn-primary btn-sm">Read More</button>
                </div>

                {/* Blog Card 2 */}
                <div className="bg-base-200 p-5 rounded-xl shadow-md hover:shadow-lg duration-300">
                    <img
                        className="rounded-lg mb-4"
                        src=""
                        alt="Bike rental"
                    />
                    <h3 className="font-semibold text-xl mb-2">Top Benefits of Renting a Car</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Renting a bike offers flexibility, affordability, and freedom—perfect for exploring cities.
                    </p>
                    <button className="btn btn-primary btn-sm">Read More</button>
                </div>

                {/* Blog Card 3 */}
                <div className="bg-base-200 p-5 rounded-xl shadow-md hover:shadow-lg duration-300">
                    <img
                        className="rounded-lg mb-4"
                        src=""
                        alt="Yacht travel"
                    />
                    <h3 className="font-semibold text-xl mb-2">Experience Luxury with Yacht Rentals</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Discover how renting a yacht can turn any trip into an unforgettable luxury experience.
                    </p>
                    <button className="btn btn-primary btn-sm">Read More</button>
                </div>

            </div>
        </div>
    );
};

export default Blog;
