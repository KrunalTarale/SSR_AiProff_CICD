import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Foot/Foot.jsx';
import './HamburgerArticle.css';
import { Helmet } from 'react-helmet';

function RREducational() {
  return (
    <div>

              <Helmet>
                <link href="https://www.aiproff.ai/reliable-and-robust-ai-education" rel="canonical" />
              </Helmet>

      <Navbar />
      <div className="min-w-full flex flex-col article">
        <div className="flex w-full xl:h-[35rem] bg-gradient-to-r from-blue-950 to-blue-500  ">
          <div className="max-3xl common_padding max-w-5xl ">
            <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl leading-normal md:leading-normal lg:leading-normal font-semibold xl:leading-normal ">
              Empowering Educational Institutions with Reliable and Robust AI
              Solutions
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From personalised learning platforms to AI-driven administrative
              tools, AI is transforming how educational institutions operate.
            </p>
          </div>
        </div>
        <div className="flex common_padding justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            Educational institutions are at the forefront of embracing
            artificial intelligence (AI) to enhance teaching, learning, and
            administrative processes. Recent developments in AI technology have
            made it possible to create reliable and robust solutions tailored to
            the unique needs of the education sector.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RREducational;
