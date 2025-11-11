import React from "react";

const AboutUS = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto py-14 mt-20">
            <title>About US</title>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why Rent <span className="text-blue-500">With Us?</span>
            </h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
                We focus on providing a simple, reliable and secure rental experience
                so that your journey remains stress-free and enjoyable.
            </p>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-7">

             
                <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg duration-300 text-center">
                    <div className="text-4xl mb-3">🚗</div>
                    <h4 className="text-xl font-semibold mb-2">Easy Booking</h4>
                    <p className="text-gray-600 text-sm">Book your desired vehicle in just a few simple steps.</p>
                </div>

               
                <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg duration-300 text-center">
                    <div className="text-4xl mb-3">💰</div>
                    <h4 className="text-xl font-semibold mb-2">Affordable Rates</h4>
                    <p className="text-gray-600 text-sm">We provide competitive pricing that fits your budget.</p>
                </div>

                
                <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg duration-300 text-center">
                    <div className="text-4xl mb-3">🛡️</div>
                    <h4 className="text-xl font-semibold mb-2">Trusted Providers</h4>
                    <p className="text-gray-600 text-sm">All vehicles are listed by verified and reliable owners.</p>
                </div>

                <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg duration-300 text-center">
                    <div className="text-4xl mb-3">📞</div>
                    <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Our support team is always ready to assist you.</p>
                </div>

               
                <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg duration-300 text-center">
                    <div className="text-4xl mb-3">🧼</div>
                    <h4 className="text-xl font-semibold mb-2">Clean & Well-Maintained Cars</h4>
                    <p className="text-gray-600 text-sm">Every vehicle goes through regular inspection & cleaning.</p>
                </div>

              
                <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg duration-300 text-center">
                    <div className="text-4xl mb-3">⚡</div>
                    <h4 className="text-xl font-semibold mb-2">Instant Confirmation</h4>
                    <p className="text-gray-600 text-sm">No waiting — get instant rental confirmation.</p>
                </div>

             
                <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg duration-300 text-center">
                    <div className="text-4xl mb-3">🌍</div>
                    <h4 className="text-xl font-semibold mb-2">Nationwide Availability</h4>
                    <p className="text-gray-600 text-sm">Rent vehicles in multiple cities across the country.</p>
                </div>

              
                <div className="p-6 bg-base-200 rounded-xl shadow hover:shadow-lg duration-300 text-center">
                    <div className="text-4xl mb-3">🔐</div>
                    <h4 className="text-xl font-semibold mb-2">Secure Payments</h4>
                    <p className="text-gray-600 text-sm">Your transactions are fully encrypted & safe.</p>
                </div>

            </div>
        </div>
    );
};

export default AboutUS;

