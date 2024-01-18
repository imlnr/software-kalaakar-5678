import React from 'react'
import RatingStars from './RatingStars'
import './css/card.css'
const Card = ({ data }) => {
    // console.log("getting",data);
    return (
        <div className='card'>
            <div className='inn-card-det'>
                <div className='img-logo'>
                    <span class="material-symbols-outlined">
                        menu_book
                    </span>
                </div>
                <p>{data[0].collegeTitle}</p>
            </div>
            <RatingStars rating={data[0].rating} />
            <div className='author-img'>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>
                    {data[0].author}
                </p>
            </div>
            <p>{data[0].collegePrice} All Course/{(data[0].collegePrice / 12).toFixed(0)} per month</p>
            <button>Enroll Now</button>
        </div>
    )
}

export default Card