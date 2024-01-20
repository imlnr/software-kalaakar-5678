import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";
import "./css/cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const registeredCourses = useSelector((state) => state.registeredCourses);

  let price = 0;
  if (cart.length > 0) {
    cart.forEach((element) => {
      price += element.coursePrice;
    });
  }
  return (
    <div className="cartPage">
      {/* <h1>{JSON.stringify(cart)}</h1> */}
      <div>
        {cart.map((course, index) => {
          return <CartCard key={index} course={course} />;
        })}
      </div>
      {cart.length > 0 ? (
        <>
          <div>Total for all Courses : {price}</div>
          <div className="paymentButtonDiv">
            <button className="paymentButton">
              <Link to="/payments">Make Payment</Link>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="emptyCart">
            <div className="emptyCartTitle">Cart is empty </div>
            <div className="emptyCartMessage">Add Items to the cart</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
