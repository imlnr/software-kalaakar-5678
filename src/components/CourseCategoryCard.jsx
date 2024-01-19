import React from 'react';
import './css/CourseCategory.css'

const CourseCategoryCard = ({ data }) => {
    return (
        <div className='college-category-card'>
            <span class="material-symbols-outlined colg-item">
                menu_book
            </span>
            <h1>{data.universities}</h1>
            <span id='course-count'>{data.courses[0].skills.length} Courses</span>
        </div>
    )
}

export default CourseCategoryCard