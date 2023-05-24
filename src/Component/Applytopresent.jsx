import React from 'react'
import socialmedia from "../assets/SocialMediaIcons.png";

const Applytopresent = () => {
  return (
    <div className='applytp'>
      <h3 className='applyhead'>
      THE ENTREPRENEURIAL HOUR: A UNIQUE OPPORTUNITY
      </h3>
 <p className='applydetail'>
 We are a volunteer group of business leaders who offer advice to entrepreneurs.  We expect absolutely nothing in return. 

 </p>
      <div>
      <span>
      Please contact Chuck Kaucher to apply to present 
      </span>
      <a href="mailto:kaucher@cgki.com.">kaucher@cgki.com</a>
      
{/* Make the email address a link mailto: kaucher@cgki.com */}


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

export default Applytopresent
