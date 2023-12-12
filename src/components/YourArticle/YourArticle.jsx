import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Foot/Foot.jsx';
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import './YourArticle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

const YourArticle = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [allarticles, setArticles] = useState([]);

  const getArticles = async () => {
    
    const auth = localStorage.getItem('user');
    const user = JSON.parse(auth);

    let res = await fetch('/get_user_article/'+user._id , {
        method: 'GET'
    });
    let data = await res.json();
    setArticles(data[0].articles); 
    
}

  useEffect(() => {
    getArticles();
  })



  const handleSubmit = async () => {
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
  };

  // const topics = [
  //   'Programming',
  //   'Data Science',
  //   'Technology',
  //   'Self Improvement',
  //   'Writing',
  //   'Relationships',
  //   'Machine Learning',
  //   'Productivity',
  //   'Politics',
  // ];

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

  // delete article

  const handelDelete = async (articleId) => {

    const auth = localStorage.getItem("user");
    const user = JSON.parse(auth);

    let res = await fetch("/delete_article", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: user._id,
          article_id : articleId,
        }),
      });
      const data = await res.json();
      console.log(data);
  
  };

  return (
    <div className="min-h-screen flex flex-col h-full YourArticle">

          <Helmet>
              <link href="https://www.aiproff.ai/articles" rel="canonical" />
          </Helmet>

      <div className="flex-shrink-0">
        <Navbar />
      </div>
      <div className="flex justify-center  lg:w-2/5 xl:w-2/6 pt-12 pb-5">
        <h1 className="text-3xl lg:text-4xl font-bold">Your Saved Articles :</h1>
      </div>
      <div className="  flex flex-col-reverse lg:flex-row items-start justify-center w-full md:mb-14  px-4 xl:px-0 bg-white flex-grow">

<div className="space-y-5 lg:w-3/5 xl:w-2/5 p-4">

  {allarticles.length === 0 ? (
    <div className="text-xl font-semibold">You didn't save any articles</div>
  )
   :
 (
    allarticles.map((article, idx) => (

      // <Link to={`/${article.url}`} key={idx}>
      <div className="flex space-x-6 border-b-2 border-black items-start hover:bg-gray-100 p-4 transition duration-200 cursor-pointer" key={idx}>
        <div className="flex-1">
          <div className="text-gray-500 text-sm">
            {article.date}
          </div>
          <Link to={`/${article.url}`}>
          <h1 className="text-2xl font-bold mt-2 font-serif">
            {article.title}
          </h1>
          </Link>
          {/* ... (rest of the article rendering code) ... */}
        </div>
        <div className="del_btn">
          {/* ... (image rendering code) ... */}
          <FontAwesomeIcon icon={faTrash} className="cursor-pointer" onClick={() => handelDelete(article._id)} />
        </div>
      </div>
      // {/* </Link> */}
    
    ))
  )}
</div>


        <div className="space-y-14 flex flex-col-reverse lg:flex-col ">
          <div className=" p-4  ">
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
      </div>

      <div className="flex-shrink-0 md:pt-24 pt-12">
        <Footer />
      </div>
    </div>
  );
};

export default YourArticle;
