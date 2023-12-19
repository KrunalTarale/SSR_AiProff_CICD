import React from 'react'
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Foot/Foot.jsx';
import { useState, useEffect } from 'react';
import './blog.css';
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

// Blog Images
import image1 from "../assets/thumbnail/applied-ai-4-6538ad3e0b3a8.png";
import image2 from "../assets/thumbnail/reliable-and-robust-ai-1-6538ad3ee3077.png";
import image3 from "../assets/thumbnail/nlp-1-6538ad3dadc12.png";
import image4 from "../assets/thumbnail/computer-vision-3-6538ad3ea0802.png";
import image5 from "../assets/thumbnail/forecasting-6538ad3fb2d70.png";

const Blog = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const articles = [
    {
      title: 'Introduction to NLP: When AI talks',
      subTitle:
        'The field of Artificial intelligence is exciting. Under this discipline of Technology, machines can talk, ',
      imageUrl:"https://aiproff.ai/dist/assets/nlp-1-6538ad3dadc12-a97ea605.png",
      readTime: '4 min',
      date: 'Sept 22, 2023',
      publisher: 'AiProff',
      link: '/introduction-to-nlp'
    },
    {
      title: 'Introduction to Computer Vision: When Machines Start to See',
      subTitle:
        '"A computer deserves to be called intelligent if it could deceive a human into believing that it was human.”',
      imageUrl:"https://aiproff.ai/dist/assets/computer-vision-3-6538ad3ea0802-1accc857.png",
      readTime: '4 min',
      date: 'Sept 22, 2023',
      publisher: 'AiProff',
      link: '/computer-vision'
    },

  ];

  const allarticles = [
    {
      title: 'Applied AI: When AI solves real world problems ',
      subTitle:
        'Artificial Intelligence is a promising technological marvel that holds the key to the future. ',
      imageUrl: "https://aiproff.ai/dist/assets/applied-ai-4-6538ad3e0b3a8-360becaa.png",
      readTime: '3 min',
      date: 'Sept 23, 2023',
      publisher: 'AiProff',
      link : '/applied-ai'
    },
    {
      title: 'Introduction: When AI starts to predict Future',
      subTitle:
        '"Forecasting is the art and science of predicting future events or outcomes based on past and present data.”',
      imageUrl:"https://aiproff.ai/dist/assets/forecasting-6538ad3fb2d70-de5b8000.png",
      readTime: '4 min',
      date: 'Sept 22, 2023',
      publisher: 'AiProff',
      link: '/forecasting-using-ai'
    },
    {
      title: 'Introduction: Reliable and Robust AI',
      subTitle: 'The field of Artificial intelligence (AI) is rapidly evolving.  ',
      imageUrl:"https://aiproff.ai/dist/assets/reliable-and-robust-ai-1-6538ad3ee3077-3e6eec26.png",
      readTime: '4 min',
      date: 'Sept 22, 2023',
      publisher: 'AiProff',
      link: '/reliable-and-robust-ai'
    },
  ]

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      setStatus('Please enter a valid email address');
      return;
    }
    else{
    const res = await fetch('/subscribe_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const data = await res.json();
    if (data) {
      setStatus(data.status);
      setEmail('');
    }
  }
  };

  const topics = [
    {
      name : "Deep Learning",
      link : "/tags/deep-learning"
    },
    {
      name : "Computer Vision",
      link : "/tags/computer-vision"
    },
    {
      name : "Natural Language Processing",
      link : "/tags/natural-language-processing"
    },
    {
      name : "Streaming Data Analytics",
      link : "/tags/streaming-data-analytics"
    },
    {
      name : "Embedded ML",
      link : "/tags/embedded-ml"
    },
    {
      name : "TinyML, Edge AI",
      link : "/tags/tinyml-edge-ai"
    },
    {
      name : "IIOT",
      link : "/tags/iiot"
    },
    {
      name : "Predictive Analytics",
      link : "/tags/predictive-analytics"
    },
    {
      name : "Data Analytics",
      link : "/tags/data-analytics"
    },
    {
      name : "Forecasting (Time Series Analysis)",
      link : "/tags/forecasting"
    },
    {
      name : "Technology Frameworks",
      link : "/tags/technology-frameworks"
    }
  ];

  return (
    <div>

              <Helmet>
                <link href="https://www.aiproff.ai/blog" rel="canonical" />
              </Helmet>

      <Navbar />
      <div className="blog flex flex-col-reverse lg:flex-row items-start justify-center w-full md:mb-14 px-4 xl:px-0">
        <div className="space-y-5 lg:w-3/5 xl:w-2/5 p-4">
          {articles.map((article, idx) => (
            <Link to={article.link} key={idx}>
            <div
            
            className="flex space-x-6 border-b-2 border-black items-start hover:bg-gray-100 p-4 transition duration-200 cursor-pointer"
            >
              <div className="flex-1">
                <div className="text-gray-500 text-sm">
                  {article.date} • by {article.publisher}
                </div>
                <h1 className="text-2xl font-bold mt-2 font-serif">
                  {article.title}
                </h1>
                <p className="text-gray-700 mt-2 ">{article.subTitle}</p>
                <div className="text-sm text-gray-600 mt-2">
                  {article.readTime} read
                </div>
              </div>
              <div>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-48 h-32 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
            </Link>
          ))}

          {allarticles.map((article, idx) => (
             <Link to={article.link} key={idx}>
            <div
            
            className="flex space-x-6 border-b-2 border-black items-start hover:bg-gray-100 p-4 transition duration-200 cursor-pointer"
            >
    
              <div className="flex-1">
             
                <div className="text-gray-500 text-sm">
                  {article.date} • by {article.publisher}
                </div>
           
                <h1 className="text-2xl font-bold mt-2 font-serif">
                  {article.title}
                </h1>
             
                <p className="text-gray-700 mt-2 ">{article.subTitle}</p>
                <div className="text-sm text-gray-600 mt-2">
                  {article.readTime} read
                </div>
               
              </div>
              <div>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-48 h-32 object-cover rounded-lg shadow-md"
                />
              </div>

            </div>
            </Link>
          ))}


          <div className=" p-4  mobile_discover">
            <div>
              <h2 className="text-2xl font-bold">Discover more topics:</h2>
            </div>
            <div className="max-w-screen mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-2 gap-5 pt-6">
              {topics.map((topic, index) => (
                 <Link to={topic.link} key={index} >
                <button
                  className="bg-gray-200 text-black rounded-lg p-2  cursor:pointer hover:bg-blue-600 hover:text-white tag_btn"
                >
                  {topic.name}
                </button>
                </Link>
              ))}
            </div>
          </div>
        </div>


        <div className="space-y-14 flex flex-col-reverse lg:flex-col ">
          <div className="hidden lg:block xl:max-w-md w-full  bg-[#051C2C] text-white p-10 lg:p-20 mt-10 lg:ml-2  ">
            <div className="space-y-5 ">
              <h1 className="text-2xl font-bold text-center">
                Never Miss A Story
              </h1>

              <div className="space-y-4 ">
                <div className="flex justify-center">
                  <h2 className="text-md mb-4 lg:max-w-xs text-center">
                    Stay updated about AiProff news as it happens
                  </h2>
                </div>

                    <p>{status}</p>
                <div className="flex justify-center">
                  <div className="flex text-black">
                    <input
                      type="email"
                      className="px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" p-4  desktop_discover">
            <div>
              <h2 className="text-2xl font-bold">Discover more topics:</h2>
            </div>
            <div className="max-w-screen mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-2 gap-5 pt-6">
              {topics.map((topic, index) => (
                <Link to={topic.link} key={index}>
                <button  
                  className="bg-gray-200 text-black rounded-lg p-2 cursor:pointer hover:bg-blue-600 hover:text-white tag_btn"
                >
                  {topic.name}  
                </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:hidden xl:max-w-md w-full  bg-[#051C2C] text-white p-10 lg:p-20 mt-10 lg:ml-2  ">
        <div className="space-y-5 ">
          <h1 className="text-2xl font-bold text-center">Never Miss A Story</h1>

          <div className="space-y-4 ">
            <div className="flex justify-center">
              <h2 className="text-md mb-4 lg:max-w-xs text-center">
                Stay updated about AiProff news as it happens
              </h2>
            </div>
            <p className='text-center'>{status}</p>
            <div className="flex justify-center">
              <div className="flex text-black">
                <input
                  type="email"
                  className="px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 ">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
