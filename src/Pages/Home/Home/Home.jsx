import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../../GallerySection/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import About from '../About/About';

const Home = () => {
    return (
      <>
       <Banner></Banner>
       <Gallery></Gallery>
       <ShopByCategory></ShopByCategory>
       <About></About>
      </>
    );
};

export default Home;