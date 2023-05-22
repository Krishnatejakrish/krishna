import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../App.css";
// import { useState } from "react";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="nav_links">
<<<<<<< HEAD

      {/* menu */}
=======
>>>>>>> 14ef7a13f70902fb97b891d91d62d5d39f546bf8
      <ul className={isMobile ? 'menumobile' : 'menu'} onClick={() => setIsMobile(false)}>
        <li key='Home' ><Link className="link"  to="/">Home</Link></li>
        <li key='about'><Link className="link" to="about">About us</Link></li>
        <li key='hwhelp'><Link className="link" to="hwhelp">How we Help</Link></li>
        <li key='atpresent'><Link className="link" to="atpresent">Apply to Present</Link></li>
<<<<<<< HEAD
        <li key='aameeting'><Link className="link" to="aameeting">Attend a Meeting</Link></li>
        <li key='fmeetings'><Link className="link" to="fmeetings">Future Meetings</Link></li>
        {/* <li key='media'><Link className="link" to="media">Media</Link></li> */}
=======
        <li key='aameeting'><Link className="link" to="aameeting">attend a Meeting</Link></li>
        <li key='fmeetings'><Link className="link" to="fmeetings">Future Meetings</Link></li>
        <li key='media'><Link className="link" to="media">Media</Link></li>
>>>>>>> 14ef7a13f70902fb97b891d91d62d5d39f546bf8
      </ul>

      <button className='hamburg' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ?
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/>
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
            </g>
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
            </g>
          </svg>
        }
      </button>
    </div>
  );
};

export default Navbar;
