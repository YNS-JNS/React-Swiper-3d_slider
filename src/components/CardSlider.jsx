// CardSlider.jsx
import React from 'react';
// import PropTypes from 'prop-types';

const CardSlider = ({ image, name, newPrice, oldPrice }) => {
    return (
        <div className='bg-slate-400 flex flex-col justify-center items-center border rounded-2xl w-full h-auto overflow-hidden py-4 px-1 shadow-md'>
            <a href="#" className="block text-inherit no-underline">
                <div className="text-center text-3xl font-semibold text-black md:text-xl lg:text-2xl">
                    {name}
                </div>
                {/* <figure className="flex justify-center items-center w-full h-96 my-4 bg-transparent"> */}
                <figure className="flex justify-center items-center w-full h-72 my-4 bg-transparent">
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                </figure>
                <div className="flex items-center justify-between text-center text-black text-lg mt-2 md:text-xl lg:text-2xl">
                    <div>
                        <span className="font-semibold text-xl">{newPrice}</span> &nbsp;
                        <small>
                            <del className="text-gray-400">{oldPrice}</del>
                        </small>
                    </div>
                    <div className="text-xl ml-2 md:text-2xl lg:text-3xl mt-2">
                        <span className="badge badge-lg bg-red-600 text-white py-2 px-4 rounded-md md:py-3 md:px-5 lg:py-4 lg:px-6">
                            NEW 🔥
                        </span>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-8 w-full'>
                    <button className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-md text-white font-medium tracking-wider transition w-full'>
                        Buy Now
                    </button>
                </div>
            </a>
        </div>

    );
};

// CardSlider.propTypes = {
//     image: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     newPrice: PropTypes.string.isRequired,
//     oldPrice: PropTypes.string.isRequired,
// };

export default CardSlider;