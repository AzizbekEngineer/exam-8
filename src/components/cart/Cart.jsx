// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { GoProject } from "react-icons/go";
// import { GrLinkNext } from "react-icons/gr";
// import "./cart.scss";
// import {
//   decreaseAmount,
//   increaseAmount,
//   remove,
// } from "../../context/slice/cartSlice";
// import Modal from "../Modal/Modal";
// import Payment from "../payment/Payment";

// const Cart = () => {
//   const cartData = useSelector((state) => state.cart.value);
//   const dispatch = useDispatch();
//   const [payment, setPayment] = useState(false);
//   console.log(cartData);
//   const cartItem = cartData?.map((el) => (
//     <div className="cart__item" key={el._id}>
//       <div className="cart__img">
//         <img src={el?.urls?.[0]} alt="" />
//       </div>
//       <div className="cart__info">
//         <h3 className="cart__title">{el?.title}</h3>
//         <p className="cart__desc">{el?.desc}</p>
//         <h3 className="cart__price">${el?.price}</h3>
//       </div>
//       <div className="cart__btns">
//         <button onClick={() => dispatch(remove(el))} className="cart__delete">
//           <RiDeleteBin6Line />
//         </button>
//         <div className="cart__counter">
//           <button
//             disabled={el.amount < 1}
//             onClick={() => dispatch(decreaseAmount(el))}
//           >
//             -
//           </button>
//           <span>{el.amount}</span>
//           <button onClick={() => dispatch(increaseAmount(el))}>+</button>
//         </div>
//       </div>
//     </div>
//   ));
//   return (
//     <div className="cart">
//       <div className="container">
//         <div className="cart__box">
//           <div className="cart__items">{cartItem}</div>
//           <div className="cart__forms">
//             <h3 className="cart__order__title">Order Summary</h3>
//             <div className="cart__orders">
//               <div className="cart__order">
//                 <span>Subtotal</span>
//                 <h3>$565</h3>
//               </div>
//               <div className="cart__order">
//                 <span>Discount (-20%)</span>
//                 <h3>$565</h3>
//               </div>
//               <div className="cart__order">
//                 <span>Delivery Fee</span>
//                 <h3>$565</h3>
//               </div>
//               <div className="cart__order">
//                 <h4>Total</h4>
//                 <h3>$565</h3>
//               </div>
//             </div>
//             <form className="cart__form">
//               <label htmlFor="">
//                 <GoProject />
//                 <input type="text" name="" id="" placeholder="Add promo code" />
//               </label>
//               <button>Apply</button>
//             </form>
//             <button className="cart__check" onClick={() => setPayment(true)}>
//               <span>Go to Checkout</span>
//               <GrLinkNext />
//             </button>
//           </div>
//         </div>
//         {payment ? (
//           <Modal width={800} close={setPayment}>
//             <Payment setModal={setPayment} data={cartData} />
//           </Modal>
//         ) : (
//           <></>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoProject } from "react-icons/go";
import { GrLinkNext } from "react-icons/gr";
import "./cart.scss";
import {
  decreaseAmount,
  increaseAmount,
  remove,
} from "../../context/slice/cartSlice";
import Modal from "../Modal/Modal";
import Payment from "../payment/Payment";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [payment, setPayment] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Calculate Subtotal
  const subtotal = cartData.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  // Apply discount if promo code is valid
  const handleApplyPromoCode = () => {
    if (promoCode === "DISCOUNT20") {
      setDiscount(0.2); // 20% discount
    } else {
      setDiscount(0); // No discount
    }
  };

  // Calculate total after discount
  const total = subtotal - subtotal * discount;

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
        <button onClick={() => dispatch(remove(el))} className="cart__delete">
          <RiDeleteBin6Line />
        </button>
        <div className="cart__counter">
          <button
            disabled={el.amount <= 1}
            onClick={() => dispatch(decreaseAmount(el))}
          >
            -
          </button>
          <span>{el.amount}</span>
          <button onClick={() => dispatch(increaseAmount(el))}>+</button>
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
                <h3>${subtotal.toFixed(2)}</h3>
              </div>
              <div className="cart__order">
                <span>Discount (-{discount * 100}%)</span>
                <h3>-${(subtotal * discount).toFixed(2)}</h3>
              </div>
              <div className="cart__order">
                <span>Delivery Fee</span>
                <h3>$0.00</h3> {/* Assume free delivery for simplicity */}
              </div>
              <div className="cart__order">
                <h4>Total</h4>
                <h3>${total.toFixed(2)}</h3>
              </div>
            </div>
            <form
              className="cart__form"
              onSubmit={(e) => {
                e.preventDefault();
                handleApplyPromoCode();
              }}
            >
              <label htmlFor="promoCode">
                <GoProject />
                <input
                  type="text"
                  name="promoCode"
                  id="promoCode"
                  placeholder="Add promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </label>
              <button type="submit">Apply</button>
            </form>
            <button className="cart__check" onClick={() => setPayment(true)}>
              <span>Go to Checkout</span>
              <GrLinkNext />
            </button>
          </div>
        </div>
        {payment ? (
          <Modal width={800} close={setPayment}>
            <Payment setModal={setPayment} data={cartData} total={total} />
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
