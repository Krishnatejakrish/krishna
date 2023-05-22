import React from 'react'
import { useState } from 'react';
import socialmedia from "../assets/SocialMediaIcons.png";


import entrepreneur from '../assets/entrepreneur.jpg'
const Home = () => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '') {
      setError('Email is required');
      return;
    }

    // Perform further processing or submit the form data
    // ...

    // Reset the form fields
    setEmail('');
    setFirstName('');
    setLastName('');
    setError('');
  };


  return (
   <div className='home'>
 <p className='homep'>The Entrepreneurial Hour (T.E.H.) is a “pay it forward” organization focused on helping entrepreneurs and startups succeed. The Entrepreneurial Hour holds weekly meetings where one founder/startup presents to a group of seasoned business leaders who offer friendly but candid advice.</p>
<div className='content'>
<img src={entrepreneur} alt="entrepreneur" className='image' />

<div className='detail'>
  <h2 className='hcontent'>
  THE ENTREPRENEURIAL HOUR: A UNIQUE OPPORTUNITY
  </h2>
  <p className='hcontentp'>
  We are a volunteer group of business leaders who offer advice to entrepreneurs.  We expect absolutely nothing in return. 
  </p>
  
    <a href="https://web.archive.org/web/20230411052239/https://docs.google.com/forms/d/e/1FAIpQLSdgTEjC2_7EFl4CR8FShtx4NE6JtHsp7cnf3mwfo47wyUkDAQ/viewform?usp=sf_link" target='blank' className='present'> APPLY TO PRESENT</a>
   
 
</div>
</div>

<div className='form'>
  <h3>
  Find out about future meetings.
  </h3>
  <p>* indicates required</p>
<form onSubmit={handleSubmit}>
      <div>
        <label>Email * :</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <span className='error'>{error}</span>}
      </div>

      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <button className='submit' type="submit">Submit</button>
    </form>
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

export default Home
