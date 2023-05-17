import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <div className="nav_links">
      <Link className="link"  to="/">Home</Link>
      <Link className="link" to="about">About us</Link>
      <Link className="link" to="hwhelp">How we Help</Link>
      <Link className="link" to="atpresent">Apply to Present</Link>
      <Link className="link" to="aameeting">attend a Meeting</Link>
      <Link className="link" to="fmeetings">Future Meetings</Link>
      <Link className="link" to="media">Media</Link>
    </div>
  );
};

export default Navbar;
