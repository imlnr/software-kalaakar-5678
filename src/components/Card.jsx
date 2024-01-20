import React from 'react'
import RatingStars from './RatingStars'
import './css/card.css'
import { useNavigate } from 'react-router-dom'
const Card = ({ data }) => {
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
                <p className='card-title'>{data.courseTitle}</p>
            </div>
            <RatingStars rating={data.rating} />
            <div className='author-img'>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>
                    {data.author}
                </p>
            </div>
            <span >50 lectures({data.duration})</span>
            <p>{data.coursePrice} All Course/{(data.coursePrice / 12).toFixed(0)} per month</p>
            <button onClick={()=> navigate(`/course/${data.id}`)}>Enroll Now</button>
        </div>
    )
}

export default Card