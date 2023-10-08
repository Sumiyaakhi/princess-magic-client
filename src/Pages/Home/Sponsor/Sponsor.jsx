import React, { useEffect } from 'react';
import img1 from '../../../assets/sponsors/amazon.png'
import img2 from '../../../assets/sponsors/google.png'
import img3 from '../../../assets/sponsors/spotify.png'
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Sponsor = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        >
           <h1 className='text-4xl text-bold font-serif font-bold text-center'>Our Sponspors</h1> 
           <div className="divider"></div>
           <div className='md:grid grid-cols-3 mx-auto ms-32 my-12'>
<Link to='https://www.amazon.com/'><img src={img1} alt="" /></Link>
           <Link to='https://www.google.com/'> <img src={img2} alt="" /></Link>
            <Link to='https://open.spotify.com/?'><img src={img3} alt="" /></Link>
           </div>
        </div>
    );
};

export default Sponsor;