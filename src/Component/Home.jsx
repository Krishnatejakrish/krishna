import React from "react";
import { useState } from "react";
import socialmedia from "../assets/SocialMediaIcons.png";
import { FaCheck } from 'react-icons/fa';

// Inside your component


import entrepreneur from "../assets/entrepreneur.jpg";
const Home = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <div className="home">
      <div className="content">
        <img src={entrepreneur} alt="entrepreneur" className="image" />

        <div className="detail">
          <h2 className="hcontent">
            THE ENTREPRENEURIAL HOUR: A UNIQUE OPPORTUNITY
          </h2>
          <p className="hcontentp">
            We are a volunteer group of business leaders who offer advice to
            entrepreneurs. We expect absolutely nothing in return.
          </p>

          <a
            href="https://web.archive.org/web/20230411052239/https://docs.google.com/forms/d/e/1FAIpQLSdgTEjC2_7EFl4CR8FShtx4NE6JtHsp7cnf3mwfo47wyUkDAQ/viewform?usp=sf_link"
            target="blank"
            className="present"
          >
            
            APPLY TO PRESENT
          </a>
        </div>
      </div>
      <p className="homep">
        The Entrepreneurial Hour (T.E.H.) is a “pay it forward” organization
        focused on helping entrepreneurs and startups succeed. The
        Entrepreneurial Hour holds weekly meetings where one founder/startup
        presents to a group of seasoned business leaders who offer friendly but
        candid advice.
      </p>
      <div className="form">
        <h3>Find out about future meetings.</h3>

        <div>
          {isSubscribed ? (
            <p className="subscribe">Thanks for subscribing  <FaCheck className="check" />  </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <p>* indicates required</p>
              <div>
                <label htmlFor="mail">Email * :</label>
                <input id="mail" type="email" required />
              </div>

              <div>
                <label htmlFor="first">First Name:</label>
                <input type="text" id="first" />
              </div>

              <div>
                <label htmlFor="last">Last Name:</label>
                <input type="text" id="last" />
              </div>

              <button type="submit" className="submit">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
      <footer className="footer footer1">
        copyright &copy; 2023 the enterpreneural hour all rights reserved
        <div>
          <img className="socialmedia" src={socialmedia} alt="social media" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
