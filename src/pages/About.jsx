import React from 'react'
import "./css/about.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const speakersData = [
  {
    id: 1,
    image: 'https://avatars.mds.yandex.net/get-images-cbir/3911212/krq6yw79dKpjvW3vudRpdQ4940/ocr', // Replace with the actual path to your image
    name: 'ROGER SCOTT',
    post: 'MARKETING MANAGER',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  {
    id: 2,
    image: 'https://avatars.mds.yandex.net/get-images-cbir/1572853/bgqJS_W1S4DaPN3QuYwKwg7416/ocr', // Replace with the actual path to your image
    name: 'ROGER SCOTT',
    post: 'MARKETING MANAGER',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  {
    id: 3,
    image: 'https://avatars.mds.yandex.net/get-images-cbir/1647146/ATJL0YfXkliDOCV37ph5Lg7491/ocr', // Replace with the actual path to your image
    name: 'ROGER SCOTT',
    post: 'MARKETING MANAGER',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
  },
  // Add more speaker data as needed
];

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="temp">
      <div id='shbzupper'>
        <h4 className='shbzheading4' id='heading-upper'>HOME/ABOUT US</h4>
        <h1 className='shbzheading1' id='heading-about-us'>About Us</h1>
      </div>
      <div id="shbzmid">
        <div id="shbzleftmid">
          <img id='leftmidimg' src="https://mastertech.my/wp-content/uploads/2022/12/Homepage_Banner_Visual_Pic-882x1024.png" alt="img" />
        </div>
        <div id="shbzrightmid">
          <div id="midrightupper">
            <h3 className='headingcolor' style={{ marginBottom: "0%" }}>LEARN ANYTHING</h3>
            <h1 id='benefitsheading'>Benefits About Online Learning Expertise</h1>
          </div>
          <div className="rightmidcomp">
            <div className="icons">
              <img className='shbzicons' src="https://cdn-icons-png.freepik.com/512/8573/8573955.png" alt="img" />

            </div>
            <div className='shbzrightcontent'>
              <h2 className="shbzheading2">Online Courses</h2>
              <p id="shbzpara">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

          </div>
          <div className="rightmidcomp">
            <div className="icons">
              <img className='shbzicons' src="https://cdn-icons-png.flaticon.com/512/4308/4308745.png" alt="img" />
            </div>
            <div className='shbzrightcontent'>
              <h2 className="shbzheading2">Earn A Certificates</h2>
              <p id="shbzpara">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

          </div>
          <div className="rightmidcomp">
            <div className="icons">
              <img className='shbzicons' src="https://cdn-icons-png.flaticon.com/512/5986/5986159.png" alt="img" />
            </div>
            <div className='shbzrightcontent'>
              <h2 className="shbzheading2">Learn with Expert</h2>
              <p id="shbzpara">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

          </div>

        </div>
      </div>
      {/* <div id="shbzdata">
        <div>
        <h1 className='textColor successfulstudents'>3,000</h1>
        <h2 className='textColor'>SUCCESS STORIES</h2>
        </div>
        <div>
        <h1 className='textColor successfulstudents'>320</h1>
        <h2 className='textColor'>TRUSTED TUTOR</h2>
        </div>
        <div>
        <h1 className='textColor successfulstudents'>1,000</h1>
        <h2 className='textColor'>SCHEDULES</h2>
        </div>
        <div>
        <h1 className='textColor successfulstudents'>587</h1>
        <h2 className='textColor'>COURSES</h2>
        </div>
    
      </div> */}
      <div className="ben-counts">
        <div className='inner-counts'>
          <div className="count-items">
            <span class="material-symbols-outlined">
              school
            </span>
            <div>
              <p>3,000</p>
              <p>SUCCESS STORIES</p>
            </div>
          </div>
          <div className="count-items">
            <span className="material-symbols-outlined">
              groups
            </span>
            <div>
              <p>320</p>
              <p>TRUSTED TUTORS</p>
            </div>
          </div>
          <div className="count-items">
            <span className="material-symbols-outlined">
              calendar_month
            </span>
            <div>
              <p>1,000</p>
              <p>SCHEDULES</p>
            </div>
          </div>
          <div className="count-items">
            <span className="material-symbols-outlined">
              menu_book
            </span>
            <div>

              <p>587</p>
              <p>COURSES</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial">
        <h3 className='headingcolor'>Testimonial</h3>
        <h1 className='successfulstudents'>Our Successful Students</h1>
      </div>
        {/* carausel */}
        <Slider {...settings}>
      {speakersData.map((speaker) => (
        <div key={speaker.id} className="carousel-item">
          <div className="carouselcard">
          <div className="card">
            <div className="speakerimage">
              <img src={speaker.image} alt={speaker.name} />
            </div>
            <div className="speakerinfo">
              <h2 className="name">{speaker.name}</h2>
              <h3 className="post headingcolor">{speaker.post}</h3>
              <h3>{speaker.description}</h3>
            </div>
          </div>
          <div className="card">
            <div className="speakerimage">
              <img src={speaker.image} alt={speaker.name} />
            </div>
            <div className="speakerinfo">
              <h2 className="name">{speaker.name}</h2>
              <h3 className="post headingcolor">{speaker.post}</h3>
              <h3>{speaker.description}</h3>
            </div>
          </div>
          <div className="card">
            <div className="speakerimage">
              <img src={speaker.image} alt={speaker.name} />
            </div>
            <div className="speakerinfo">
              <h2 className="name">{speaker.name}</h2>
              <h3 className="post headingcolor">{speaker.post}</h3>
              <h3>{speaker.description}</h3>
            </div>
          </div>
          </div>
          
        </div>
      ))}
    </Slider>

{/*  */}
      <div className="shbzlast">
        <div id="lastleft">
          <h1>Newsletter - Stay tune and get the latest update</h1>
          <h3>Far far away, behind the word mountains</h3>
        </div>
        <div id="lastright">
          <input type="email" id='shbzemail' placeholder='Enter email address                              ' />
        </div>
      </div>
    </div>
  )
}

export default About