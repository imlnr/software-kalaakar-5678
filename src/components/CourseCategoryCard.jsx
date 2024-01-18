import React from 'react';
import './css/CourseCategory.css'

const CourseCategoryCard = ({data}) => {
    return (
        <div className='college-category-card'>
            <span class="material-symbols-outlined">
                menu_book
            </span>
            <h1>{data.universities}</h1>
            <p>{data.courses[0].skills.length}Courses</p>
        </div>
    )
}

export default CourseCategoryCard