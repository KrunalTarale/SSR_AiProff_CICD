import React from 'react';
import backgroundImage from '../assets/Banners/FORECASTING/FORECASTINGSTOCKPRICES.jpg';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Foot/Foot.jsx';
import './HamburgerArticle.css';

function ForecastingStockPrices() {
  return (
    <div>
      <Navbar />
      <div className="min-w-full flex flex-col article">
        <div
          className="flex w-full xl:h-[35rem] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${"http://localhost:3000/dist/assets/FORECASTINGSTOCKPRICES-383da882.jpg"})` }}
        >
          <div className="max-3xl common_padding max-w-5xl ">
            <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl leading-normal md:leading-normal lg:leading-normal font-semibold xl:leading-normal ">
              Predicting Stock Prices with Advanced Forecasting Models
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From time series analysis to sentiment analysis of news and social
              media, forecasting stock prices has evolved significantly.
            </p>
          </div>
        </div>
        <div className="flex common_padding justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            The world of finance and investing is increasingly reliant on
            advanced forecasting models to predict stock prices. Recent
            developments in machine learning and data analysis have enabled
            investors and financial professionals to make more informed
            decisions in the dynamic stock market.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForecastingStockPrices;
