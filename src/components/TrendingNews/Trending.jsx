import React from 'react'
import { Link } from 'react-router-dom';

const Trending = () => {
  const trendingNews = [
    {
      headline:
        `Google Gemini is not even as good as GPT-3.5 Turbo, researchers find `,
      url: 'https://arxiv.org/pdf/2312.11444.pdf',
    },
    {
      headline: `American drugstore, Rite Aid, banned from using facial recognition software after falsely identifying shoplifters`,
      url: 'https://techcrunch.com/2023/12/20/rite-aid-facial-recognition/?guccounter=1',
    },
    {
      headline: "OpenAI demos a control method for Superintelligent AI",
      url: 'https://cdn.openai.com/papers/weak-to-strong-generalization.pdf',
    },
    {
      headline:
        'Microsoft Research has released "Phi-2," a 2.7 billion-parameter small language model',
      url: 'https://www.microsoft.com/en-us/research/blog/phi-2-the-surprising-power-of-small-language-models/',
    },
    {
      headline:
        'Stability AI releases new model for text-to-3D from a single image',
      url: 'https://stability.ai/news/stable-zero123-3d-generation',
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
