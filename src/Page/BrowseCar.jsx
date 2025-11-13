import React, { useEffect, useState } from 'react';
import ShowCarMap from '../Componetn/Car/ShowCarMap';

const BrowseCar = () => {
    const [carData, setCarData] = useState([])
    const [searchText, setSearchText] = useState('');
    const fillterCar = carData.filter(car=>
        car.name.toLowerCase().includes(searchText.toLowerCase())
    )
    useEffect(() => {
        fetch("https://assigment-10-server-gamma.vercel.app/carDetailsForall")
            .then(res => res.json())
            .then(data => setCarData(data))
    }, [setCarData])
    return (
        <div className='mt-14 w-10/12 mx-auto'>
            <title>Browse Car</title>
            <div className='m-6 md:flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>
                    There are {fillterCar.length} plants here.
                </h1>
                <input
                    type="text"
                    placeholder="Search Cars..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="input input-bordered w-32 md:w-64"
                />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Here Are All  <span className='text-blue-500'>The Cars</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4 place-items-center'>
                {
                    // carData.map(car => <ShowCarMap key={car._id} car={car}></ShowCarMap>)
                    fillterCar.length > 0 ?
                    fillterCar.map(car => <ShowCarMap key={car._id} car={car}></ShowCarMap>) :
                    <p className="text-center col-span-full text-gray-500">No Cars found</p>
                }
            </div>
        </div>
    );
};

export default BrowseCar;