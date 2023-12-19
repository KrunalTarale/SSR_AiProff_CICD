import React from 'react';
import backgroundImage from '../assets/Banners/Appliedai/Appliedaieducation.jpg';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Foot/Foot.jsx';
import { Helmet } from 'react-helmet';
import './HamburgerArticle.css';

function AppliedaiEducation() {
  return (
    <div>

              <Helmet>
                <link href="https://www.aiproff.ai/applied-ai-education" rel="canonical" />
              </Helmet>

      <Navbar />
      <div className="min-w-full flex flex-col article">
        <div
          className="flex w-full xl:h-[35rem] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${"https://aiproff.ai/dist/assets/Appliedaieducation-efaa0fb7.jpg"})` }}
        >
          <div className="max-3xl common_padding max-w-5xl ">
            <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl leading-normal md:leading-normal lg:leading-normal font-semibold xl:leading-normal ">
              Empowering Education with Applied Artificial Intelligence
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From intelligent tutoring systems to AI-powered assessment tools,
              AI is revolutionizing how students learn and how educators teach.
            </p>
          </div>
        </div>
        <div className="flex common_padding justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            The world of education is undergoing a profound transformation
            thanks to the integration of applied artificial intelligence (AI).
            Recent developments in AI technology have opened up exciting
            possibilities for enhancing learning, personalizing education, and
            optimizing administrative processes.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppliedaiEducation;
