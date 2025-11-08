import React from 'react';
import Img from '../assets/error-404.png'

const Error = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-[150px]'>
                <img src={Img} alt="" />
            </div>
            <h1 className='text-center text-5xl font-semibold mt-4'>Oops, page not found!</h1>
            <p className='text-gray-500 text-xl text-center mt-2'>The page you are looking for is not available.</p>
        </div>
    );
};

export default Error;