import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Woman from '../../assets/woman1.jpg'
import Woman2 from '../../assets/woman2.jpg'
import person3 from "../../assets/images (1).jpg";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Experience = () => {
    return (
        <div>
            <div>
                <h1 className="text-center text-4xl font-semibold mt-20">Our <span className="text-blue-500">Service Experience</span></h1>
            </div>
            <div><div className="w-11/12 md:w-10/12 mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE IMAGES */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex flex-col gap-6">
                        <img className="md:w-[227px] w-[348px] h-[340px] md:h-[227px] rounded-2xl" src={Woman} alt="" />
                        <div className="bg-black text-white flex justify-center items-center p-4 py-8 rounded-2xl">
                            <div>
                                <h1 className="text-center text-2xl font-bold">07</h1>
                                <p className="text-center">Years Of <br /> Experience</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="w-[348px] h-[522px] rounded-2xl" src={Woman2} alt="" />
                    </div>
                </div>

                {/* RIGHT SIDE CONTENT */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                        THE BEST CAR RENTAL SERVICE IN THE COUNTRY
                    </h1>

                    <p className="text-gray-600 mt-4 mb-6">
                        Experience the best car rental service in the country! We offer a wide range of well-maintained vehicles, competitive prices, and 24/7 support, ensuring a safe, convenient, and stress-free journey every time.
                    </p>

                    {/* Bullet Points Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {[
                            "Morbi tristique senectus",
                            "A scelerisque purus",
                            "Dictumst vestibulum",
                            "Dio aenean sed adipiscing",
                            "Morbi tristique senectus",
                            "A scelerisque purus",
                            "Dictumst vestibulum",
                            "Dio aenean sed adipiscing",
                        ].map((item, index) => (
                            <p key={index} className="flex items-center gap-2 text-gray-700">
                                <FaCheckCircle className="text-orange-500" /> {item}
                            </p>
                        ))}
                    </div>

                    {/* Button & Founder Info */}
                    <div className="flex items-center gap-6 mt-6">
                        <Link to='/aboutUs'><button data-tooltip-id="infoTip"
                        data-tooltip-content="About more" className="btn bg-blue-500 text-white px-6 hover:bg-black">
                            MORE ABOUT US →
                        </button></Link>
                         <Tooltip id="infoTip" place="top" />
                        <div className="flex items-center gap-3">
                            <img
                                src={person3}
                                alt=""
                                className="w-12 h-12 rounded-full border"
                            />
                            <div>
                                <h1 className="text-4xl font-bold ml-0">
                                    M<span className="text-blue-500">o</span>t
                                    <span className="text-blue-500">o</span>ri
                                    <span className="text-blue-500">o</span>
                                </h1>
                                <p className="text-sm text-gray-600">Carveo Founder</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Experience;