import React from 'react'
import './css/Testimonials.css'

const Testimonials = () => {
    return (
        <div className='test-card'>
            <div className='img-name'>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div>
                    <h1>RODGER SCOT</h1>
                    <p>MARKETING MANAGER</p>
                </div>
            </div>
            <p className='test-message'>
                <span>"</span>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.<span>"</span>
            </p>
        </div>
    )
}

export default Testimonials