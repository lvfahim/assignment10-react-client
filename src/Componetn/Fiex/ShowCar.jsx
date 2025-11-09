import React from 'react';
import Img1 from '../../assets/Img1.jpg'
import Img2 from '../../assets/Img2.jpg'
import Img3 from '../../assets/img3.jpg'
import Img4 from '../../assets/img4 (1).jpg'
const ShowCar = () => {
    return (
        <div className=''>
            <div className='mt-[100px]'>
                <h1 className='text-center text-4xl font-semibold'>Like we have cars.</h1>
            </div>
            <div className='mt-6'>
                <div className="carousel w-full h-[550px] mx-auto">
                    <div id="item1" className="carousel-item w-full">
                        <img
                            src={Img1}
                            className="w-full rounded-xl" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                            src={Img2}
                            className="w-full rounded-xl" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                            src={Img3}
                            className="w-full rounded-xl" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                            src={Img4}
                            className="w-full rounded-xl" />
                    </div>
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </div>
    );
};

export default ShowCar;