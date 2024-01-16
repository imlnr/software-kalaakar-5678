import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addcollege_success } from '../Redux/action-types';

const Home = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addcollege_success({
            "id": 1,
            "name": "VIT College",
            "universities": "Oxford University",
            "location": "Cityville, State",
            "image": "image.com",
            "college-email": "contacts@vit.in",
            "college-phone": "+91454545454",
            "courses": [
                {
                    "course-title": "Full Stack Web Development",
                    "course-price": 250000,
                    "description": "Description for the colleges",
                    "level": "Begineer",
                    "Duration": 260,
                    "Rating": 3,
                    "language": [
                        "English",
                        "Hindi"
                    ],
                    "skills": [
                        "Html",
                        "Css",
                        "JavaScript",
                        "React"
                    ],
                    "reviews": 26
                }
            ],
            "image-gallery": ["image.com", "image2.com"]
        }));
    }, [])
    // console.log(state);
    return (
        <div>
            Home page
            <pre>
                {JSON.stringify(state, null, 2)}
            </pre>
        </div>
    )
}

export default Home