import React from 'react'
import { Link } from 'react-router-dom'
import chuck from '../assets/Chuck.png'
import tom from '../assets/Tom.png'
import scott from '../assets/Scott.png'
import socialmedia from "../assets/SocialMediaIcons.png";
const Home = () => {
  return (
    <div className='home' >
     <h3 className='head'>
    OUR ORGANAIZERS
     </h3>
     {/*chuck */}
     <div className='chuck'>
      <div className='img'>
      <img src={chuck} alt="chuck" />
      </div>
      <div className='details'>
      <h2>
          Charles "Chuck" kaucher
        </h2>
        <p>
        Chuck has over 25 years experience in business including Big 4 experience as a CPA and in the financial markets as a private trader.
Comfortable in C-suite and senior management engagement where client relations are critical to business development and strategic alliances.
          </p>

          <Link>LINKEDIN</Link>
      </div>

     </div>

     {/* tom */}
     <div className='tom'>
     <div className='details'>
      <h2>
          Tom Berger
        </h2>
        <p>
        Tom has over 45 years in business, having led seven different companies as well as held the positions of a Company Officer/Board Member with several since 1990.  Tom is also a mentor to startups at Tech Alpharetta. Tom also has published hundreds of business articles to his website <Link>CXO-Atlas</Link>
          </p>
          <Link className='linkedin'>LINKEDIN</Link>
      </div>
      <div className='img'>
      <img src={tom} alt="tom" />
      </div>
      
     </div>
    
    {/* scott wold */}
    <div className='scott'>
      <div className='img'>
      <img src={scott} alt="chuck" />
      </div>
      <div className='details'>
      <h2>
          Scott Wold
        </h2>
        <p>
        Scott brings over 30 years of sales, marketing, business strategy, and executive leadership experience when mentoring founders of startups.  Scott has led three companies as well as sat on the Board for two companies.  Scott is also active with several non-profits including Boy Scouts of America, Rotary International, and Kiwanis International  
          </p>

          <Link>LINKEDIN</Link>
      </div>

     </div>
     <footer className="footer">
       
       copyright &copy; 2023 the enterpreneural hour all rightgs reserved
       
      <div>
      <img className="socialmedia" src={socialmedia} alt="social media"  />
      </div>
      
     </footer>
    </div>
  )
}

export default Home
