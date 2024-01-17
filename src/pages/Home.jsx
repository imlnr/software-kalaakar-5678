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
                <img  src="https://xero-staff.com/images/cvs.png" alt="" />
                <div className='ben-details'>
                    <p>LEARN ANYTHING</p>
                    <h1>Benefits About Online <br /> Learning Expertise</h1>
                    <div className="ben-cards">
                        <div className='ben-card-item'>
                            <span class="material-symbols-outlined">
                                menu_book
                            </span>
                            <div className='ben-card-text'>
                                <p>Online Course</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className='ben-card-item'>
                            <span class="material-symbols-outlined">
                                card_membership
                            </span>
                            <div className="ben-card-text">
                                <p>Earn A Certificates</p>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div className='ben-card-item'>
                            <span class="material-symbols-outlined">
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
        <div className="counts">
            <div className='inner-counts'>
                
            </div>
        </div>
    </div>
    )
}

export default Home