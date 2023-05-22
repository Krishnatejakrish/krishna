import React from "react";
// import { Link } from "react-router-dom";
import feedback from '../assets/Feedback.png'
import socialmedia from "../assets/SocialMediaIcons.png";
const Howwehelp = () => {
  return (
   <div className="help1">
     <div className="help">
      <div>
        <img src={feedback} alt="feedback" className="feedback" />
      </div>
      <div className="helpcontent">
        <h3>The Entrepreneurial Hour</h3>
        <p className="helpdetail">
          Welcome to T.E.H. -- The Entrepreneurial Hour. It is held every
          Wednesday at 8 AM EST at Tech Alpharetta and virtually via Zoom..
          Entrepreneurs of all ages and at all stages from “dreamers'' to
          early-stage revenue producing companies are welcome to present.
        </p>
        <p className="helpdetail">
          Entrepreneurs need to reassess their direction constantly during the
          early stages of bringing an idea to life. We offer you the chance to:
        </p>
        <li>Practice your pitch for a friendly community</li>
        <li>Present your company and build awareness</li>
        <li>Think through a challenge you’re facing</li>
        <li> Get fresh perspective on an issue</li>

        <h3>What your mother won’t tell you.</h3>
        <p className="helpdetail">
          This is a friendly community but not “friends and family.” Friends and
          family are very supportive and necessary to success and we give thanks
          for that. But they are not always objective or candid. We tell you
          what your mother won’t. This is tough love for the entrepreneur. We
          ask many questions of clarification and rigorously assess your ideas
          and marketability and the value of your opportunity or at least as
          much as time permits.
        </p>
        <h3>Why do we do this?</h3>
        <p className="helpdetail">
          We know how important support, encouragement, and honest feedback are,
          because many of us have been in your shoes. We want to pay it forward.
          So we give an hour of our time every week to help entrepreneurs like
          you. Some advice will resonate, and some won’t. You might even hear
          conflicting advice! Simply take what you like and leave the rest. We
          only ask you to have an open mind and take notes.
        </p>
        <h3>Present with us!</h3>
        <p className="helpdetail">
          We provide an interactive forum for entrepreneurs to present their
          business and any issues that they would like to discuss and receive
          objective, friendly feedback from the meeting participants. Comments
          are intended to be constructive pointing out both good and bad aspects
          of the business plan.
        </p>
        <p className="helpdetail">
          This is not the last stop on your journey but we encourage repeat
          performances at The Entrepreneurial Hour.
        </p>
        <p className="helpdetail">
          We hope to see you Wednesday @ 8AM EST for The Entrepreneurial Hour!
        </p>
        <div className="links">
          <a href="aameeting" className="helplink">ATTEND A MEETING</a>
         
          <a href="atpresent" className="helplink">APPLY TO PRESENT</a>
          
        </div>
      </div>

      
    </div>
    <footer className="footer">
       
    copyright &copy; 2023 the enterpreneural hour all rightgs reserved
    
   <div>
   <img className="socialmedia" src={socialmedia} alt="social media"  />
   </div>
   
  </footer>
   </div>
  );
};

export default Howwehelp;
