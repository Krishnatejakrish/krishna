import React from 'react'
import { Link } from 'react-router-dom'
import socialmedia from "../assets/SocialMediaIcons.png";

const Futuremeetings = () => {
   const Attend_meeting = 'https://theentrepreneurialhour.com/attend-a-meeting-1'
  return (
    <div className='attend'>
      <p className='attendmeeting'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quod non ducimus incidunt ad voluptatibus quibusdam, consectetur cumque fugiat autem, laudantium dolorem, iusto temporibus asperiores repellendus? Id esse hic nisi, quasi optio qui a modi exercitationem dolore nesciunt libero nihil laboriosam omnis officiis, ex asperiores, maiores veritatis iste. Amet, voluptates.
      </p>
      <div className='meetinglink'>
      <Link>
      {Attend_meeting}

      
      </Link>
      <span>
      Attend meeting using this <b>ZOOM</b> link
      </span>
      </div>
      <footer className="footer footer1">
       
       copyright &copy; 2023 the enterpreneural hour all rightgs reserved
       
      <div>
      <img className="socialmedia" src={socialmedia} alt="social media"  />
      </div>
      
     </footer>
    </div>
  )
}

export default Futuremeetings
