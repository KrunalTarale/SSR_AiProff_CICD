import React from 'react';
import backgroundImage from '../assets/Banners/FORECASTING/DEMANDFORECASTING.jpg';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Foot/Foot.jsx';
import './HamburgerArticle.css';

function DemandForecasting() {
  return (
    <div>

              <Helmet>
                <link href="https://www.aiproff.ai/ai-demand-forecasting" rel="canonical" />
              </Helmet>

      <Navbar />
      <div className="min-w-full flex flex-col article">
        <div
          className="flex w-full xl:h-[35rem] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${"https://aiproff.ai/dist/assets/DEMANDFORECASTING-721f701d.jpg"})` }}
        >
          <div className="max-3xl common_padding max-w-5xl ">
            <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl leading-normal md:leading-normal lg:leading-normal font-semibold xl:leading-normal ">
              Anticipating Market Trends with Advanced Demand Forecasting
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From predictive analytics to machine learning algorithms, demand
              forecasting has entered a new era of precision.
            </p>
          </div>
        </div>
        <div className="flex common_padding justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            In today's dynamic business landscape, accurate demand forecasting
            is a crucial element for companies to remain competitive and
            responsive to market shifts. Recent advancements in data analytics
            and artificial intelligence have transformed the way businesses
            predict customer demand and optimize their supply chains.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DemandForecasting;
