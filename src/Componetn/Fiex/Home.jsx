import React from 'react';
import Banar from './Banar';
import ShowCar from './ShowCar';
import AboutUS from '../About/AboutUS';
import OurServis from '../About/OurServis';
import Experience from './Experience';
import SameCarCard from '../Car/SameCarCard';


const Home = () => {
    return (
        <div className='w-11/12 md:h-10/12 mx-auto'>
            <title>Home</title>
            <div className='w-11/12 md:w-9/12 mx-auto my-14'>
                <Banar></Banar>
            </div>
            <div className='pt-20'>
                <SameCarCard></SameCarCard>
            </div>
            <div className='w-11/12 mx-auto pt-20'>
                <ShowCar></ShowCar>
            </div>
            <div>
                <AboutUS></AboutUS>
            </div>
            <div>
                <Experience></Experience>
            </div>
            <div>
                <OurServis></OurServis>
            </div>
        </div>
    );
};

export default Home;