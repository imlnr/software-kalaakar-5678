import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../pages/css/courses.css";
import { useToast } from "@chakra-ui/toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/action-types";
import { Link } from "react-router-dom";

const Courses = () => {
  const [course, setCourse] = useState({});
  const [college, setCollege] = useState({});
  const id = useParams();
  let dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    let res = fetch(`http://localhost:8080/courses/${id.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(1);
        setCourse(data);
      });
    let res2 = fetch(`http://localhost:8080/colleges/${id.id}`)
      .then((res2) => res2.json())
      .then((data) => {
        setCollege(data);
      });
  }, []);
  const handleClick = () => {
    dispatch(addToCart(course));
  };
  return (
    <>
      <div className="singleCourse">
        {/* {JSON.stringify(course)} */}
        <div className="descHeader">
          <div className="singleCourseDesc">
            <h1 className="singleCourseTitle">{course.courseTitle}</h1>
            {course.language && <p>Taught in : {course.language.join(", ")}</p>}
            <p className="singleCourseDescription">{course.description}</p>
            <div>
              <button className="enrollButton" onClick={handleClick}>
                Enroll For the Course
              </button>
              <button className="financialAidButton">
                Financial Aid Available
              </button>
            </div>
          </div>
          <div className="descAuth">
            <img
              src="https://i.pinimg.com/564x/14/17/91/141791e52c8b60893c1f8874460f1ef5.jpg"
              alt="instructor_Image"
            />
            <p className="singleCourseAuthor">
              Instructor : Dr. {course.author}
            </p>
          </div>
        </div>
        <div className="detailsCard">
          <p className="singleCourselevel">{course.level} Level</p>
          <div className="vertLine"></div>
          <p className="singleCourseDuration">{course.duration} minutes</p>
          <div className="vertLine"></div>
          <p className="singleCourseRating">
            <p>Ratings : {course.rating}</p>
            <p>({course.reviews} Reviews)</p>
          </p>
        </div>
        {/* <p className="singleCourseLaguages">Languages Available : {course.language.join(', ')}</p> */}
        {/* {course.skills && <p className="singleCourseSkills"><strong>Skills you'll gain : </strong>{course.skills.join(', ')}</p>}  */}
        <strong>Skills you'll gain : </strong>
        <div className="descSkill">
          {course.skills &&
            course.skills.map((skill, index) => {
              return (
                <p key={index} className="skill">
                  {skill}
                </p>
              );
            })}
        </div>
        <div className="singleCoursePriceSection">
          <p className="providedBy">
            <strong>Offered By : </strong>
            {college.name}, {college.universities}
          </p>
          {/* <p className="singleCoursePrice">Rs. {course.coursePrice}/-</p> */}
          {/* <button className="registerButton" ><Link to={`/course/${course.id}`}  >Register for The Course</Link> </button> */}
        </div>
      </div>
    </>
  );
};

export default Courses;
