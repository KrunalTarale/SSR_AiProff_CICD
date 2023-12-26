import React, { useState, useEffect, useRef } from "react";
import "./Product.css";
import Navbar from "../Navbar/Navbar.jsx";
import { Link,useNavigate } from "react-router-dom";
import Footer from "../Foot/Foot.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faPrint,
  faDownload,
  faSave,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import AudioPlayer from "../AudioPlayer/AudioPlayer";

import image1 from "../assets/product1/image4.png";
import image2 from "../assets/product1/image6.png";
import image3 from "../assets/product1/image13.png";
import image4 from "../assets/product1/image17.png";
// import image5 from "../assets/product1/image15.png";
import image6 from "../assets/product1/image12.png";
import image7 from "../assets/product1/image5.png";
import image8 from "../assets/product1/image11.png";
import image9 from "../assets/product1/image14.png";
import image10 from "../assets/product1/image10.png";
import image11 from "../assets/product1/image16.jpg";
import image12 from "../assets/product1/image2.jpg";
import image13 from "../assets/product1/image1.jpg";
import image14 from "../assets/product1/image3.jpg";
import image15 from "../assets/product1/image7.png";
import image16 from "../assets/product1/image8.jpg";
import image17 from "../assets/product1/image9.jpg";

function shareOnLinkedIn() {
  var url = "https://www.aiproff.ai/wildlife-intrusion-detection-system-ai-aiproff";
  var linkedinUrl =
    "https://www.linkedin.com/sharing/share-offsite/?url=" +
    encodeURIComponent(url);
  window.open(linkedinUrl, "_blank");
}

function shareOnTwitter() {
  // Replace 'your-twitter-share-url' with the URL you want to share on Twitter.
  var url = "https://www.aiproff.ai/wildlife-intrusion-detection-system-ai-aiproff";
  window.open(
    "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url),
    "_blank"
  );
}

function shareOnFacebook() {
  // Replace 'your-facebook-share-url' with the URL you want to share on Facebook.
  var url = "https://www.aiproff.ai/wildlife-intrusion-detection-system-ai-aiproff";
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url),
    "_blank"
  );
}

function shareByEmail() {
  // Replace 'your-email-share-url' with the URL you want to share via email.
  var url = "https://www.aiproff.ai/wildlife-intrusion-detection-system-ai-aiproff";
  window.location.href = "mailto:?body=" + encodeURIComponent(url);
}

