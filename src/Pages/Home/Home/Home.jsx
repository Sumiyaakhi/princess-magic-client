import React from 'react';
import img from '../../../assets/Images/ezgif.com-webp-to-jpg.jpg'

const Home = () => {
    return (
        <div className='relative'>
            <img className='w-full' src={img} alt="" />
           <div className='absolute right-5 top-1/3 text-white left-14 '>
           <h1 className='text-3xl mb-6 font-serif'>Putting the HER in hero</h1>
           <p className=''>Carefully crafted by artists across the Walt Disney company,<br /> each doll from the Disney Designer Collection <br /> celebrates a Disney Princess and her heroic story.</p>
           </div>
        </div>
    );
};

export default Home;