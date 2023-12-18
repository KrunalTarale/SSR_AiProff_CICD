import React from 'react'
import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        `ByteDance secretly using OpenAI’s tech to build a competitor, which is seen as a violation of OpenAI's terms of service`,
      url: 'https://www.theverge.com/2023/12/15/24003151/bytedance-china-openai-microsoft-competitor-llm',
    },
    {
      headline: 'Midjourney to launch a new platform for AI image generation',
      url: 'https://venturebeat.com/ai/midjourney-alpha-is-here-with-ai-image-generations-on-the-web/',
    },
    {
      headline: "Intel unveils its new Core Ultra processors for enhancing AI power efficiency and performance capabilities.",
      url: 'https://www.theverge.com/2023/12/14/23998215/intel-core-ultra-cpu-specs-availability',
    },
    {
      headline:
        'ChatGPT’s New Rival: Google’s Gemini ',
      url: 'https://www.kdnuggets.com/chatgpts-new-rival-googles-gemini',
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
