import React, { useState, useEffect, useRef } from "react";
import "./Product.css";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Foot/Foot.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
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

import image1 from "../assets/product2/image17.png";
import image2 from "../assets/product2/image6.jpg";
import image3 from "../assets/product2/image13.jpg";
import image4 from "../assets/product2/image8.jpg";
import image5 from "../assets/product2/image14.jpg";
import image6 from "../assets/product2/image9.jpg";
import image7 from "../assets/product2/image1.jpg";
import image8 from "../assets/product2/image10.jpg";
import image9 from "../assets/product2/image5.jpg";
import image10 from "../assets/product2/image4.jpg";
import image11 from "../assets/product2/image7.jpg";
import image12 from "../assets/product2/image16.jpg";
import image13 from "../assets/product2/image11.jpg";
import image14 from "../assets/product2/image3.jpg";
import image15 from "../assets/product2/image15.png";
import image17 from "../assets/product2/image18.jpg";

function shareOnLinkedIn() {
  var url = "https://www.aiproff.ai/therapy-planning-for-asd-kids-children-using-AI";
  var linkedinUrl =
    "https://www.linkedin.com/sharing/share-offsite/?url=" +
    encodeURIComponent(url);
  window.open(linkedinUrl, "_blank");
}

function shareOnTwitter() {
  // Replace 'your-twitter-share-url' with the URL you want to share on Twitter.
  var url = "https://www.aiproff.ai/therapy-planning-for-asd-kids-children-using-AI";
  window.open(
    "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url),
    "_blank"
  );
}

//   function shareOnTwitter() {
//     var url = 'https://www.aiproff.com/nlp';
//     var text = 'Thank you for connecting with us';
//     var twitterIntentURL = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text);
//     window.open(twitterIntentURL, '_blank');
// }

function shareOnFacebook() {
  // Replace 'your-facebook-share-url' with the URL you want to share on Facebook.
  var url = "https://www.aiproff.ai/therapy-planning-for-asd-kids-children-using-AI";
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url),
    "_blank"
  );
}

function shareByEmail() {
  // Replace 'your-email-share-url' with the URL you want to share via email.
  var url = "https://www.aiproff.ai/therapy-planning-for-asd-kids-children-using-AI";
  window.location.href = "mailto:?body=" + encodeURIComponent(url);
}




const Product2 = () => {

  const Title = "Therapy Planning for ASD Kids: Children Using AI";
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isAudioPlayerVisible, setIsAudioPlayerVisible] = useState(false);
  const [progressdropdownVisible, setprogressDropdownVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isDivVisible, setIsDivVisible] = React.useState(false);
  const imageRef = useRef(null);

  const navigate = useNavigate();


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
          article: 'ASD',
          title: "Therapy Planning for ASD Children using AI: A Data-Driven Journey into AI-Powered Care Planning",
          date: 'September 4, 2023',
          url: 'therapy-planning-for-asd-kids-children-using-AI',
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

