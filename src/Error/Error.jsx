import React from 'react';
import Img from '../assets/error-404.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-[150px]'>
                <img src={Img} alt="" />
            </div>
            <h1 className='text-center text-5xl font-semibold mt-4'>Oops, page not found!</h1>
            <p className='text-gray-500 text-xl text-center mt-2'>The page you are looking for is not available.</p>
            <div>
               <Link to='/'> <h1 className='text-center underline text-3xl text-blue-500 rounded-2xl '>GO Home</h1></Link>
            </div>
        </div>
    );
};

export default Error;