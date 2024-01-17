import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcollege_success } from '../Redux/action-types';
import "./css/home.css";
import { useNavigate } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const Home = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
    }, [])
    // console.log(state);
    return (<div id='container-home'>
        <div id='bg-img'>
            <div id='full-100vh'>
                <div className='div-content'>
                    <p>WELCOME TO EDUSPRINT</p>
                    <h1>Best Online Education <br />Expertise</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia <br /> and Consonantia, there live the blind texts.</p>
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
                <div className='ben-details'>
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
                    <span className="material-symbols-outlined">
                        person_2
                    </span>
                    <div>
                        <h1>3,000</h1>
                        <p>SUCCESS STORIES</p>
                    </div>
                </div>
                <div className="count-items">
                    <span className="material-symbols-outlined">
                        groups
                    </span>
                    <div>
                        <h1>320</h1>
                        <p>TRUSTED TUTORS</p>
                    </div>
                </div>
                <div className="count-items">
                    <span className="material-symbols-outlined">
                        calendar_month
                    </span>
                    <div>
                        <h1>1,000</h1>
                        <p>SCHEDULES</p>
                    </div>
                </div>
                <div className="count-items">
                    <span className="material-symbols-outlined">
                        menu_book
                    </span>
                    <div>
                        <h1>587</h1>
                        <p>COURSES</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home