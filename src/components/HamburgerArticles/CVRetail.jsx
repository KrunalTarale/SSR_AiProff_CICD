import React from 'react';
import backgroundImage from '../assets/Banners/CV/cvinretail.jpg';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Foot/Foot.jsx';
import './HamburgerArticle.css';

function CVRetail() {
  return (
    <div>
      <Navbar />
      <div className="min-w-full flex flex-col article">
        <div
          className="flex w-full xl:h-[35rem] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${"http://localhost:3000/dist/assets/cvinretail-c4b6cbef.jpg"})` }}
        >
          <div className="max-3xl common_padding max-w-5xl ">
            <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl leading-normal md:leading-normal lg:leading-normal font-semibold xl:leading-normal ">
              Revolutionising Retail with Computer Vision Technology
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From cashier-less stores to personalised product recommendations,
              Computer Vision is redefining the way we shop.
            </p>
          </div>
        </div>
        <div className="flex common_padding justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            The retail industry is experiencing a transformational shift through
            the integration of Computer Vision technology. Recent advancements
            in Computer Vision are reshaping how retailers engage with
            customers, optimise operations, and enhance the overall shopping
            experience.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CVRetail;
