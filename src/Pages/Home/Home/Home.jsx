import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../../GallerySection/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import About from '../About/About';
import Sponsor from '../Sponsor/Sponsor';

const Home = () => {
    return (
      <>
       <Banner></Banner>
       <Gallery></Gallery>
       <ShopByCategory></ShopByCategory>
       <About></About>
       <Sponsor></Sponsor>
      </>
    );
};

export default Home;