import React from 'react'
import "./css/about.css";

const About = () => {
  return (
    <div id="temp">About
      <div id='shbzupper'>
        <h4 className='shbzheading4' id='heading-upper'>HOME/ABOUT US</h4>
        <h1 className='shbzheading1' id='heading-about-us'>About Us</h1>
      </div>
      <div id="shbzmid">
        <div id="shbzleftmid"></div>
        <div id="shbzrightmid">
          <div id="midrightupper">
            <h3 style={{ marginBottom: "0%" }}>LEARN ANYTHING</h3>
            <h1 id='benefitsheading'>Benefits About Online Learning Expertise</h1>
          </div>
          <div className="rightmidcomp">
            <div className="icons">
              <img className='shbzicons' src="https://w1.pngwing.com/pngs/802/420/png-transparent-key-icon-diploma-icon-design-academic-certificate-public-key-certificate-document-professional-certification-blue-thumbnail.png" alt="img" />
            </div>
            <div className='shbzrightcontent'>
              <h2 className="shbzheading2">Online Courses</h2>
              <p id="shbzpara">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

          </div>
          <div className="rightmidcomp">
            <div className="icons">
              <img className='shbzicons' src="https://w1.pngwing.com/pngs/802/420/png-transparent-key-icon-diploma-icon-design-academic-certificate-public-key-certificate-document-professional-certification-blue-thumbnail.png" alt="img" />
            </div>
            <div className='shbzrightcontent'>
              <h2 className="shbzheading2">Earn A Certificates</h2>
              <p id="shbzpara">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

          </div>
          <div className="rightmidcomp">
            <div className="icons">
              <img className='shbzicons' src="https://w1.pngwing.com/pngs/802/420/png-transparent-key-icon-diploma-icon-design-academic-certificate-public-key-certificate-document-professional-certification-blue-thumbnail.png" alt="img" />
            </div>
            <div className='shbzrightcontent'>
              <h2 className="shbzheading2">Learn with Expert</h2>
              <p id="shbzpara">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

          </div>

        </div>
      </div>
      <div id="shbzdata">
        <div>
        <h1>3,000</h1>
        <h2>SUCCESS STORIES</h2>
        </div>
        <div>
        <h1>320</h1>
        <h2>TRUSTED TUTOR</h2>
        </div>
        <div>
        <h1>1,000</h1>
        <h2>SCHEDULES</h2>
        </div>
        <div>
        <h1>587</h1>
        <h2>COURSES</h2>
        </div>
    
      </div>
    </div>
  )
}

export default About