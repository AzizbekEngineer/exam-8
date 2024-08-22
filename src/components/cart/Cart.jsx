import React from "react";
import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoProject } from "react-icons/go";
import { GrLinkNext } from "react-icons/gr";
import "./cart.scss";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.value);
  console.log(cartData);
  const cartItem = cartData?.map((el) => (
    <div className="cart__item" key={el._id}>
      <div className="cart__img">
        <img src={el?.urls?.[0]} alt="" />
      </div>
      <div className="cart__info">
        <h3 className="cart__title">{el?.title}</h3>
        <p className="cart__desc">{el?.desc}</p>
        <h3 className="cart__price">${el?.price}</h3>
      </div>
      <div className="cart__btns">
        <button className="cart__delete">
          <RiDeleteBin6Line />
        </button>
        <div className="cart__counter">
          <button>-</button>
          <span>5</span>
          <button>+</button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__box">
          <div className="cart__items">{cartItem}</div>
          <div className="cart__forms">
            <h3 className="cart__order__title">Order Summary</h3>
            <div className="cart__orders">
              <div className="cart__order">
                <span>Subtotal</span>
                <h3>$565</h3>
              </div>
              <div className="cart__order">
                <span>Discount (-20%)</span>
                <h3>$565</h3>
              </div>
              <div className="cart__order">
                <span>Delivery Fee</span>
                <h3>$565</h3>
              </div>
              <div className="cart__order">
                <h4>Total</h4>
                <h3>$565</h3>
              </div>
            </div>
            <form className="cart__form">
              <label htmlFor="">
                <GoProject />
                <input type="text" name="" id="" placeholder="Add promo code" />
              </label>
              <button>Apply</button>
            </form>
            <button className="cart__check">
              <span>Go to Checkout</span>
              <GrLinkNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
