import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcollege_success } from '../Redux/action-types';
import "./css/home.css";
import { useNavigate } from 'react-router-dom';

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
                        <button onClick={()=> navigate('/')}>GET STARTED NOW!</button>
                        <button onClick={()=> navigate('/course')}>VIEW COURSES</button>
                    </div>
                </div>
            </div>
        </div>
        <div id='learn-anything'>
            <div className="inner-learn-anything">
            </div>
            
        </div>
    </div>
    )
}

export default Home