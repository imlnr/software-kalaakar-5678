import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseFWCard = ({ course }) => {
  // const [courses, setCourses] = useState([]);
  // const [filter, setFilter] = useState([]);
  // const [sort, setSort] = useState([]);
  // // const courses = college.courses;
  // useEffect(() => {
  //     setCourses(college.courses)
  // }, [])

  return (
    <div className="courseCard">
      {/* <p>{JSON.stringify(course)}</p> */}
      <div className="courseImgPri">
        <img src={`${course.courseImage}`} />
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
        {course.language && (
          <p className="laguages">
            Languages Available : {course.language.join(", ")}
          </p>
        )}

        {course.skills && (
          <p className="skills">
            <strong>Skills you'll gain : </strong>
            {course.skills.join(", ")}
          </p>
        )}
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

export default CourseFWCard;
//  {
//                     "courseTitle": "Ethical Hacking",
//                     "coursePrice": 20000,
//                     "description": "Learn ethical hacking and cybersecurity principles.",
//                     "level": "Intermediate",
//                     "Duration": 220,
//                     "Rating": 4.7,
//                     "language": [
//                         "English",
//                         "Chinese"
//                     ],
//                     "skills": [
//                         "Penetration Testing",
//                         "Network Security",
//                         "Security Policies"
//                     ],
//                     "reviews": 28
//                 }
// <!-- HTML !-->
{
  /* <button class="button-30" role="button">Button 30</button> */
}

/* CSS */
// .button-30 {
//   align-items: center;
//   appearance: none;
//   background-color: #FCFCFD;
//   border-radius: 4px;
//   border-width: 0;
//   box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
//   box-sizing: border-box;
//   color: #36395A;
//   cursor: pointer;
//   display: inline-flex;
//   font-family: "JetBrains Mono",monospace;
//   height: 48px;
//   justify-content: center;
//   line-height: 1;
//   list-style: none;
//   overflow: hidden;
//   padding-left: 16px;
//   padding-right: 16px;
//   position: relative;
//   text-align: left;
//   text-decoration: none;
//   transition: box-shadow .15s,transform .15s;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   white-space: nowrap;
//   will-change: box-shadow,transform;
//   font-size: 18px;
// }

// .button-30:focus {
//   box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
// }

// .button-30:hover {
//   box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
//   transform: translateY(-2px);
// }

// .button-30:active {
//   box-shadow: #D6D6E7 0 3px 7px inset;
//   transform: translateY(2px);
// }
