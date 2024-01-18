import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/cartCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{JSON.stringify(cart)}</h1>
      <div>
        {cart.map((course) => {
          return <CartCard course={course} />;
        })}
      </div>
    </>
  );
};

export default Cart;
