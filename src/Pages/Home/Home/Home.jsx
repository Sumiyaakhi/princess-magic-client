import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../../GallerySection/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
      <>
       <Banner></Banner>
       <Gallery></Gallery>
       <ShopByCategory></ShopByCategory>
      </>
    );
};

export default Home;