import React from "react";
import { useSelector } from "react-redux";

const CartWrapper = () => {
  const cartData = useSelector((state) => state.cart.value);
  console.log(cartData);

  return <div>CartWrapper</div>;
};

export default CartWrapper;
