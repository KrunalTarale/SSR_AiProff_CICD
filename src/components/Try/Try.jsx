import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

const Try = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
          <Helmet>
            <link href="https://www.aiproff.ai/try" rel="canonical" />
          </Helmet>
      <Navbar />

      <h1 className="text-4xl font-semibold text-center mt-10">Paid Services/Subscriptions will be available soon for the trial</h1>

    </div>
  );
};

export default Try;
