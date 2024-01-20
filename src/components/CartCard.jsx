import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/cartCard.css";
import { deleteFromCart } from "../Redux/action-types";
import { useToast } from "@chakra-ui/react";

const CartCard = ({ course }) => {
  const cart = useSelector((state) => state.cart);
  let toast = useToast();
  let dispatch = useDispatch();
  const dropFromCourse = () => {
    toast({
      title: "Course removed from the cart.",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
    dispatch(deleteFromCart(course));
  };
  return (
    <div className="courseCard">
      {/* <div>{JSON.stringify(course)}</div> */}
      <div>
        <img src={`${course.courseImage}`} />
        <div className="coursePrice">Rs. {course.coursePrice}/-</div>
      </div>
      <div className="courseDesc">
        <div className="courseTitle">{course.courseTitle}</div>
        <div className="courseDescription">{course.description}</div>
        <div className="courseAuthor">Dr. {course.author}</div>
        <span className="level">{course.level} Level</span>
        <span> - </span>
        <span className="duration">{course.duration} minutes</span>
        <div className="rating">
          <span>Ratings : {course.rating}</span>{" "}
          <span>({course.reviews} Reviews)</span>
        </div>
        {course.language && (
          <div className="laguages">
            Languages Available : {course.language.join(", ")}
          </div>
        )}
        <div className="skills">
          <strong>Skills you'll gain : </strong>
          {course.skills.join(", ")}
        </div>
        <div className="courseDropButton">
          {/* <div className="coursePrice">Rs. {course.coursePrice}/-</div> */}
          <button className="dropButton" onClick={dropFromCourse}>
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