<Helmet>
        <meta charSet="utf-8" />
        <title>ASD Therapeutic Intervention Care Using AI | AiProff.ai</title>
        <meta
          name="description"
          content="Discover how AiProff is revolutionizing ASD care in India with AI-driven therapy planning. Dive into our innovative solution designed to empower therapists and parents alike. Experience personalized ASD care using AI technology. Take a step forward in enhancing ASD therapy using AI and embark on a transformative journey in ASD care planning using AI. Explore now for a brighter future in ASD care in India."
        />
        <link href="https://www.aiproff.ai/therapy-planning-for-asd-kids-children-using-AI" rel="canonical" />
      </Helmet>

      <Navbar />

      {isDivVisible ? (
          <div className="fixed article top-0 left-0 w-full h-15 bg-white z-50 border-b-4 transition-all duration-500 transform translate-y-0 space-y-2">
            <div className="max-w-3xl lg:max-w-6xl px-8 lg:px-4 md:mx-auto flex justify-center  md:justify-between items-center pt-4">
              <div>
                <h1 className="hidden md:flex text-xl">
                Therapy Planning for ASD Children
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
                Therapy Planning for ASD Children
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

      <img src={"https://aiproff.ai/dist/assets/image17-5ad222c0.png"} ref={imageRef} alt="graph-economic-impact" style={{ width: "100%" }} />

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
                audio="/audio_files/ASD_Planning_aiproff.mp3"
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
          Therapy Planning for ASD Children using AI: A Data-Driven Journey into
          AI-Powered Care Planning
        </h1>

        <p>
          The landscape of Autism Spectrum Disorder (ASD) diagnosis and
          management in India is undergoing a profound transformation. With an
          alarming surge in ASD diagnoses across various cities, including{" "}
          <Link
            to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5488556/"
            target="_blank"
            className="text-blue-500"
          >
            {" "}
            Tier 2 and Tier 3 urban centres
          </Link>
          , there emerges a critical need for swift, accurate, and personalised
          therapeutic interventions.
        </p>

        <p>
          Recent statistics paint a stark picture of this escalating trend. Data
          suggests that approximately{" "}
          <Link
            to="https://www.spectrumnews.org/news/study-quantifies-prevalence-autism-india/#:~:text=About%201%20in%20100%20children,reported%20in%20India%E2%80%99s%202011%20census"
            target="_blank"
            className="text-blue-500"
          >
            {" "}
            1 in every 100 children{" "}
          </Link>{" "}
          under the age of 10 in India is diagnosed with autism. Even more
          concerning is the revelation of a staggering{" "}
          <Link
            to="https://theprint.in/opinion/every-1-in-100-children-below-10-yrs-has-autism-in-india-the-epidemic-needs-better-care/898999/"
            target="_blank"
            className="text-blue-500"
          >
            {" "}
            178% increase{" "}
          </Link>{" "}
          in the prevalence of ASD over the past two decades.
        </p>

        <p>
          A comprehensive{" "}
          <Link
            to="https://pubmed.ncbi.nlm.nih.gov/30860104/"
            target="_blank"
            className="text-blue-500"
          >
            {" "}
            meta-analysis{" "}
          </Link>{" "}
          shows us a prevalence rate of 0.11 (with a 95% confidence interval of
          0.01-0.20) among children aged 1-18 years in rural regions of India.
          In juxtaposition, urban areas manifested a prevalence rate of 0.09
          (95% CI 0.02-0.16) among children aged 0-15 years.
        </p>

        <p>
          These figures underscore not only the burgeoning recognition and
          diagnosis of ASD in India but also the call for innovative diagnostic
          tools and advanced management strategies. The evolving landscape calls
          for a paradigm shift, emphasising the integration of data-driven
          insights and AI-driven solutions to cater to the unique needs of each
          child with ASD.
        </p>

        <p>
          Having established this landscape and the burgeoning prevalence of ASD
          in India, it becomes crucial to dissect the multifaceted challenges
          that impede effective care and management.
        </p>

        <h1 className="text-4xl font-bold mb-6 mt-6">
          Navigating the Complexities and Understanding the Challenge
        </h1>

        <p>
          Addressing Autism Spectrum Disorder (ASD) in India is riddled with
          challenges that resonate with various stakeholders, from healthcare
          professionals to parents.{" "}
        </p>

        <p>
          As we take a closer look into the intricacies of this landscape,
          several of the following challenges emerge, which paints a
          comprehensive picture of the complexities at hand:
        </p>

        <div className="vertical-paragraph mb-6">
          <div>
            <img
              src={"https://aiproff.ai/dist/assets/image6-876a14ea.jpg"}
              style={{
                objectFit: "scale-down",
                width: "400px",
                height: "250px",
                margin: "auto",
              }}
              alt="This is image"
            />
          </div>
          <div>
            <p>
              <b>Absence of Standardised Screening Protocols:</b> One of the
              foremost challenges is the lack of a universally accepted and
              standardised protocol for early ASD screening. The absence of such
              a mandate obstructs timely interventions, potentially delaying
              crucial therapeutic measures.
            </p>
          </div>
        </div>

        <div className="vertical-paragraph mb-6">
          <div className="div-1">
            <p>
              <b>Time-Sensitive Recognition:</b> The subtle nuances of ASD can
              often elude parents, leading to delayed realisations about their
              child's condition. This lapse in early detection translates to
              lost time, a precious commodity in the developmental phase of
              children with ASD.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <img
              src={"https://aiproff.ai/dist/assets/image13-03950c69.jpg"}
              style={{
                objectFit: "scale-down",
                width: "400px",
                height: "250px",
                margin: "auto",
              }}
              alt="This is image"
            />
          </div>

          <div className="div-2">
            <p>
              <b>Time-Sensitive Recognition:</b> The subtle nuances of ASD can
              often elude parents, leading to delayed realisations about their
              child's condition. This lapse in early detection translates to
              lost time, a precious commodity in the developmental phase of
              children with ASD.
            </p>
          </div>
        </div>

        <div className="vertical-paragraph mb-6">
          <div>
            <img
              src={"https://aiproff.ai/dist/assets/image8-d69c8f2b.jpg"}
              style={{
                objectFit: "scale-down",
                width: "400px",
                height: "250px",
                margin: "auto",
              }}
              alt="This is image"
            />
          </div>

          <div>
            <p>
              <b>Fragmented Healthcare Navigation:</b> Navigating the healthcare
              ecosystem becomes a daunting task for parents. This is often due
              to visits to a myriad of specialists—be it Psychiatrists,
              Psychologists, Developmental Paediatricians, or therapy providers.
              This fragmented approach often leaves parents overwhelmed and
              uncertain about the subsequent steps in their child's care
              journey.
            </p>
          </div>
        </div>

        <div className="vertical-paragraph mb-6">
          <div className="div-1">
            <p>
              <b>Lack of Periodic Progress Monitoring:</b> The absence of a
              structured mechanism for frequent, periodic checks to monitor a
              child's progress becomes challenging. This gap restricts the
              ability to gauge the success rate of ongoing interventions and
              adapt strategies in real-time.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <img
              src={"https://aiproff.ai/dist/assets/image14-b6535d5e.jpg"}
              style={{
                objectFit: "scale-down",
                width: "400px",
                height: "250px",
                margin: "auto",
              }}
              alt="This is image"
            />
          </div>

          <div className="div-2">
            <p>
              <b>Lack of Periodic Progress Monitoring:</b> The absence of a
              structured mechanism for frequent, periodic checks to monitor a
              child's progress becomes challenging. This gap restricts the
              ability to gauge the success rate of ongoing interventions and
              adapt strategies in real-time.
            </p>
          </div>
        </div>

        <div className="vertical-paragraph mb-6">
          <div>
            <img
              src={"https://aiproff.ai/dist/assets/image9-d3e3514d.jpg"}
              style={{
                objectFit: "scale-down",
                width: "400px",
                height: "250px",
                margin: "auto",
              }}
              alt="This is image"
            />
          </div>
          <div>
            <p>
              <b>Unscientific Therapeutic Recommendations:</b> The prevailing
              landscape also grapples with the absence of a scientific framework
              for recommending therapies. The lack of evidence-based guidelines
              and solutions undermines the success rates of therapeutic
              interventions, leaving room for ambiguity and suboptimal outcomes.
            </p>
          </div>
        </div>

        <div className="vertical-paragraph mb-6">
          <div className="div-1">
            <p>
              <b>Untapped Potential of Historical Data:</b> Perhaps one of the
              most underutilised resources is historical data. The absence of
              mechanisms to harness historical data restricts the ability to
              glean insights, optimise therapeutic approaches, and tailor
              interventions based on past experiences and outcomes.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "end" }}>
            <img
              src={"https://aiproff.ai/dist/assets/image1-c4824cdc.jpg"}
              style={{
                objectFit: "scale-down",
                width: "400px",
                height: "250px",
                margin: "auto",
              }}
              alt="This is image"
            />
          </div>

          <div className="div-2">
            <p>
              <b>Untapped Potential of Historical Data:</b> Perhaps one of the
              most underutilised resources is historical data. The absence of
              mechanisms to harness historical data restricts the ability to
              glean insights, optimise therapeutic approaches, and tailor
              interventions based on past experiences and outcomes.
            </p>
          </div>
        </div>

        <p>
          Given this backdrop, various stakeholders are in search for new
          reliable and robust solutions that could counter these drawbacks. With
          a comprehensive understanding of the challenges at hand, the team at
          AiProff.ai is exploring an innovative solution through a pilot
          initiative to address these challenges, potentially reshaping ASD
          Therapeutic Intervention in India.
        </p>

        <h1 className="text-2xl font-bold">
          AiProff.ai: Bridging the Gap with AI
        </h1>

        <p>
          In the evolving domain of Artificial Intelligence (AI) and Machine
          Learning (ML), AiProff.ai has emerged as a notable contributor,
          particularly in addressing challenges associated with limited labelled
          data and complex customization requirements.{" "}
        </p>

        <p>
          AiProff.ai is recognized for its ability to develop AI/ML solutions
          that are tailored to meet the distinct needs of various industries.
        </p>

        {/* <img
          src="https://aiproff.ai/dist/assets/logo-e9bcf11e.png"
          alt="This is image"
        /> */}

        <p>
          From facilitating outcome predictions in dermatological procedures and
          creating wildlife intrusion detection systems, AiProff.ai has
          demonstrated versatility in its project engagements.
        </p>

        <p>
          Under the leadership of its Founder & CEO,{" "}
          <Link
            to="https://www.linkedin.com/in/nitinsaraswat/"
            target="_blank"
            className="text-blue-600"
          >
            {" "}
            Mr. Nitin Saraswat
          </Link>
          , AiProff.ai adopts a distinctive problem-solving methodology. Mr.
          Saraswat, with background as a Computer Science Engineer and a
          multifaceted technologist, has a noteworthy{" "}
          <Link
            to="https://patents.justia.com/inventor/nitin-saraswat"
            target="_blank"
            className="text-blue-600"
          >
            {" "}
            patent record in the AI/ML domain
          </Link>
          , highlighting the company's dedication to pioneering research and
          creativity.
        </p>

        <p>
          By leveraging the transformative skills and expertise of AiProff.ai,
          we are offering stakeholders a comprehensive overview of its potential
          impact on enhancing ASD Therapeutic Intervention efficacy and
          accessibility.
        </p>

        <p>
          The following is the innovative solutions and expertise that
          AiProff.ai brings to the table, underscoring its pivotal role in
          bridging existing gaps and reshaping the future of ASD Therapeutic
          Intervention in India.
        </p>

        <h1 className="text-2xl font-bold">
          Elevating ASD Therapeutic Intervention with AI-Driven Precision:
          Proposed Solution
        </h1>

        <p>
          At the intersection of cutting-edge technology and compassionate care,
          AiProff.ai presents a solution, meticulously tailored to redefine the
          landscape of ASD careASD Therapeutic Intervention in India
        </p>

        <p>
          In our quest to revolutionise ASD Therapeutic Intervention, we
          introduce a dual-category tool designed to empower both therapists and
          parents, fostering trust and transparency at every step.
        </p>

        <p>
          This innovative tool offers data-driven insights, personalised therapy
          plans, and real-time progress monitoring. The tool-set offered to the
          therapists can optimise interventions based on AI-enhanced analytics,
          while the tools provided to the parents allows them to gain a
          transparent view into the therapeutic journey. With regular updates,
          insights into therapy sessions, and resources for at-home support,
          both stakeholders can actively participate, ensuring each child
          receives tailored, effective care.
        </p>

        <p>
          <b>Here's an overview of our transformative approach:</b>
        </p>

        <ol className="list-decimal list-inside">
          <li>
            <b className="text-2xl">Seamless User Experience:</b>

            <img src={"https://aiproff.ai/dist/assets/image10-aa7e6b48.jpg"} className="mt-5" alt="This is image" />

            <p>
              Our envisioned solution is meticulously designed as an intuitive
              mobile application, ensuring a seamless user interface across both
              iOS and Android platforms. Prioritising user-centricity, the
              application promises a hassle-free navigation experience,
              enhancing accessibility and user engagement.
            </p>
          </li>

          <li>
            <b className="text-2xl">Empowering Remote Accessibility:</b>

            <img src={"https://aiproff.ai/dist/assets/image5-2a17677e.jpg"} className="mt-5" alt="This is image" />

            <p>
              Our solution is engineered to transcend geographical barriers. It
              empowers health practitioners and therapy providers in
              resource-constrained regions with a streamlined mechanism for home
              administration of Child Psychological Assessment Tests to
              children, ensuring equitable access to vital diagnostic tools.
            </p>
          </li>

          <li>
            <b className="text-2xl">Swift and Actionable Insights: </b>

            <img src={"https://aiproff.ai/dist/assets/image4-7f2635b0.jpg"} className="mt-5" alt="This is image" />

            <p>
              Utilizing advanced AI technologies, our solution offers real-time
              categorization of deficits across key areas such as Self Help,
              Locomotion, Communication, and more, tailored to the child's
              respective age level. By seamlessly integrating technology, child
              psychology, and therapy systems, our solution works towards making
              each child functional and independent. The insights generated are
              not just prompt but also comprehensive, facilitating a deeper
              understanding of the child's condition and enabling informed
              therapeutic interventions.
            </p>
          </li>

          <li>
            <b className="text-2xl">Augmented Decision Support: </b>

            <img src={"https://aiproff.ai/dist/assets/image7-e17f4acb.jpg"} className="mt-5" alt="This is image" />

            <p>
              Beyond mere assessment, our solution embeds advanced AI-driven
              decision support mechanisms. These features, grounded in rigorous
              research, offer nuanced recommendations tailored to individual
              needs. This leads to enriched the therapeutic planning process and
              enhances treatment efficacy.
            </p>
          </li>

          <li>
            <b className="text-2xl">Trust-Centric Approach: </b>

            <img src={"https://aiproff.ai/dist/assets/image16-3621a14f.jpg"} className="mt-5" alt="This is image" />

            <p>
              Central to our ethos is the cultivation of trust through our
              innovative AI-powered tools. These tools are meticulously crafted
              to bridge communication gaps between healthcare providers and
              parents, offering a transparent interface where both parties can
              engage. For therapists, the tool provides AI-enhanced analytics
              and personalised therapy plans, optimising interventions. For
              parents, it offers a window into their child's therapeutic
              journey, providing actionable insights, facilitating informed
              decision-making, and nurturing a supportive care system for ASD
              children.
            </p>
            <p>
              Building on the proposed solution's framework, let's delve into
              the overarching role of Artificial Intelligence in augmenting
              therapeutic interventions for ASD children.
            </p>
          </li>
        </ol>

        <h1 className="text-2xl font-bold">
          The Role of AI in Enhancing Therapeutic Interventions
        </h1>

        <p>
          The conjunction of AI-driven insights and therapeutic care holds
          transformative potential. It allows efficient reshaping the landscape
          of ASD interventions and paving the way for more personalised,
          effective care pathways.
        </p>

        <p>
          <b>Role 1: Tailored Therapeutic Recommendations</b>
        </p>

        <img src={"https://aiproff.ai/dist/assets/image11-948351da.jpg"} alt="This is image" />

        <ul className="list-disc">
          <li>
            <b>Data-Driven Therapy Plans:</b> AI/ML algorithms serve as the
            backbone of our solution, analysing periodic data meticulously
            collected from the application to understand a child's progress. By
            distilling intricate patterns from this data, the system curates
            personalised therapy plans and recommends specific activities,
            ensuring that interventions align seamlessly with individual needs
            and evolving requirements.
          </li>

          <li>
            <b>Collective Intelligence for Optimised Care:</b> Beyond individual
            assessments, our solution harnesses the power of collective
            intelligence. Therapists gain access to anonymized, aggregated data,
            offering insights into trends and patterns across the user base.
            This holistic perspective empowers therapists to explore a spectrum
            of therapeutic approaches, ensuring a tailored, holistic care
            regimen.
          </li>

          <li>
            <b> Evolutionary Recommendations:</b> As the repository of
            anonymized data grows, the AI/ML algorithms evolve in tandem,
            refining their recommendations iteratively. This continuous learning
            cycle amplifies the precision and efficacy of therapeutic
            interventions, positioning children for enhanced outcomes and
            holistic development.
          </li>
        </ul>

        <p>
          <b>Role 2: Intelligent Assessment & Decision Support</b>
        </p>

        <img src={"https://aiproff.ai/dist/assets/image3-1a47f194.jpg"} alt="This is image" />

        <ul className="list-disc">
          <li>
            <b>Predictive Insights:</b> Leveraging the expansive dataset, the AI
            model transcends traditional boundaries, emerging as a potent
            predictive tool. It aids healthcare practitioners by assessing the
            probability of a child having Autism Spectrum Disorder, facilitating
            early and accurate diagnoses.
          </li>

          <li>
            <b>Robust Decision Support:</b> Beyond mere predictions, the AI
            model crystallises into a robust decision support system. It guides
            practitioners, recommending further tests or assessments, ensuring
            comprehensive evaluations and informed therapeutic pathways.
          </li>
        </ul>

        <p>
          Having illuminated the transformative potential of AI in therapeutic
          interventions, the following section provides a holistic solution
          designed to address the multifaceted challenges posed by ASD
          comprehensively.
        </p>

        <h1 className="text-2xl font-bold">
          A Holistic Solution for a Multifaceted Challenge
        </h1>

        <p>
          At the heart of our endeavour lies a comprehensive solution,
          meticulously crafted to harmonise diverse expertise, cutting-edge
          technology, and compassionate care.
        </p>

        <p>
          The following are a few ways on how our solution tackles the present
          challenges in ASD.
        </p>

        <ol className="list-decimal">
          <li>
            <b>Interdisciplinary Excellence:</b> Central to our solution's
            success is the synergy of diverse disciplines. Our multidisciplinary
            team, comprising Licensed Psychiatrists/Psychologists, Certified
            Data Scientists, Mobile App Developers, and Cloud Computing
            Specialists, embodies a fusion of clinical acumen, technological
            prowess, and domain-specific expertise. This collaborative effort
            ensures a holistic, well-rounded approach, positioning us to
            navigate the intricate nuances of ASD Therapeutic Intervention with
            precision and empathy.
          </li>

          <li>
            <b>Strategic Development & Execution:</b> Our approach to
            development and deployment is anchored in meticulous planning,
            innovative methodologies, and a steadfast commitment to excellence.
            The journey is meticulously structured to ensure each phase
            seamlessly transitions into the next, optimising for both efficiency
            and efficacy.
            <p>The following is the workflow of the proposed solution -</p>
            <img src={"https://aiproff.ai/dist/assets/image15-5489402a.jpg"} alt="this is image" />
          </li>

          <li>
            <b>Sustained Support & Evolution:</b> Our commitment transcends
            deployment, manifesting in a year-long maintenance commitment. This
            proactive stance ensures uninterrupted service delivery,
            facilitating timely interventions and continual enhancements based
            on user feedback and evolving needs.
          </li>
        </ol>

        <p>
          The pilot initiative aims to harness AI's transformative potential to
          provide stakeholders with insights into how such technology could
          potentially enhance ASD Therapeutic Intervention efficacy and
          accessibility.
        </p>

        <h1 className="text-2xl font-bold">
          Conclusion: Embracing Tomorrow’s ASD Therapeutic Intervention Today
        </h1>

        <img src={"https://aiproff.ai/dist/assets/image18-dcf01bf1.jpg"} alt="This is image"/>

        <p>
          In conclusion, AiProff.ai's foray into ASD Therapeutic Intervention
          heralds a future where precision, innovation, and empathy converge.{" "}
        </p>

        <p>
          By addressing the challenges head-on, harnessing the power of AI, and
          embracing a holistic solution, we strive not just to meet but to
          exceed expectations. AiProff.ai’s commitment extends beyond deploying
          solutions; it encompasses fostering inclusive care ecosystems where
          every child, irrespective of their circumstances, finds a pathway to
          holistic development.
        </p>

        {/* <img
src="https://aiproff.ai/dist/assets/logo-e9bcf11e.png"
alt="This is image"
/> */}

        <p>
          As we stand at the cusp of this technological revolution, the fusion
          of data-driven insights with human expertise promises a brighter, more
          inclusive future for children with ASD and their families.
        </p>

        <p>
          By staying agile, innovative, and committed to our mission, we are
          well-positioned to shape a more resilient and sustainable future for
          ASD Therapeutic Intervention, technology, child psychology, therapy
          systems work towards making the child functional and independent.
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
            AiProff.ai excel at creating state-of-the-art solutions as Minimum
            Viable Products for Enterprises and Academic Institutions to lower
            the entry barrier – using cutting-edge AI/ML solutions – and
            expedite time to market.
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

        <ol>
          <li>
            {" "}
            Autism Spectrum Disorder (ASD):{" "}
            <Link
              to="https://www.nimh.nih.gov/health/statistics/autism-spectrum-disorder-asd"
              target="_blank"
              className="text-blue-600"
            >
              https://www.nimh.nih.gov/health/statistics/autism-spectrum-disorder-asd
            </Link>
          </li>

          <li>
            Prevalence of Autism Spectrum Disorder among Rural, Urban, and
            Tribal Children (1–10 Years of Age) :{" "}
            <Link
              to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5488556/"
              target="_blank"
              className="text-blue-600"
            >
              {" "}
              https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5488556/
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
                  to={'/forecasting-using-ai'}
                  className="mx-1 text-blue-600 no-underline cursor-pointer"
                >
          <div className="card hover:bg-white p-5 hover:shadow-lg transition-shadow duration-300 m-3 card_width">
            <img
              src={"https://aiproff.ai/dist/assets/forecasting-6538ad3fb2d70-de5b8000.png"}
              className="rounded-t"
              alt="Quantum Article"
            />
            <div className="p-4">
              <p>Sept 22, 2023</p>
              <p className="text-gray-700 font-bold hover:underline underline-offset-4">
                Introduction: When AI starts to predict Future
              </p>
              <p>Forecasting is the art and science of predicting future events or outcomes based on past and present data.</p>

            </div>
          </div>
          </Link>

          <Link
                  to={'/wildlife-intrusion-detection-system-ai-aiproff'}
                  className="mx-1 text-blue-600 no-underline  cursor-pointer"
                >
          <div className="card hover:bg-white p-5 hover:shadow-lg transition-shadow duration-300 m-3 card_width">
            <img
              src={"https://aiproff.ai/dist/assets/thumbnail1-e4355dee.png"}
              className="rounded-t card_img"
              alt="Quantum Article"
            />
            <div className="p-4">

                <p>Sept 22, 2023</p>
              <p className="text-gray-700 font-bold hover:underline underline-offset-4">
              Wildlife Intrusion Detection & Prevention in Farmlands using AI-Based Solution
              </p>
              <p>
              At the heart of India's agriculture landscape lies a pressing concern—wildlife intrusion,
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

export default Product2;
