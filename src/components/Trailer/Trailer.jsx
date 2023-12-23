import React from 'react'
import  { useState } from 'react';
import image1 from '../assets/trailer2.jpeg';
import image2 from '../assets/trailer1.jpeg';
import image3 from '../assets/Thumbnail for Animal detection in form land.png'
import image4 from '../assets/updated banner asd.png'
import './Trailer.css';
import { Link } from 'react-router-dom';

const Trailer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredtwo, setIsHoveredtwo] = useState(false);

  // return (
  //   <div>
  //     {/* Row 1 */}

  //     <div className="lg:flex trailer ">
  //       <div className="flex lg:w-1/2">
  //         <img
  //           src="https://aiproff.ai/dist/assets/trailer2-3780cf58.jpeg"
  //           alt="Left"
  //           className="w-full h-auto md:ml-0 md:mr-4 object-cover"
  //         />
  //       </div>
  //       <div className="lg:w-1/2 p-10 lg:space-y-10">
  //         <div>
  //           <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">
  //             From Vision to Reality: How Applied AI is Reshaping Our World!
  //           </h1>
  //         </div>
  //         <div className="mt-4">
  //           {' '}
  //           <p className="leading-loose text-md md:text-xl   text-black">
  //             Explore the world of applied AI, where futuristic dreams are
  //             transforming into real-world solutions. Dive deep into the this
  //             realms of artificial intelligence and deep learning, and see how
  //             it is used in predicting market trends and early disease detection
  //             to driving self-autonomous vehicles.
  //           </p>
  //         </div>
  //         <div className="mt-4">
  //           <p className="text-gray-500 dark:text-gray-400">
  //             <Link
  //               to="/applied-ai"
  //               className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
  //                 isHovered ? 'hovered' : ''
  //               }`}
  //               onMouseEnter={() => setIsHovered(true)}
  //               onMouseLeave={() => setIsHovered(false)}
  //             >
  //               What, why and How of Applied AI
  //               <svg
  //                 className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
  //                   isHovered ? 'translate-x-2' : ''
  //                 }`}
  //                 aria-hidden="true"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 14 10"
  //               >
  //                 <path
  //                   stroke="currentColor"
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth="2"
  //                   d="M1 5h12m0 0L9 1m4 4L9 9"
  //                 />
  //               </svg>
  //             </Link>
  //           </p>

  //           {/* <p className="text-gray-500 dark:text-gray-400 mt-4">
  //             <a
  //               href="#"
  //               className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
  //                 isHoveredtwo ? 'hovered' : ''
  //               }`}
  //               onMouseEnter={() => setIsHoveredtwo(true)}
  //               onMouseLeave={() => setIsHoveredtwo(false)}
  //             >
  //               See how Applied AI is used in AI Based Forecasting [link to
  //               forecasting using AI]
  //               <svg
  //                 className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
  //                   isHoveredtwo ? 'translate-x-2' : ''
  //                 }`}
  //                 aria-hidden="true"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 14 10"
  //               >
  //                 <path
  //                   stroke="currentColor"
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth="2"
  //                   d="M1 5h12m0 0L9 1m4 4L9 9"
  //                 />
  //               </svg>
  //             </a>
  //           </p> */}
  //         </div>
  //       </div>
  //     </div>

  //     <div className="lg:flex flex-row-reverse trailer ">
  //       <div className="flex lg:w-1/2">
  //         <img
  //           src={image3}
  //           alt="Left"
  //           className="w-full h-auto md:ml-0 md:mr-4 object-cover"
  //         />
  //       </div>
  //       <div className="lg:w-1/2 p-10  flex justify-end">
  //         <div className="lg:max-w-3xl lg:space-y-10">
  //           <div>
  //             <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">
  //             Wildlife Intrusion Detection & Prevention in Farmlands using AI-Based Solution
  //             </h1>
  //           </div>
  //           <div className="mt-4">
  //             {' '}
  //             <p className="leading-loose text-md md:text-xl   text-gray-700">
  //             In the heart of India's agriculture landscape lies a pressing concern—wildlife intrusion, a challenge that annually inflicts significant crop damage. As over half of the country's workforce is tied to the primary sector, the repercussions of this challenge resonate far beyond the fields. However, a glimmer of hope emerges in the form of an advanced alarm system that leverages the power of artificial intelligence on the issue of wildlife intrusion.
  //             </p>
  //           </div>
  //           <div className="mt-4">
  //             <p className="text-gray-500 dark:text-gray-400">
  //               <Link
  //                 to="/product1"
  //                 className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
  //                   isHovered ? 'hovered' : ''
  //                 }`}
  //                 onMouseEnter={() => setIsHovered(true)}
  //                 onMouseLeave={() => setIsHovered(false)}
  //               >
  //                 See how AiProff is pioneering a pilot AI-driven initiative to tackle the challenge of wildlife intrusion
  //                 <svg
  //                   className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
  //                     isHovered ? 'translate-x-2' : ''
  //                   }`}
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 14 10"
  //                 >
  //                   <path
  //                     stroke="currentColor"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth="2"
  //                     d="M1 5h12m0 0L9 1m4 4L9 9"
  //                   />
  //                 </svg>
  //               </Link>
  //             </p>

  //             {/* <p className="text-gray-500 dark:text-gray-400 mt-4">
  //               <Link
  //                 to="/nlp/#nlp-benefits:~:text=NLP%20Benefits%20and%20Shortcomings%3A%20Misinformations%20and%20Hallucinationss"
  //                 className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
  //                   isHoveredtwo ? 'hovered' : ''
  //                 }`}
  //                 onMouseEnter={() => setIsHoveredtwo(true)}
  //                 onMouseLeave={() => setIsHoveredtwo(false)}
  //               >
  //                 NLP is now being used to upgrade Computer Vision. Explore How?
  //                 <svg
  //                   className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
  //                     isHoveredtwo ? 'translate-x-2' : ''
  //                   }`}
  //                   aria-hidden="true"
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 14 10"
  //                 >
  //                   <path
  //                     stroke="currentColor"
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth="2"
  //                     d="M1 5h12m0 0L9 1m4 4L9 9"
  //                   />
  //                 </svg>
  //               </Link>
  //             </p> */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Third COmponent                       */}

  //     <div className="lg:flex trailer ">
  //       <div className="flex lg:w-1/2">
  //         <img
  //           src={image4}
  //           alt="Left"
  //           className="w-full h-auto md:ml-0 md:mr-4 object-cover"
  //         />
  //       </div>
  //       <div className="lg:w-1/2 p-10 lg:space-y-10">
  //         <div>
  //           <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">
  //           Therapy Planning for ASD Children using AI: A Data-Driven Journey into AI-Powered Care Planning
  //           </h1>
  //         </div>
  //         <div className="mt-4">
  //           {' '}
  //           <p className="leading-loose text-md md:text-xl   text-gray-700">
  //           India's approach to Autism Spectrum Disorder (ASD) is at a pivotal crossroads. As ASD diagnoses skyrocket across our urban centres, the call for precise, timely, and tailored therapeutic measures has never been louder. But amidst this challenge lies an opportunity—a chance to reimagine ASD care through the lens of cutting-edge AI technology.
  //           </p>
  //         </div>
  //         <div className="mt-4">
  //           <p className="text-gray-500 dark:text-gray-400">
  //             <Link
  //               to="/product2"
  //               className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
  //                 isHovered ? 'hovered' : ''
  //               }`}
  //               onMouseEnter={() => setIsHovered(true)}
  //               onMouseLeave={() => setIsHovered(false)}
  //             >
  //               Explore how AiProff is tackling the Multifaceted Challenges of ASD care using Artificial Intelligence
  //               <svg
  //                 className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
  //                   isHovered ? 'translate-x-2' : ''
  //                 }`}
  //                 aria-hidden="true"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 14 10"
  //               >
  //                 <path
  //                   stroke="currentColor"
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth="2"
  //                   d="M1 5h12m0 0L9 1m4 4L9 9"
  //                 />
  //               </svg>
  //             </Link>
  //           </p>

  //           {/* <p className="text-gray-500 dark:text-gray-400 mt-4">
  //             <a
  //               href="#"
  //               className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
  //                 isHoveredtwo ? 'hovered' : ''
  //               }`}
  //               onMouseEnter={() => setIsHoveredtwo(true)}
  //               onMouseLeave={() => setIsHoveredtwo(false)}
  //             >
  //               Challenges and Risks in Reliable and Robust AI
  //               <svg
  //                 className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
  //                   isHoveredtwo ? 'translate-x-2' : ''
  //                 }`}
  //                 aria-hidden="true"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 14 10"
  //               >
  //                 <path
  //                   stroke="currentColor"
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth="2"
  //                   d="M1 5h12m0 0L9 1m4 4L9 9"
  //                 />
  //               </svg>
  //             </a>
  //           </p> */}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      {/* Row 1 */}

      <div className="lg:flex trailer ">
        <div className="flex lg:w-1/2">
          <img
            src={"https://aiproff.ai/dist/assets/Thumbnail for Animal detection in form land.png"}
            alt="Left"
            className="w-full h-auto md:ml-0 md:mr-4 object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-10 lg:space-y-10">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">
            Wildlife Intrusion Detection & Prevention in Farmlands using AI-Based Solution
            </h1>
          </div>
          <div className="mt-4">
            {' '}
            <p className="leading-loose text-md md:text-xl   text-black">
            In the heart of India's agriculture landscape lies a pressing concern—wildlife intrusion, a challenge that annually inflicts significant crop damage. However, a glimmer of hope emerges in the form of an advanced alarm system that leverages the power of artificial intelligence on the issue of wildlife intrusion.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 dark:text-gray-400">
              <Link
                to="/wildlife-intrusion-detection-system-ai-aiproff"
                className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                  isHovered ? 'hovered' : ''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                See how AiProff is pioneering a pilot AI-driven initiative to tackle the challenge of wildlife intrusion
                <svg
                  className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                    isHovered ? 'translate-x-2' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </p>

            {/* <p className="text-gray-500 dark:text-gray-400 mt-4">
              <a
                href="#"
                className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                  isHoveredtwo ? 'hovered' : ''
                }`}
                onMouseEnter={() => setIsHoveredtwo(true)}
                onMouseLeave={() => setIsHoveredtwo(false)}
              >
                See how Applied AI is used in AI Based Forecasting [link to
                forecasting using AI]
                <svg
                  className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                    isHoveredtwo ? 'translate-x-2' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </p> */}
          </div>
        </div>
      </div>

      <div className="lg:flex flex-row-reverse trailer ">
        <div className="flex lg:w-1/2">
          <img
            src={"https://aiproff.ai/dist/assets/updated banner asd.png"}
            alt="Left"
            className="w-full h-auto md:ml-0 md:mr-4 object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-10  flex justify-end">
          <div className="lg:max-w-3xl lg:space-y-10">
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">
              Therapy Planning for ASD Children using AI: A Data-Driven Journey into AI-Powered Care Planning
              </h1>
            </div>
            <div className="mt-4">
              {' '}
              <p className="leading-loose text-md md:text-xl   text-gray-700">
              India's approach to Autism Spectrum Disorder (ASD) is at a pivotal crossroads. As ASD diagnoses skyrocket across our urban centres, the call for precise, timely, and tailored therapeutic measures has never been louder. But amidst this challenge lies an opportunity—a chance to reimagine ASD care through the lens of cutting-edge AI technology.

              </p>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 dark:text-gray-400">
                <Link
                  to="/product2"
                  className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                    isHovered ? 'hovered' : ''
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Explore how AiProff is tackling the Multifaceted Challenges of ASD care using Artificial Intelligence
                  <svg
                    className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                      isHovered ? 'translate-x-2' : ''
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </p>

              {/* <p className="text-gray-500 dark:text-gray-400 mt-4">
                <Link
                  to="/nlp/#nlp-benefits:~:text=NLP%20Benefits%20and%20Shortcomings%3A%20Misinformations%20and%20Hallucinationss"
                  className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                    isHoveredtwo ? 'hovered' : ''
                  }`}
                  onMouseEnter={() => setIsHoveredtwo(true)}
                  onMouseLeave={() => setIsHoveredtwo(false)}
                >
                  NLP is now being used to upgrade Computer Vision. Explore How?
                  <svg
                    className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                      isHoveredtwo ? 'translate-x-2' : ''
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Third COmponent                       */}

      <div className="lg:flex trailer ">
        <div className="flex lg:w-1/2">
          <img
            src="https://aiproff.ai/dist/assets/trailer2-3780cf58.jpeg"
            alt="Left"
            className="w-full h-auto md:ml-0 md:mr-4 object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-10 lg:space-y-10">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">
              Navigating the AI Landscape: Building Reliable and Robust Systems
            </h1>
          </div>
          <div className="mt-4">
            {' '}
            <p className="leading-loose text-md md:text-xl   text-gray-700">
              Explore the strategies, advantages, challenges, and best practices
              that pave the way to a Relibale and Robust AI Application. Get
              yourself accquaint in the world of reliable and robust AI, where
              innovation meets assurance with trustworthy AI solutions in
              healthcare, finance, and beyond. Discover how to create a future
              where AI is not just a tool, but a reliable partner in shaping
              industries
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 dark:text-gray-400">
              <Link
                to="/reliable-and-robust-ai"
                className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                  isHovered ? 'hovered' : ''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Discover the Check-list on creating an Reliable and Robust AI
                <svg
                  className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                    isHovered ? 'translate-x-2' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </p>

            {/* <p className="text-gray-500 dark:text-gray-400 mt-4">
              <a
                href="#"
                className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                  isHoveredtwo ? 'hovered' : ''
                }`}
                onMouseEnter={() => setIsHoveredtwo(true)}
                onMouseLeave={() => setIsHoveredtwo(false)}
              >
                Challenges and Risks in Reliable and Robust AI
                <svg
                  className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                    isHoveredtwo ? 'translate-x-2' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};



export default Trailer;
