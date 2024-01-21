import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addcollege_success,
  getCollege,
  getCourses,
} from "../Redux/action-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/home.css";
import { useNavigate } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Card from "../components/Card";
import CourseCategoryCard from "../components/CourseCategoryCard";
import { data } from "autoprefixer";
import Testimonials from "../components/Testimonials";
import Loading from "../components/Loading";
const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCollege());
    dispatch(getCourses());
  }, [dispatch]);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
  };
  // console.log(state);
  const slicedData = state.courses ? state.courses.slice(0, 9) : [];
  const slicedData2 = state.colleges ? state.colleges.slice(0, 12) : [];
  const testimonialsArray = Array.from({ length: 9 }, (v, i) => i + 1);
  return (
    <div id="container-home">
      <div id="bg-img">
        <div id="full-100vh">
          <div className="div-content">
            <p>WELCOME TO EDUSPRINT</p>
            <h1>
              Best Online Education <br />
              Expertise
            </h1>
            <p className="div-c-desc">
              Far far away, behind the word mountains, far from the countries
              Vokalia <br /> and Consonantia, there live the blind texts.
            </p>
            <div className="div-c-buttons">
              <button onClick={() => navigate("/")}>
                GET STARTED NOW! <ArrowForwardIcon />
              </button>
              <button onClick={() => navigate("/search")}>
                VIEW COURSES <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="learn-anything">
        <div className="inner-learn-anything">
          <img src="https://xero-staff.com/images/cvs.png" alt="" />
          <div id="ben-details">
            <p>LEARN ANYTHING</p>
            <h1>
              Benefits About Online <br /> Learning Expertise
            </h1>
            <div className="ben-cards">
              <div className="ben-card-item">
                <span className="material-symbols-outlined gs">menu_book</span>
                <div className="ben-card-text">
                  <p>Online Course</p>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="ben-card-item">
                <span className="material-symbols-outlined gs">
                  card_membership
                </span>
                <div className="ben-card-text">
                  <p>Earn A Certificates</p>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="ben-card-item">
                <span className="material-symbols-outlined gs">
                  engineering
                </span>
                <div className="ben-card-text">
                  <p>Learn with Expert</p>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ben-counts">
        <div className="inner-counts">
          <div className="count-items">
            <span class="material-symbols-outlined">school</span>
            <div>
              <p>3,000</p>
              <p>SUCCESS STORIES</p>
            </div>
          </div>
          <div className="count-items">
            <span className="material-symbols-outlined">groups</span>
            <div>
              <p>320</p>
              <p>TRUSTED TUTORS</p>
            </div>
          </div>
          <div className="count-items">
            <span className="material-symbols-outlined">calendar_month</span>
            <div>
              <p>1,000</p>
              <p>SCHEDULES</p>
            </div>
          </div>
          <div className="count-items">
            <span className="material-symbols-outlined">menu_book</span>
            <div>
              <p>587</p>
              <p>COURSES</p>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <p>OUR COURSES</p>
        <h1>Explore Our Popular Online Courses</h1>
        <div className="inn-carousel">
          {
            state.isLoading? <Loading/>:
          <Slider {...settings}>
            {slicedData.map((val) => {
              return <Card data={val} key={val.id} />;
            })}
          </Slider>
          }
        </div>
      </div>
      <div className="course-category">
        <p>COURSES</p>
        <h1>Browse Our Online Courses</h1>
        <div className="inn-course-category">
          {state.isLoading? <Loading/>:slicedData2.map((val) => (
            <CourseCategoryCard key={val.id} data={val} />
          ))}
        </div>
      </div>
      <div className="testimonials">
        <p>TESTIMONIAL</p>
        <h1>Our Successful Students</h1>
        <div className="inn-testimonials">
          <Slider {...settings}>
            {testimonialsArray.map((index) => {
              return <Testimonials />;
            })}
          </Slider>
        </div>
      </div>
      <div className="packages">
        <p>OUR PRICING</p>
        <h1>Pricing & Packages</h1>
        <div className="inn-packages">
          <div className="package-list">
            <p>BASIC PLAN</p>
            <h1>$49K</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button>GET STARTED</button>
          </div>
          <div className="package-list">
            <p>BEGINEER PLAN</p>
            <h1>$79K</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button>GET STARTED</button>
          </div>
          <div className="package-list">
            <p>PREMIUM PLAN</p>
            <h1>$109K</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button>GET STARTED</button>
          </div>
          <div className="package-list">
            <p>ULTIMATE PLAN</p>
            <h1>$149K</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button>GET STARTED</button>
          </div>
        </div>
      </div>

      <div className="subscribe">
        <div className="inn-subscribe">
          <div className="inn-sub">
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <p>Far far away, behind the word mountains</p>
          </div>
          <div className="inn-sub-inputs">
            <input
              id="home-input"
              type="email"
              placeholder="Enter email address"
            />
            <span class="material-symbols-outlined">send</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
