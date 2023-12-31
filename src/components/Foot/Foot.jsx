import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import twitter from '../assets/x-twitter.svg';

import Cookie from '../Cookie/Cookie';

import whitelogo from "../assets/white_logo.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [showCookieModal, setShowCookieModal] = useState(false);

  const handleCookiePreferenceClick = () => {
    setShowCookieModal(true);
  };

  const handleCloseCookieModal = () => {
    setShowCookieModal(false);
  };

  // New code starts

  const [email, setEmail] = useState('');
  // const [emailError, setEmailError] = useState('');
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



  // New code ends

  return (
    <footer className="bg-slate-100 text-black py-6 lg:py-8 border-t-2   ">
      <img src={whitelogo} style={{ display: 'none' }} alt="demo logo"/>
      <div className="mx-auto lg:mx-24 px-10">
        <div className="flex lg:flex-row flex-col justify-center  lg:justify-between space-y-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4 max-w-xs">
                Subscribe to AiProff and Stay Updated on Applied AI
              </h2>
            </div>
            <p>{status}</p>
            <div className="flex" id="subscribe">
              <input
                type="email"
                className="px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                
              />
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex space-x-4">
              <Link to="/about" className="hover:text-blue-500">
                About Us
              </Link>
              <Link to="/faq" className="hover:text-blue-500">
                FAQ
              </Link>
              <Link to="/privacy-policy" className="hover:text-blue-500">
                Privacy Policy
              </Link>
              <Link to="/legal" className="hover:text-blue-500">
                Legal
              </Link>
              <a
                href="#"
                className="hover:text-blue-500"
                onClick={handleCookiePreferenceClick}
              >
                Cookie Preference
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://twitter.com/aiproff_ai"
                className="text-gray-600 hover:text-blue-500"
                target='blank'
              >
                <img
                  src="https://aiproff.ai/dist/assets/x-twitter-d8f35a67.svg"
                  alt="Twitter Icon"
                  style={{ width: '24px', height: '24px' }}
                />
              </a>
              <a
                href="https://www.facebook.com/aiproffai/"
                className="text-gray-600 hover:text-blue-500"
                target='blank'
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="lg"
                  style={{ color: '#303030' }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/aiproff/"
                className="text-gray-600 hover:text-blue-500"
                target='blank'
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="lg"
                  style={{ color: '#2e2e2e' }}
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  style={{ color: '#3d3d3d' }}
                />
              </a>
              <a
                href="https://www.youtube.com/@AiProffAi"
                target="blank"
                className="text-gray-600 hover:text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="lg"
                  style={{ color: '#3d3d3d' }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <div className="w-full border-t mt-6 border-gray-300 flex justify-between items-center pt-3 ">
            <p className="text-gray-600 justify-end">
              {' '}
              &copy; {currentYear} AiProff Software Consulting Private Limited
            </p>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showCookieModal && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
          <div className="fixed inset-0 flex justify-center items-center">
            <Cookie onClose={handleCloseCookieModal} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
