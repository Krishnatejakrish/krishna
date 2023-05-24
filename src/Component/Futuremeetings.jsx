import React from 'react'
import { Link } from 'react-router-dom';
import socialmedia from "../assets/SocialMediaIcons.png";

const Futuremeetings = () => {

  


  return (
    <div className='attend'>
      <h2>
      The Entrepreneurial Hour - A Unique Opportunity
      </h2>
      <p className='attendmeeting'>
      Come join us for the  The Entrepreneurial Hour. It is held every Wednesday at 8 AM EDT virtually. This hour has no specific industry requirement, no minimum age, and no proof of success. Entrepreneurs at all stages from “dreamers'' to early-stage revenue-producing companies are welcome.
      </p>
      <div className='meetinglink'>
     {/* <a href="https://web.archive.org/web/20221205075710/https://theentrepreneurialhour.com/attend-a-meeting-1" target='blank'>Attend meeting using this <b>link</b>
</a> */}
     <Link to='/aameeting' className='helplink'>Attend a future meeting</Link>
      
      </div>
      <footer className="footer footer1">
       
       copyright &copy; 2023 the enterpreneural hour all rights reserved
       
      <div>
      <img className="socialmedia" src={socialmedia} alt="social media"  />
      </div>
      
     </footer>
    </div>
  )
}

export default Futuremeetings