const Product1 = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isAudioPlayerVisible, setIsAudioPlayerVisible] = useState(false);
  const [progressdropdownVisible, setprogressDropdownVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isDivVisible, setIsDivVisible] = React.useState(false);
  const imageRef = useRef(null);


  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progressPercentage = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progressPercentage);

      if (imageRef.current && scrollPosition > imageRef.current.offsetHeight) {
        setIsDivVisible(true);
      } else {
        setIsDivVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const Title = "Wildlife Intrusion Detection System: AI-Driven Initiative in Agricultural Security and Reforms";

  const navigate = useNavigate();

  const toggleAudioPlayerVisibility = () => {
    setIsAudioPlayerVisible(!isAudioPlayerVisible);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      // check if the target of the click event is not the dropdown or the share icon
      if (
        dropdownVisible &&
        event.target.closest(".share-icon") === null &&
        event.target.closest(".dropdown") === null
      ) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);


  // Saving the article code

  const [message, setmassage] = useState('');
  const handleSaveArticle = async () => {
    const auth = localStorage.getItem('user');
    const user = JSON.parse(auth);

    if (user) {
      let res = await fetch('/update_article', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          id: user._id,
          article: 'Wildlife',
          title: "AiProff.ai's AI-Driven Initiative in Agricultural Security and Reforms",
          date: 'September 4, 2023',
          url: 'wildlife-intrusion-detection-system-ai-aiproff',
        }),
      });
      const data = await res.json();
      console.log(data);
      setmassage(data.message);

      setTimeout(() => {
        setmassage('');
      }, 2000);
    } else {
      navigate('/login')
      setTimeout(() => {
        setmassage('');
      }, 2000);
    }
  };


  return (
    <>
      <Navbar />


      {isDivVisible ? (
          <div className="fixed article top-0 left-0 w-full h-15 bg-white z-50 border-b-4 transition-all duration-500 transform translate-y-0 space-y-2">
            <div className="max-w-3xl lg:max-w-6xl px-8 lg:px-4 md:mx-auto flex justify-center  md:justify-between items-center pt-4">
              <div>
                <h1 className="hidden md:flex text-xl">
                Wildlife Intrusion Detection & Prevention
                </h1>
              </div>

              <div className="flex space-x-4 ">
                <div className="relative">
                  {' '}
                  <div
                    className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer share-icon-progress"
                    onClick={() =>
                      setprogressDropdownVisible(!progressdropdownVisible)
                    }
                  >
                    <FontAwesomeIcon
                      icon={faShare}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Share</span>
                  </div>
                  {progressdropdownVisible && (
                    <div className="mt-2 p-4 px-6 absolute left-[-50%] ml-3 border-2 rounded shadow-lg bg-white z-10 chat-bubble progress-dropdown">
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer " onClick={shareOnLinkedIn}>
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        Linkedin
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareOnTwitter}>
                        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                        Twitter
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareOnFacebook}>
                        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                        Facebook
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareByEmail}>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                      </div>
                    </div>
                  )}
                </div>

                {/* <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/NLP.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faPrint}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Print</span>
                </div>
                </Link>

                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/NLP.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Download</span>
                  </div>
                </Link> */}

                <div
                  className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer"
                  onClick={handleSaveArticle}
                >
                  <FontAwesomeIcon
                    icon={faSave}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Save</span>
                </div>
              </div>
            </div>

            <div
              id="scrollProgress"
              className="h-1 bg-blue-500 transition-all duration-0 "
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        ) : (
          <div className="fixed article top-0 left-0 w-full h-15 bg-white z-50 border-b-4 transition-all duration-500 transform translate-y-[-100%]">
            <div className="max-w-3xl lg:max-w-6xl px-8 lg:px-4 md:mx-auto flex justify-center  md:justify-between items-center pt-4">
              <div>
                <h1 className="hidden md:flex text-xl">
                Wildlife Intrusion Detection & Prevention
                </h1>
              </div>

              <div className="flex space-x-4 ">
                <div className="relative">
                  {' '}
                  <div
                    className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer share-icon-progress"
                    onClick={() =>
                      setprogressDropdownVisible(!progressdropdownVisible)
                    }
                  >
                    <FontAwesomeIcon
                      icon={faShare}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Share</span>
                  </div>
                  {progressdropdownVisible && (
                    <div className="mt-2 p-4 px-6 absolute left-[-50%] ml-3 border-2 rounded shadow-lg bg-white z-10 chat-bubble progress-dropdown">
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer " onClick={shareOnLinkedIn}>
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        Linkedin
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareOnTwitter}>
                        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                        Twitter
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareOnFacebook}>
                        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                        Facebook
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareByEmail}>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                      </div>
                    </div>
                  )}
                </div>
                {/* <div className="flex flex-col items-center text-center hover:text-blue-500">
                  <FontAwesomeIcon
                    icon={faPrint}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Print</span>
                </div>

                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/NLP+updated.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Download</span>
                  </div>
                </Link> */}

                <div className="flex flex-col items-center text-center hover:text-blue-500">
                  <FontAwesomeIcon
                    icon={faSave}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Save</span>
                </div>
              </div>
            </div>

            <div
              id="scrollProgress"
              className="h-1 bg-blue-500 transition-all duration-0 "
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        )}



      <img
        ref={imageRef}
        src={"https://aiproff.ai/dist/assets/image4-230b51bc.png"}
        alt="graph-economic-impact"
      />

