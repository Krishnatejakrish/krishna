import React from 'react'

import socialmedia from "../assets/SocialMediaIcons.png";


const Attendameeting = () => {
  
  return (
    <div className='attend'>
      <p className='attendmeeting'>
      We meet every Wednesday at 8 AM. <br/> 
You can attend in person at
Tech Alpharetta • <br />
2972 Webb Bridge Road, <br />
Alpharetta, GA 30009



      </p>
      
<b>
  OR
</b>

      <div className='meetinglink'>
      <a href="http://zoom.theentrepreneurialhour.com/" target='blank'>Attend meeting using this <b>ZOOM</b> link</a>
      <span>
      
      </span>
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

export default Attendameeting
