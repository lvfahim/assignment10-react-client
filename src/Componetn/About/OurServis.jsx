import React from "react";
import { FaCarSide, FaWallet, FaHeadset } from "react-icons/fa";

const OurServis = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto py-16 mt-16">
            <title>Our Services</title>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Our <span className="text-blue-500">Services</span>
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                We provide high-quality vehicle rental services that ensure comfort,
                convenience, and safety throughout your journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Card 1 */}
                <div className="p-8 bg-base-200 rounded-xl shadow-md hover:shadow-xl duration-300 text-center">
                    <FaCarSide className="text-5xl mx-auto text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Wide Vehicle Selection</h3>
                    <p className="text-gray-600 text-sm">
                        Choose from cars, SUVs, bikes, and more—perfect for any travel need.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-8 bg-base-200 rounded-xl shadow-md hover:shadow-xl duration-300 text-center">
                    <FaWallet className="text-5xl mx-auto text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
                    <p className="text-gray-600 text-sm">
                        Transparent and budget-friendly pricing without hidden charges.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-8 bg-base-200 rounded-xl shadow-md hover:shadow-xl duration-300 text-center">
                    <FaHeadset className="text-5xl mx-auto text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                    <p className="text-gray-600 text-sm">
                        Our support team is always ready to assist you at any time.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default OurServis;
