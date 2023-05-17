import React from 'react'
import socialmedia from "../assets/SocialMediaIcons.png";

const Media = () => {
  return (
    <div className='mediaplatform'>
      <img src={socialmedia} alt="" className='media' />
      <p className='mediadetails'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi eaque ut magni necessitatibus nostrum doloremque minima quibusdam, placeat porro, corporis illum praesentium similique facilis quo voluptatibus iure perspiciatis. At ea voluptatibus libero, impedit fugit molestiae illum debitis consequuntur aliquam.
      </p>
      <footer className="footer footer1">
       
       copyright &copy; 2023 the enterpreneural hour all rightgs reserved
       
      <div>
      <img className="socialmedia" src={socialmedia} alt="social media"  />
      </div>
      
     </footer>
    </div>
  )
}

export default Media
