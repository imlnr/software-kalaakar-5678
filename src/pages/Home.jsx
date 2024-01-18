import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcollege_success, getCollege } from '../Redux/action-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./css/home.css";
import { useNavigate } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Card from '../components/Card';
import CourseCategoryCard from '../components/CourseCategoryCard';
import { data } from 'autoprefixer';
const Home = () => {
    const state = useSelector((state) => state.colleges);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getCollege());
    }, [])
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
    };
    // console.log(state);
    const slicedData = state.slice(0, 9);
    const slicedData2 = state.slice(0, 12);
    console.log(slicedData);
    return (<div id='container-home'>
        <div id='bg-img'>
            <div id='full-100vh'>
                <div className='div-content'>
                    <p>WELCOME TO EDUSPRINT</p>
                    <h1>Best Online Education <br />Expertise</h1>
                    <p className='div-c-desc'>Far far away, behind the word mountains, far from the countries Vokalia <br /> and Consonantia, there live the blind texts.</p>
                    <div className='div-c-buttons'>
                        <button onClick={() => navigate('/')}>GET STARTED NOW!  <ArrowForwardIcon /></button>
                        <button onClick={() => navigate('/course')}>VIEW COURSES  <ArrowForwardIcon /></button>
                    </div>
                </div>
            </div>
        </div>
        <div id='learn-anything'>
            <div className="inner-learn-anything">
                <img src="https://xero-staff.com/images/cvs.png" alt="" />
                <div id='ben-details'>
                    <p>LEARN ANYTHING</p>
                    <h1>Benefits About Online <br /> Learning Expertise</h1>
                    <div className="ben-cards">
                        <div className='ben-card-item'>
                            <span className="material-symbols-outlined gs">
                                menu_book
                            </span>
                            <div className='ben-card-text'>
                                <p>Online Course</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className='ben-card-item'>
                            <span className="material-symbols-outlined gs">
                                card_membership
                            </span>
                            <div className="ben-card-text">
                                <p>Earn A Certificates</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className='ben-card-item'>
                            <span className="material-symbols-outlined gs">
                                engineering
                            </span>
                            <div className="ben-card-text">
                                <p>Learn with Expert</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
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
        <div className="carousel-container">
            <p>OUR COURSES</p>
            <h1>Explore Our Popular Online Courses</h1>
            <div className='inn-carousel'>
                <Slider {...settings}>
                    {slicedData.map((val) => {
                        return <Card data={val.courses} key={val.id} />
                    })}
                </Slider>
            </div>
        </div>
        <div className='course-category'>
            <p>COURSES</p>
            <h1>Browse Our Online Courses</h1>
            <div className='inn-course-category'>
                {slicedData2.map((val)=>(
                    <CourseCategoryCard key={val.id} data={val}/>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Home