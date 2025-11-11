import React, { useEffect, useState } from 'react';
import ShowCarMap from '../Componetn/Car/ShowCarMap';

const BrowseCar = () => {
    const [carData, setCarData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/carDetailsForall")
            .then(res => res.json())
            .then(data => setCarData(data))
    }, [setCarData])
    return (
        <div className='mt-14 w-10/12 mx-auto'>
            <title>Browse Car</title>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Here Are All  <span className='text-blue-500'>The Cars</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4'>
                {
                    carData.map(car => <ShowCarMap key={car._id} car={car}></ShowCarMap>)
                }
            </div>
        </div>
    );
};

export default BrowseCar;