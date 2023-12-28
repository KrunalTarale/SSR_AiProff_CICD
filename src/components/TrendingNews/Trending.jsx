import React from 'react'
import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        `New York Times sues OpenAI and Microsoft for 'billions'`,
      url: 'https://www.nytimes.com/2023/12/27/business/media/new-york-times-open-ai-microsoft-lawsuit.html',
    },
    {
      headline: "OpenAI in talks to raise new funding at $100 bln valuation",
      url: 'https://www.reuters.com/technology/openai-talks-raise-new-funding-100-bln-valuation-bloomberg-news-2023-12-22/',
    },
    {
      headline:
        'Scientists discover first new antibiotics in over 60 years using AI ',
      url: 'https://news.mit.edu/2023/using-ai-mit-researchers-identify-antibiotic-candidates-1220',
    },
    {
      headline:
        'Apple quietly released an open-source multimodal LLM, Ferret, in October',
      url: 'https://analyticsindiamag.com/apple-quitely-unveils-open-source-multimodal-llm-ferret/',
    },
  ];

  return (
    <div className="lg:py-3 flex justify-between border-b-2 overflow-x-auto max-h-24">
      <div className="px-2 flex flex-col items-center justify-center lg:w-1/10">
        <span className="font-bold">Trending</span>
        <span className="font-bold">News</span>
      </div>

      <div className="flex lg:w-9/10 ">
        {trendingNews.map((newsItem, index) => (
          <div
            className="flex items-center min-w-[65%] sm:min-w-[50%] min-[760px]:min-w-[45%] lg:min-w-[25%] pr-2 lg:w-1/4"
            key={index}
          >
            <span className="font-bold text-2xl md:text-3xl text-blue-500 mr-2">
              {index + 1}
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl ">|</span>
            <Link
              to={newsItem.url}
              className="hover:underline hover:text-blue-500 ml-2"
              target='_blank'
            >
              <span className="">{newsItem.headline}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
