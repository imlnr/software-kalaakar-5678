import React from 'react'
import RatingStars from './RatingStars'
import './css/card.css'
import { useNavigate } from 'react-router-dom'
const Card = ({ data,id }) => {
    // console.log("getting", data[0].Duration);
    const navigate = useNavigate();
    return (
        <div id='card'>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <div className='inn-card-det'>
                <div className='img-logo'>
                    <span class="material-symbols-outlined">
                        menu_book
                    </span>
                </div>
                <p className='card-title'>{data[0].courseTitle}</p>
            </div>
            <RatingStars rating={data[0].rating} />
            <div className='author-img'>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>
                    {data[0].author}
                </p>
            </div>
            <span >50 lectures({data[0].duration})</span>
            <p>{data[0].coursePrice} All Course/{(data[0].coursePrice / 12).toFixed(0)} per month</p>
            <button onClick={()=> navigate(`/course/${id}`)}>Enroll Now</button>
        </div>
    )
}

export default Card