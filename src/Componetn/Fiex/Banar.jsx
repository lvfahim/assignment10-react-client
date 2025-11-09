import React from 'react';
import Img from '../../assets/photo-1614200179396-2bdb77ebf81b.jpg'
import { Link } from 'react-router';

const Banar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='w-1/2'>
                <h1 className='mt-6 text-white bg-black p-2 rounded-xl w-[270px]'># Trusted Rental Booking Template</h1>
                <p className='mt-4 font-bold text-4xl text-black'>Dreams Rent – Car, Bike & Yacht Rental Booking Template</p>
                <p className='mt-3 text-gray-500 font-semibold'><span className='text-gray-800'>Dreams Rent </span>is a modern rental booking platform where <span className='text-gray-800'>users can easily</span> rent cars, bikes, and yachts for <span className='text-gray-800'>any occasion.</span> The system is designed to be <span className='text-gray-800'>simple, fast, and convenient</span> so users can browse <span className='text-gray-800'>vehicles, check prices, and book instantly.</span></p>
                <div className='flex gap-4'>
                    <Link to='/aboutUs'><button className='text-white text-xl font-semibold bg-black hover:bg-blue-500 rounded-xl mt-4 p-3'>View More</button></Link>
                    <Link to='/buyCar'><button className='text-white text-xl font-semibold bg-blue-500 hover:bg-black rounded-xl mt-4 p-3'>Buy Car</button></Link>
                </div>
            </div>
            <div className=''>
                <img className='w-[750px] rounded-2xl' src={Img} alt="" />
            </div>
        </div>
    );
};

export default Banar;