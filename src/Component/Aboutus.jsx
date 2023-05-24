import React from "react";
import { Link } from "react-router-dom";
import chuck from "../assets/Chuck.png";
import tom from "../assets/Tom.png";
import scott from "../assets/Scott.png";
import team from "../assets/Team.png";
import sponsor from "../assets/sponsors.png";
import socialmedia from "../assets/SocialMediaIcons.png";

const Aboutus = () => {
  return (
    <div className="aboutus">

      {/*chuck */}
      <div className="chuck">
        <div className="img">
          <img src={chuck} alt="chuck" />
        </div>
        <div className="details">
          <h2>Charles "Chuck" kaucher</h2>
          <p>
            Chuck has over 25 years experience in business including Big 4
            experience as a CPA and in the financial markets as a private
            trader. Comfortable in C-suite and senior management engagement
            where client relations are critical to business development and
            strategic alliances.
          </p>
          <a href="https://www.linkedin.com/in/charleskaucher/" target="BLANK">LINKEDIN</a>
          
        </div>
      </div>

      {/* tom */}
      <div className="tom">
        <div className="details">
          <h2>Tom Berger</h2>
          <p>
            Tom has over 45 years in business, having led seven different
            companies as well as held the positions of a Company Officer/Board
            Member with several since 1990. Tom is also a mentor to startups at
            Tech Alpharetta. Tom also has published hundreds of business
            articles to his website <Link>CXO-Atlas</Link>
          </p>
          <a href="https://www.linkedin.com/in/tom-berger-cxo-atlas/" target="BLANK">LINKEDIN</a>
        </div>
        <div className="img">
          <img src={tom} alt="tom" />
        </div>
      </div>

      {/* scott wold */}
      <div className="scott">
        <div className="img">
          <img src={scott} alt="chuck" />
        </div>
        <div className="details">
          <h2>Scott Wold</h2>
          <p>
            Scott brings over 30 years of sales, marketing, business strategy,
            and executive leadership experience when mentoring founders of
            startups. Scott has led three companies as well as sat on the Board
            for two companies. Scott is also active with several non-profits
            including Boy Scouts of America, Rotary International, and Kiwanis
            International
          </p>

          
          <a href="https://www.linkedin.com/in/scottawold/" target="BLANK">LINKEDIN</a>
        </div>
      </div>
      {/* team */}
      <div className="team">
        <div className="details">
          <h2>our members</h2>
          <p>
            Our Members are the vital individuals that attend each meeting to
            provide help and feedback to the presenters. They are seasoned
            business leaders to experienced entrepreneurs, who share a common
            belief in "paying it forward" to help new entrepreneurs and
            companies succeed.
          </p>
          {/* <Link className="linkedin">ATTEND A FUTURE MEETING</Link> */}
          <a href="https://web.archive.org/web/20221205075710/https://theentrepreneurialhour.com/attend-a-meeting-1" target="blank">ATTEND A FUTURE MEETING</a>
        </div>
        <div className="img teamimg">
          <img src={team} alt="tom" />
        </div>
      </div>
      {/* sponsers */}
      <div className="sponsor sponsorimg">
        <div className="img ">
          <img src={sponsor} alt="sponsor" />
        </div>
        <div className="details">
          {/* <h2>Scott Wold</h2> */}
          <p>
            Tech Alpharetta, the first organization of its kind in Georgia, was
            established in 2012 by the City of Alpharetta, GA. Comprised of
            Alpharetta’s leading technology companies, both large and small, the
            members are charged with identifying and pursuing key investment
            opportunities and policy decisions for Alpharetta’s technology
            companies and its burgeoning technology industry.
          </p>
          <p>
            The City of Alpharetta is home to nearly 600 technology companies
            making up 35% of Where Georgia Leads technology companies. The city
            also houses over a quarter of Metro Atlanta’s top 25 technology
            employers resulting in the city’s daytime working population
            exceeding that of residents. With one the most robust and redundant
            fiber and power fiber infrastructure networks in the south east,
            Alpharetta has been a central hub for new and relocating technology
            companies. To continue to foster this growth, the ATC’s mission has
            created four sub-committees to add value beyond geography.
          </p>

          <p>
            <li>
              GROW – Designed to support entrepreneurship, innovation, and
              start-up tech.
            </li>
            <li>
              BUILD – Focused on identifying and developing advanced
              infrastructure that will support the technologies of tomorrow.
            </li>
            <li>
              BRAND – Creating new messaging that will help to attract new
              business investment and maintain Alpharetta’s position as a
              leading location for technology ventures
            </li>
            <li>
              ENGAGE – Enhancing relationships among Alpharetta’s technology
              companies and building understanding of the business in which they
              are engaged.
            </li>
          </p>
          {/* <button>LEARN MORE ABOUT TECH ALPHARETTA</button> */}
          <a className="learnmore" href=" https://techalpharetta.com/" target="blank">LEARN MORE ABOUT TECH ALPHARETTA</a>
        </div>
      </div>
<div id="sdetails">
  
 
 {/* <div className="sdetails">
<h4> Sponsor </h4>
<h3>
  EZInnovation 
</h3>
 </div> */}
</div>
      <footer className="footer">
        copyright &copy; 2023 the enterpreneural hour all rights reserved
        <div>
          <img className="socialmedia" src={socialmedia} alt="social media" />
        </div>
      </footer>
    </div>
  );
};

export default Aboutus;
