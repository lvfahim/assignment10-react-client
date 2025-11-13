import React, { useEffect, useState } from 'react';
import ShowCarMap from './ShowCarMap';

const SameCarCard = () => {
    const [carData, setCarData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/carDetails")
            .then(res => res.json())
            .then(data => setCarData(data))
    }, [setCarData])

    return (
        <div className='mt-14'>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Some <span className='text-blue-500'>Expensive Cars</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
              {
                carData.map(car => <ShowCarMap key={car._id} car={car}></ShowCarMap>)
              }
            </div>
        </div>
    );
};

export default SameCarCard;