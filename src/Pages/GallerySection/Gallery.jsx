import React from 'react';
import img1 from '../../assets/Gallery/5ba44b939c888d16068b4567.webp'
import img2 from '../../assets/Gallery/6424114_sd.jpg'
import img3 from '../../assets/Gallery/9643310_R_SET.jpg'
import img4 from '../../assets/Gallery/Disney_CreativeSoulPrincessDolls.jpg'
import img5 from '../../assets/Gallery/download (1).jpg'
import img6 from '../../assets/Gallery/download (2).jpg'
import img7 from '../../assets/Gallery/download (3).jpg'
import img8 from '../../assets/Gallery/download (4).jpg'
import img9 from '../../assets/Gallery/download (5).jpg'
import img10 from '../../assets/Gallery/download (6).jpg'
import img11 from '../../assets/Gallery/download (7).jpg'
import img12 from '../../assets/Gallery/download (8).jpg'
import img13 from '../../assets/Gallery/embed2_1672932255985_hpEmbed_17x11_608.jpg'
import img14 from '../../assets/Gallery/f04f6a654e614f4dae4797b2c307f548.png'
import img15 from '../../assets/Gallery/Frozen.jpg'
import img16 from '../../assets/Gallery/images (2).jpg'
import img17 from '../../assets/Gallery/images (3).jpg'
import img18 from '../../assets/Gallery/images (4).jpg'
import img19 from '../../assets/Gallery/Top-Disney-World-Quick-Service-Restaurants-To-Visit-This-Year-74.jpg'

const Gallery = () => {
    return (
       <div>
        <h1 className='text-3xl text-center pt-12 pb-3 font-semibold font-serif'>Gallery Section</h1>
        <p className=' text-center pb-12'>Hey, princess! Look some other princess like you..These are also so beautiful and adorable..</p>
         <div className="carousel w-96   mx-auto">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-fit" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide2" className="btn btn-circle btn-outline border-0 ">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide3" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide4" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide5" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide6" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide7" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
        <div id="slide7" className="carousel-item relative w-full">
          <img src={img7} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide8" className="btn btn-circle btn-outline border-0">❯</a>
          </div>e
        </div> 
        <div id="slide8" className="carousel-item relative w-full">
          <img src={img8} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide9" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div>
        <div id="slide9" className="carousel-item relative w-full">
          <img src={img9} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide8" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide10" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
        <div id="slide10" className="carousel-item relative w-full">
          <img src={img10} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide9" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide11" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
        <div id="slide11" className="carousel-item relative w-full">
          <img src={img11} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide10" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide12" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
        <div id="slide12" className="carousel-item relative w-full">
          <img src={img12} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide11" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide13" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div>
        <div id="slide13" className="carousel-item relative w-full">
          <img src={img13} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide12" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide14" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
        <div id="slide14" className="carousel-item relative w-full">
          <img src={img14} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide13" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide15" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
        <div id="slide15" className="carousel-item relative w-full">
          <img src={img15} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide14" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide16" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
        <div id="slide16" className="carousel-item relative w-full">
          <img src={img16} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide15" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide17" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div>
        <div id="slide17" className="carousel-item relative w-full">
          <img src={img17} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide16" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide18" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
        <div id="slide18" className="carousel-item relative w-full">
          <img src={img18} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide17" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide19" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
        <div id="slide19" className="carousel-item relative w-full">
          <img src={img19} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide18" className="btn btn-circle btn-outline border-0">❮</a> 
            <a href="#slide1" className="btn btn-circle btn-outline border-0">❯</a>
          </div>
        </div> 
      </div>
       </div>
    );
};

export default Gallery;