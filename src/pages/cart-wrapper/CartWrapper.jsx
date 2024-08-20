import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../components/cart/Cart";

const CartWrapper = () => {
  return (
    <div>
      <h2>CartWrapper</h2>
      <Cart />
    </div>
  );
};

export default CartWrapper;
