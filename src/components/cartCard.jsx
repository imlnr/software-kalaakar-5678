import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartCard = ({ course }) => {
  return (
    <div className="courseCard">
      {/* <p>{JSON.stringify(course)}</p> */}
      <div>
        <img src={`${course.courseTitle}`} />
        <p className="coursePrice">Rs. {course.coursePrice}/-</p>
      </div>
      <div className="courseDesc">
        <p className="courseTitle">{course.courseTitle}</p>
        <p className="courseDescription">{course.description}</p>
        <p className="courseAuthor">Dr. {course.author}</p>
        <span className="level">{course.level} Level</span>
        <span> - </span>
        <span className="duration">{course.duration} minutes</span>
        <p className="rating">
          <span>Ratings : {course.rating}</span>{" "}
          <span>({course.reviews} Reviews)</span>
        </p>
        <p className="laguages">
          Languages Available : {course.language.join(", ")}
        </p>
        <p className="skills">
          <strong>Skills you'll gain : </strong>
          {course.skills.join(", ")}
        </p>
        <div className="coursePriceSection">
          {/* <p className="coursePrice">Rs. {course.coursePrice}/-</p> */}
          <button className="registerButton">
            <Link to={`/course/${course.id}`}>Register for The Course</Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