{message && (
            <div
              className="px-3 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg massege_alrt"
              role="alert"
            >
              <p>{message}</p>
            </div>
          )}

      <div className="constent-block">
        <div className="md:flex md:justify-between md:w-4/5 space-y-8 md:space-y-0 mt-10 mb-10">
          <div className="underline underline-offset-4">
            <Link to="/">By AiProff</Link>
          </div>
          <div>
            {isAudioPlayerVisible ? (
              <AudioPlayer
                audio="/audio_files/Wildlife_aiproff.mp3"
                onClose={toggleAudioPlayerVisibility}
                Title={Title}
              />
            ) : (
              <button
                className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-400"
                onClick={toggleAudioPlayerVisibility}
              >
                <FontAwesomeIcon icon={faPlay} className="mr-2" />
                Play
              </button>
            )}
          </div>
          <div className="flex space-x-4">
            <div className="relative">
              <div
                className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer share-icon"
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                <FontAwesomeIcon
                  icon={faShare}
                  className="hover:text-blue-500 cursor-pointer"
                />
                <span className="text-sm">Share</span>
              </div>
              {dropdownVisible && (
                <div className="mt-2 p-4 px-6 absolute left-[-50%] ml-3 border-2 rounded shadow-lg bg-white z-10 chat-bubble dropdown">
                  <div
                    className="flex items-center py-1 hover:bg-blue-100 cursor-pointer"
                    onClick={shareOnLinkedIn}
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                    Linkedin
                  </div>
                  <div
                    className="flex items-center py-1 hover:bg-blue-100 cursor-pointer"
                    onClick={shareOnTwitter}
                  >
                    <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                    Twitter
                  </div>
                  <div
                    className="flex items-center py-1 hover:bg-blue-100 cursor-pointer"
                    onClick={shareOnFacebook}
                  >
                    <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                    Facebook
                  </div>
                  <div
                    className="flex items-center py-1 hover:bg-blue-100 cursor-pointer"
                    onClick={shareByEmail}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    Email
                  </div>
                </div>
              )}
            </div>

            {/* <Link
              to="https://ingestionpeekai.s3.amazonaws.com/Applied+AI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              // onClick={handlePrintClick}
            >
              <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                <FontAwesomeIcon
                  icon={faPrint}
                  className="hover:text-blue-500 cursor-pointer"
                />
                <span className="text-sm">Print</span>
              </div>
            </Link>

            <Link
              to="https://ingestionpeekai.s3.amazonaws.com/Applied+AI.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                <FontAwesomeIcon
                  icon={faDownload}
                  className="hover:text-blue-500 cursor-pointer"
                />
                <span className="text-sm">Download</span>
              </div>
            </Link> */}

            <div
              className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer"
              onClick={handleSaveArticle}
            >
              <FontAwesomeIcon
                icon={faSave}
                className="hover:text-blue-500 cursor-pointer"
              />
              <span className="text-sm">Save</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6 mt-6">
          Wildlife Intrusion Detection & Prevention in Farmlands using AI-Based
          Solution
        </h1>

        <h1 className="text-2xl font-bold mb-6">
          AiProff.ai's AI-Driven Initiative in Agricultural Security and Reforms
        </h1>

        <p>
          India is an agriculture-driven country. More than half of the Indian
          workforce is being employed directly by the primary sector. Moreover,
          India ranks second worldwide in terms of farm outputs, where the
          agriculture sector contributes nearly 20.2% to the country’s GDP.
        </p>

        <p>
          However, while there is a strong focus on improving crop yield,
          production and productivity in general, India's agricultural sector
          grapples with multifaceted challenges. One of them is wildlife
          intrusion, which leads to substantial crop damage every year. Wild
          animals – such as elephants, wild boars, cows, monkeys and deer – tend
          to migrate to nearby agricultural fields in search of food, causing
          huge damage to the crops; not only by eating but also by trampling the
          crops by foot. In some states like Coastal Odisha, the extent of crop
          damage due to wildlife has been recorded to 50-60%,{" "}
          <Link
            to="https://ieeexplore.ieee.org/document/9429026/"
            target="_blank"
            className="text-blue-600"
          >
            and sometimes even 100%.
          </Link>
        </p>

        <p>
          Predominantly, regions like Uttar Pradesh, Uttarakhand, and Haryana
          bear witness to these challenges, with farmers facing severe economic
          and emotional repercussions.
        </p>

        {/* <p>
          In a pioneering effort, AiProff.ai has initiated a pilot AI-based
          solution in the village of Nagla Jagrupa (Mathura District, Uttar
          Pradesh), aiming to evaluate and refine a scalable, eco-friendly
          approach to agricultural security – harnessing the power of AI.
        </p> */}

        <h1 className="text-2xl font-bold mb-6">
          The Agricultural Challenge: A Glimpse of Reality
        </h1>

        <p>
          Farmers nationwide have consistently reported extensive crop damage
          caused due to wildlife. This, as stated earlier, results not only in
          financial losses amounting to crores (10s of millions) over the years
          but also increases emotional tolls on the farmers. Understanding such
          recurrent incidents, the Indian government annually announces
          compensations to these farmers while also devising strategies to
          counteract the market shortages arising from these unforeseen
          agricultural disruptions.{" "}
        </p>

        <h1 className="text-2xl font-bold mb-6">
          Key statistics further underscore the gravity of the challenge at
          hand:
        </h1>

        <div>
          <div className="upper-cards">
            <div>
              <div className="product-card">
                <div className="product-img-div">
                  <img
                    src={"https://aiproff.ai/dist/assets/image6-8db3f318.png"}
                    className="product-img"
                    alt="This is image 2"
                  />
                </div>
                <ul className="prod-list mb-6 mt-6">
                  <li>
                    <b>1.65 Cr (~200,000 USD– </b> Compensation in 2022, in
                    Coimbatore Region.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="product-card">
                <div className="product-img-div">
                  <img
                    src={"https://aiproff.ai/dist/assets/image13-6b8da3a9.png"}
                    className="product-img"
                    alt="This is image 3"
                  />
                </div>
                <ul className="prod-list mb-6 mt-6">
                  <li>
                    {" "}
                    <b> 32,500 / hectare – </b> Government declared compensation
                    for 50% damage to crops.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="product-card">
                <div className="product-img-div">
                  <img
                    src={"https://aiproff.ai/dist/assets/image17-f878e49f.png"}
                    className="product-img"
                    alt="This is image 4"
                  />
                </div>
                <ul className="prod-list mb-6 mt-6">
                  <li>
                    <b> 50000+ – </b> Incidents of crop damage by wildlife
                    animals annually in India.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p>
          In recent years, the problem of crop damage caused by wildlife has
          become increasingly severe. In Uttar Pradesh, where a significant
          portion of the population depends on agriculture for their livelihood,
          it is a{" "}
          <Link
            to="https://www.indiatoday.in/india/story/stray-animals-crops-up-districts-goshalas-non-starters-1898440-2022-01-10"
            target="_blank"
            className="text-blue-600"
          >
            “common sight”
          </Link>{" "}
          to see wild animals destroying crops. This issue is particularly
          prevalent in the districts of Siddharthnagar, Gorakhpur, and
          Sultanpur.
        </p>

        <p>
          Moreover, the issue of wildlife intrusion is not limited to
          agriculture. According to a report by{" "}
          <Link
            to="https://www.hindustantimes.com/cities/pune-news/rising-human-wildlife-conflict-in-pune-341-incidents-and-23-58-lakh-compensation-for-losses-101691001855853.html"
            target="_blank"
            className="text-blue-600"
          >
            {" "}
            Pune Forest Division{" "}
          </Link>
          , human-wildlife conflicts in Pune are steadily increasing. Nearly 341
          incidents of losses were reported between April 2022 and March
          2023.Pune is a state in India that is one of the leading producers of
          rice, which is the staple food in the region.
        </p>

        <p>
          As a result of the increasing severity of crop damage caused by
          wildlife, the government has announced compensation and measures to
          absorb the shortage created in the market due to these unexpected
          events. The Central government has even allowed States to notify{" "}
          <Link
            to="https://www.thehindubusinessline.com/economy/agri-business/states-asked-to-notify-crop-losses-due-to-wild-animal-attacks-as-add-on-cover/article67184040.ece"
            target="_blank"
            className="text-blue-600"
          >
            {" "}
            losses to crops due to wild animal attacks{" "}
          </Link>
          , making this as an add-on cover to the existing PM crop insurance
          scheme. The scheme aims to provide financial protection to farmers
          against crop loss due to natural disasters, pests, and diseases.
        </p>

        <h1 className="text-2xl font-bold mb-6">
          Introduction to AiProff.ai's Pilot Initiative
        </h1>

        <p>
          At Aiproff.ai, we strongly believe that Technology augmented with
          Artificial Intelligence can be a way to address this pressing issue.{" "}
        </p>

        <p>
          Under the leadership of Senior Data Scientist{" "}
          <Link
            to="https://www.linkedin.com/in/nitinsaraswat/"
            target="_blank"
            className="text-blue-600"
          >
            Nitin Saraswat{" "}
          </Link>
          , AiProff.ai is pioneering a pilot AI-driven initiative to tackle the
          challenge of wildlife intrusion in agriculture. This initiative aims
          to assess the viability, efficacy, and scalability of leveraging AI
          technologies to address agricultural disruptions.
        </p>

        <p>
          We propose an innovative AI-based solution designed not only to deter
          wildlife but also to preserve ecological balance, devoid of any
          harmful interventions or adverse outcomes.
        </p>

        {/* <p>
          The focal point of this initiative is Nagla Jagrupa (Post Sikanderpur,
          Distt. Mathura), highlighted by a prominent red circle in the
          following map.
        </p> */}

        {/* <img
          src={image5}
          className="w-full open-images mb-6"
          alt="graph-economic-impact"
        /> */}

        {/* <p>
          Similar to neighbouring villages, Nagla Jagrupa has endured
          significant agricultural losses due to wildlife intrusion over the
          years.
        </p> */}

        <p>
          Our proposed solution targets a 1-hectare agricultural plot and
          operates seamlessly both during daylight and nighttime. Prioritising
          economic viability and ecological sustainability, our pilot solution
          is designed for scalable implementation across diverse geographical
          regions.
        </p>
        <p>
          Furthermore, it lays the foundation for integrating various AI-based
          image and video analytics applications tailored for agricultural
          landscapes.{" "}
        </p>
        <p>
          Building upon this foundation, it becomes crucial to examine the
          existing solutions, assess the failures of these solutions, and refine
          our approach based on that.
        </p>
        <p>
          Let's delve deeper into addressing the limitations of current
          methodologies and crafting a robust pilot solution tailored for
          sustainable agricultural advancement.
        </p>

        <h1 className="text-2xl font-bold mb-6">
          Addressing Limitations of Current Solutions & Crafting a Pilot
          Solution
        </h1>

        <p>
          The persistent issue of wildlife intrusion in agricultural regions
          over the years has led to the development of various solutions. Each
          solution has its own set of challenges and limitations.
        </p>

        <p>
          In India, the following are the three primary methodologies that are
          currently being employed – clutch wires with a 10V battery, barbed
          wire installations, and manual surveillance by farmers.
        </p>

        <div className="vertical-paragraph mb-6">
          <div>
            <img
              src={"https://aiproff.ai/dist/assets/image12-e2197fce.png"}
              alt="This is image"
            />
          </div>

          <div>
            <p>
              <b>Clutch Wire with 10V Battery:</b> This approach involves
              installing wires that deliver electric shocks to animals upon
              contact. While effective to an extent, it poses significant risks,
              including potential harm to humans. Challenges associated with
              this method include the frequent need for reinstallation,
              escalating costs, and safety concerns, particularly for children
              and smaller animals.
            </p>
          </div>
        </div>

        <div className="vertical-paragraph mb-6">
          <div className="div-1">
            <p>
              <b>Barbed Wire Installations:</b> Utilising barbed wires as a
              restraint has its drawbacks, notably the recurring labour and
              material costs associated with regular installations and removals.
              Given the seasonal nature of agricultural activities, the constant
              uprooting of these barriers proves both time-consuming and
              labour-intensive, posing additional challenges to farmers.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <img
              src={"https://aiproff.ai/dist/assets/image5-0fb937c9.png"}
              alt="This is image"
            />
          </div>

          <div className="div-2">
            <p>
              <b>Barbed Wire Installations:</b> Utilising barbed wires as a
              restraint has its drawbacks, notably the recurring labour and
              material costs associated with regular installations and removals.
              Given the seasonal nature of agricultural activities, the constant
              uprooting of these barriers proves both time-consuming and
              labour-intensive, posing additional challenges to farmers.
            </p>
          </div>
        </div>

        <div className="vertical-paragraph mb-6">
          <div>
            <img
              src={"https://aiproff.ai/dist/assets/image11-6099b450.png"}
              alt="This is image"
            />
          </div>

          <div>
            <p>
              <b>Manual Farmer Surveillance:</b> Perhaps the most inefficient
              and perilous of all solutions, this method necessitates farmers to
              physically monitor their fields, rendering them susceptible to
              wildlife encounters, adverse weather conditions, and other
              hazards. This not only jeopardises the safety of farmers but also
              lacks scalability, as it demands continuous human intervention
              without offering a sustainable, long-term solution.
            </p>
          </div>
        </div>

        <p>
          Upon evaluating the prevailing solutions, a common thread of
          challenges emerges: the recurring need for manual intervention,
          escalating costs, safety concerns, and limited scalability.{" "}
        </p>

        <p>
          Whether it's the frequent reinstallation of clutch wires, the
          labour-intensive nature of barbed wire setups, or the inherent risks
          associated with manual farmer surveillance, these methods collectively
          underscore the need for a more innovative and sustainable approach.
        </p>

        <p>
          It becomes evident that there is a pressing need for a solution that
          not only addresses these challenges but also leverages advanced
          technologies to redefine agricultural security.{" "}
        </p>

        <p>
          That’s where AiProff comes into the picture. Let’s delve into the
          objectives and methodological framework of our pioneering AI-driven
          initiative.
        </p>

        <h1 className="text-2xl font-bold mb-6">
          Objectives & Methodological Overview
        </h1>

        <p>
          At the heart of our endeavour lies a steadfast commitment to
          strengthen the financial security of Indian farmers through innovative
          technological interventions.
        </p>

        <p>
          To realise this goal, we have laid out three pivotal objectives that
          encapsulate the essence of our solution:
        </p>

        <div></div>
      </div>

      <div className="lower-cards mb-6 mt-6s">
        <div>
          <div className="lower-product-card">
            <div className="lower-product-img-div">
              <img
                src={"https://aiproff.ai/dist/assets/image14-7437a9ad.png"}
                className="lower-product-img"
                alt="This is image 2"
              />
            </div>
            <ul className="lower-prod-list mb-6 mt-6">
              <li>
                <b>Inbound and Outbound Detection of Wild Animals:</b> Central
                to our approach is the nuanced detection of wild animals,
                achieved through AI model training. By analysing animal
                movements, we aim to detect whether they are approaching the
                farmland or merely lingering on its periphery, thereby enabling
                timely interventions.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="lower-product-card">
            <div className="lower-product-img-div">
              <img
                src={"https://aiproff.ai/dist/assets/image10-c4e7c048.png"}
                className="lower-product-img"
                alt="This is image 3"
              />
            </div>
            <ul className="lower-prod-list mb-6 mt-6">
              <li>
                <b>Animal Detector Alarm System: </b> Our system is engineered
                to activate alarms when an animal ventures within a critical
                threshold—specifically when it is approximately two feet from
                the farmland perimeter. Leveraging sophisticated audio-visual
                parameters, we aspire to create a restraint that maximises the
                likelihood of driving the animal away from the cultivated area.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="lower-product-card">
            <div className="lower-product-img-div">
              <img
                src={"https://aiproff.ai/dist/assets/image16-62a01193.jpg"}
                className="lower-product-img"
                alt="This is image 4"
              />
            </div>
            <ul className="lower-prod-list mb-6 mt-6">
              <li>
                <b>Monitoring & Feedback:</b> Beyond mere detection, our
                solution incorporates advanced AI/ML capabilities to monitor
                animal movements post-alarm activation. This iterative approach
                enables us to deploy additional alarms strategically, ensuring
                that the animal's exit from the farmland is both expedient and
                definitive.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="constent-block">
        <p>
          As we navigate through the subsequent phases of development and
          implementation, these objectives will serve as the cornerstone of our
          efforts.{" "}
        </p>

        <h1 className="text-2xl font-bold mb-6">
          Solution Design: Core Concept, Components and Features
        </h1>

        <p>
          In crafting this robust solution, our approach prioritises a blend of
          technological prowess and eco-system responsibility.{" "}
        </p>

        <p>
          Through a combination of proprietary algorithms, specialised hardware
          configurations, and user-centric interfaces, we aim to deliver an
          unparalleled agricultural security solution that is both effective and
          sustainable.
        </p>

        <h1 className="text-2xl font-bold mb-6">
          Phase 1: Initial Deployment and Monitoring
        </h1>

        <p>
          The first stage focuses on the seamless deployment and vigilant
          monitoring of our specialised equipment.
        </p>
      </div>

      <div>
        <div className="lower-cards mb-6 mt-6s">
          <div>
            <div className="lower-product-card">
              <div className="lower-product-img-div">
                <img
                  src={"https://aiproff.ai/dist/assets/image2-960128d2.jpg"}
                  className="lower-product-img"
                  alt="This is image 2"
                />
              </div>
              <ul className="lower-prod-list mb-6 mt-6">
                <li>
                  <b>Tailored Camera Configuration:</b> In the pilot phase,
                  specialised cameras with unique configurations are deployed
                  across targeted farmland areas, ensuring comprehensive
                  coverage without compromising operational efficiency.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="lower-product-card">
              <div className="lower-product-img-div">
                <img
                  src={"https://aiproff.ai/dist/assets/image1-c0f6d6fe.jpg"}
                  className="lower-product-img"
                  alt="This is image 3"
                />
              </div>
              <ul className="lower-prod-list mb-6 mt-6">
                <li>
                  <b>Intelligent Threat Detection:</b> Leveraging proprietary
                  algorithms, the system identifies and captures relevant video
                  clips featuring potential wildlife threats and intrusion.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="lower-product-card">
              <div className="lower-product-img-div">
                <img
                  src={"https://aiproff.ai/dist/assets/image3-3af06677.jpg"}
                  className="lower-product-img"
                  alt="This is image 4"
                />
              </div>
              <ul className="lower-prod-list mb-6 mt-6">
                <li>
                  <b>Secure Mobile Application Interface:</b> A dedicated mobile
                  application provides authorised users (farmers) with secure
                  access to real-time video feeds and actionable insights. The
                  clips attained undergo immediate processing to enable rapid
                  response protocols while minimising data transmission
                  overhead.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="constent-block">
        <h1 className="text-2xl font-bold mb-6">
          Phase 2: Continuous Improvement and Adaptation
        </h1>
        <p>
          The next stage deals with iterative refinement and adaptive
          enhancement, ensuring sustained effectiveness and relevance.
        </p>

        <div>
          <div className="upper-cards">
            <div>
              <div className="lowest-product-card">
                <div className="product-img-div">
                  <img
                    src={"https://aiproff.ai/dist/assets/image7-0f2f9da8.png"}
                    className="product-img"
                    alt="This is image 2"
                  />
                </div>
                <ul className="prod-list mb-6 mt-6">
                  <li>
                    <b>Localised AI Enhancement:</b> The AI algorithms are
                    continuously refined using EDGE computing, enhancing their
                    ability to discern genuine threats from false positives,
                    thereby ensuring reliable performance in dynamic
                    environments.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="lowest-product-card">
                <div className="product-img-div">
                  <img
                    src={"https://aiproff.ai/dist/assets/image8-967017c9.jpg"}
                    className="product-img"
                    alt="This is image 4"
                  />
                </div>
                <ul className="prod-list mb-6 mt-6">
                  <li>
                    <b>Adaptive Alert Mechanisms:</b> Based on ongoing
                    assessments and feedback, the alert parameters are
                    dynamically adjusted to optimise effectiveness while
                    mitigating potential deterrent habituation in targeted
                    wildlife populations.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-6">Implementation Overview</h1>

        <p>
          Navigating the complexities of solution deployment, the implementation
          phase is characterised by strategic planning, meticulous execution,
          and continuous monitoring.
        </p>

        <ol className="list-decimal list-inside">
          <li>
            <b>Customised Solution Development:</b> The initial phase focuses on
            designing a bespoke solution tailored to the unique challenges and
            requirements of the agricultural landscape, ensuring a distinct
            competitive advantage.
          </li>

          <li>
            <b>Strategic Deployment:</b> Following comprehensive testing and
            validation, the solution is strategically deployed across select
            farmland areas, leveraging proprietary installation methodologies to
            maximise efficacy and minimise detection vulnerabilities.
          </li>

          <li>
            <b>Performance Monitoring and Iterative Refinement:</b>{" "}
            Post-deployment, the system undergoes rigorous performance
            evaluations, with insights gleaned used to inform iterative
            refinements and enhancements, safeguarding our technological edge in
            the market.
          </li>
        </ol>

        <p>
          As we navigate this multifaceted landscape of innovation and
          implementation, our focus extends beyond mere deployment to the
          critical phase of evaluation. The effectiveness of our solution hinges
          on its tangible impact and operational efficiency, which we
          meticulously measure against predefined metrics.
        </p>

        <p>
          Let’s now delve into the comprehensive metrics and methodologies
          employed to gauge the success of our pilot initiative, offering
          insights into its real-world performance and the actionable
          intelligence derived for future enhancements.
        </p>

        <h1 className="text-2xl font-bold mb-6">
          Evaluation Metrics: Assessing the Success
        </h1>

        <p>
          The effectiveness of our solution will be rigorously evaluated against
          a set of predefined success criteria, designed to measure its
          performance and impact.
        </p>
        <p>
          Additionally, we have identified key advantages inherent to our
          technical solution that further underscore its viability and value
          proposition.
        </p>

        <p>The success will be evaluated based on the following metrics:</p>

        <ol className="list-decimal list-inside">
          <li>
            <b>Precision in Threat Detection: </b> A primary metric will be the
            reduction of false positives, ensuring accurate identification of
            wild animals and their trajectories.
          </li>

          <li>
            <b>Efficiency in Animal Deterrence:</b> The solution's efficacy will
            also be measured by its ability to prompt wild animals to vacate the
            protected area upon alarm activation.
          </li>

          <li>
            <b>Economic Viability: </b> A pivotal aspect of our evaluation will
            be the cost-effectiveness of maintaining the solution on a monthly
            basis, ensuring sustainable deployment without undue financial
            burden.
          </li>
        </ol>

        <h1 className="text-2xl font-bold mb-6">
          Advantages of Current Technical Solution
        </h1>

        <ol className="list-decimal list-inside">
          <li>
            <b>Operational Continuity:</b> Our solution is designed to integrate
            seamlessly with existing farmland operations, minimising disruptions
            and ensuring a smooth implementation.
          </li>
          <li>
            <b>Scalability:</b>Once deployed, the system architecture
            facilitates easy replication across diverse agricultural landscapes,
            offering scalability without compromising efficiency.
          </li>
          <li>
            <b>Sustainability:</b>Leveraging solar power, our solution aligns
            with eco-friendly practices, offering a sustainable alternative to
            traditional energy sources.
          </li>
          <li>
            <b>Cost Efficiency at Scale:</b>As the solution is scaled across
            larger areas or similar use cases, it demonstrates a compelling cost
            advantage, further enhancing its appeal.
          </li>
          <li>
            <b>Real-Time Monitoring and Control:</b>The inclusion of a mobile
            application enables farmers to monitor the system in real-time,
            providing them with actionable insights and control over the
            security parameters.
          </li>
          <li>
            <b>Eco-Compatible Design:</b>In alignment with environmental
            considerations, our solution is designed to operate in harmony with
            existing ecosystems, reflecting our commitment to responsible
            innovation.
          </li>
        </ol>

        <h1 className="text-2xl font-bold mb-6">Insights & Future Prospects</h1>

        <img
          src={"https://aiproff.ai/dist/assets/image9-aadff054.jpg"}
          className="w-full mb-6"
          alt="this is image"
        />

        <p>
          As we reflect on the journey thus far, several insights emerge that
          not only validate the efficacy of our current solution but also
          illuminate potential avenues for future innovation and expansion.
        </p>

        <h1 className="text-2xl font-bold">Key Insights:</h1>

        <ul className="list-disc">
          <li>
            <b>Data-Driven Decision-Making:</b>The pilot phase has underscored
            the importance of data analytics in refining threat detection
            algorithms, highlighting the need for ongoing data collection and
            analysis to enhance system accuracy.
          </li>
          <li>
            <b>Community Engagement:</b>The positive reception from local
            farmers emphasises the importance of community involvement in
            shaping effective and sustainable solutions tailored to specific
            agricultural landscapes.
          </li>
          <li>
            <b>Adaptive Technology:</b>The dynamic nature of wildlife behaviour
            necessitates a flexible and adaptive technological framework,
            capable of evolving in response to emerging challenges and
            opportunities.
          </li>
        </ul>

        <h1 className="text-2xl font-bold">Future Prospects:</h1>

        <ul className="list-disc">
          <li>
            <b>Advanced AI Integration:</b>Leveraging advanced AI capabilities,
            future iterations could incorporate predictive analytics to
            anticipate potential threats based on historical data and
            environmental factors.
          </li>
          <li>
            <b>IoT Integration:</b>Integration with Internet of Things (IoT)
            devices could further enhance real-time monitoring capabilities,
            providing a more comprehensive view of agricultural security
            metrics.
          </li>
          <li>
            <b>Collaborative Partnerships:</b>Establishing strategic
            partnerships with environmental agencies and research institutions
            could facilitate the development of eco-friendly solutions that
            balance agricultural needs with wildlife conservation objectives.
          </li>
        </ul>

        <h1 className="text-2xl font-bold">Conclusion</h1>

        <p>
          While our current solution marks a significant step forward in
          addressing agricultural security challenges, the path ahead is rich
          with opportunities to leverage emerging technologies and collaborative
          approaches.
        </p>

        {/* <img
          src="https://aiproff.ai/dist/assets/logo-e9bcf11e.png"
          alt="This is image"
        /> */}

        <p>
          AiProff.ai is confident that this initiative will catalyse a
          transformative shift in Indian agriculture through the synergy of
          Artificial Intelligence and technological innovation.
        </p>

        <p>
          By staying agile, innovative, and committed to our mission, we are
          well-positioned to shape a more resilient and sustainable future for
          agriculture, where technology and ecology coexist harmoniously.
        </p>

        <p>
          <b>
            Interested in knowing more about AiProff’s reliable and robust
            solutions? Click here to have a walkthrough of the system{" "}
          </b>
        </p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded newbtn">
          <Link to="/contact">Contact Us</Link>
        </button>

        <p className="mt-5">
          <i>
            AiProff.ai excel at creating state-of-the-art AI/ML based solutions
            for Government, SMB, Large Enterprises and Academic Institutions.{" "}
            <b>
              {" "}
              Owing to our cost efficient and optimal approach we are able to
              lower{" "}
            </b>{" "}
            the entry barrier for organisations of all sizes for leveraging
            cutting edge AI/ML solutions and expedite Time to Market.
          </i>
        </p>

        <p>
          <b>
            Interested in making your innovative products/services using AI?
            Contact us:{" "}
          </b>{" "}
          <Link to="/contact" className="text-blue-600">
            Click here
          </Link>{" "}
        </p>

        <hr />
        <br />
        <br />

        <ol className="list-decimal list-inside">
          <li>
            As per the Indian economic survey 2020 -21:{" "}
            <Link
              to="https://www.financialexpress.com/budget/india-economic-survey-2018-for-farmers-agriculture-gdp-msp/1034266/"
              target="_blank"
              className="text-blue-600"
            >
              https://www.financialexpress.com/budget/india-economic-survey-2018-for-farmers-agriculture-gdp-msp/1034266/
            </Link>
          </li>

          <li>
            Ministry of Micro, Small and Medium Enterprises Annual Report
            2022-23 :{" "}
            <Link
              to="https://msme.gov.in/sites/default/files/MSMEANNUALREPORT2022-23ENGLISH.pdf
"
              target="_blank"
              className="text-blue-600"
            >
              Pg 124
              https://msme.gov.in/sites/default/files/MSMEANNUALREPORT2022-23ENGLISH.pdf
            </Link>
          </li>

          <li>
            {" "}
            <Link
              to="https://www.business-standard.com/india-news/compensation-for-crop-damage-to-farmers-goes-up-in-madhya-pradesh-123042701024_1.html"
              target="_blank"
              className="text-blue-600"
            >
              https://www.business-standard.com/india-news/compensation-for-crop-damage-to-farmers-goes-up-in-madhya-pradesh-123042701024_1.html
            </Link>
          </li>

          <li>
            <Link
              to="https://www.pnas.org/doi/10.1073/pnas"
              target="_blank"
              className="text-blue-600"
            >
              https://www.pnas.org/doi/10.1073/pnas
            </Link>
          </li>
        </ol>
      </div>

      <div className="bg-slate-100 w-full article mb-5">
        <div className="mx-auto flex  justify-center  ">
          <h1 className="text-3xl md:text-4xl font-semibold mt-12">
            Related Articles
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col p-8 card_container">
        <Link
                  to={'/reliable-and-robust-ai'}
                  className="mx-1 text-blue-600 no-underline  cursor-pointer"
                >
          <div className="card hover:bg-white p-5 hover:shadow-lg transition-shadow duration-300 m-3 card_width">
            <img
              src={"https://aiproff.ai/dist/assets/reliable-and-robust-ai-1-6538ad3ee3077-3e6eec26.png"}
              className="rounded-t card_img"
              alt="Quantum Article"
            />
            <div className="p-4">

                  <p>Sept 22, 2023</p>
              <p className="text-gray-700 font-bold hover:underline underline-offset-4">
                Introduction: Reliable and Robust AI
              </p>
              <p>The field of Artificial intelligence (AI) is rapidly evolving. It is tapping</p>
             
            </div>
          </div>
          </Link>

          <Link
                  to={'/introduction-to-nlp'}
                  className="mx-1 text-blue-600 no-underline  cursor-pointer"
                >
          <div className="card hover:bg-white p-5 hover:shadow-lg transition-shadow duration-300 m-3 card_width">
            <img
              src={"https://aiproff.ai/dist/assets/nlp-1-6538ad3dadc12-a97ea605.png"}
              className="rounded-t card_img"
              alt="Quantum Article"
            />
            <div className="p-4">

                <p>Sept 22, 2023</p>
              <p className="text-gray-700 font-bold hover:underline underline-offset-4">
                Introduction to NLP: When AI talks
              </p>
              <p>
              The field of Artificial intelligence is exciting. Under this discipline of Technology,
              </p>
              
              <h1>
              </h1>
            </div>
          </div>
          </Link>

          <Link
                  to={'/computer-vision'}
                  className="mx-1 text-blue-600 no-underline cursor-pointer"
                >
          <div className="card hover:bg-white p-5 hover:shadow-lg transition-shadow duration-300 m-3 card_width">
            <img
              src={"https://aiproff.ai/dist/assets/computer-vision-3-6538ad3ea0802-1accc857.png"}
              className="rounded-t card_img"
              alt="Quantum Article"
            />
            <div className="p-4">

              <p>Sept 22, 2023</p>
              <p className="text-gray-700 font-bold hover:underline underline-offset-4">
                Introduction to Computer Vision: When Machines Start to See
              </p>
              <p>
              The quest for intelligence has been going on for ages, and the question of 
              </p>
             
            </div>
          </div>
        </Link>
        </div>
      </div>



      <Footer />
    </>
  );
};

export default Product1;
