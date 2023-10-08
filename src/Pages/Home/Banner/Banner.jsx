import React, { useEffect } from 'react';
import img from '../../../assets/Images/ezgif.com-webp-to-jpg.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className='relative '>
        <img className='w-full rounded' src={img} alt="" />
       <div className='absolute right-5 top-1/3 text-white left-14 '>
       <h1 className='text-3xl mb-6 font-serif'>Putting the HER in hero</h1>
       <p className=''>Carefully crafted by artists across the Walt Disney company,<br /> each doll from the Disney Designer Collection <br /> celebrates a Disney Princess and her heroic story.</p>
       </div>
    </div>
    );
};

export default Banner;