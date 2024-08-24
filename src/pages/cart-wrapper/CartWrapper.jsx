import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Cart from "../../components/cart/Cart";
import Empty from "../../components/empty/Empty";

const CartWrapper = () => {
  const cart = useSelector((state) => state.cart.value);

  return (
    <div className="container ">
      <Fragment>
        {cart.length ? (
          <div>
            <h2 style={{ textAlign: "center", padding: "20px 0" }}>
              Mahsulotlar
            </h2>
            <Cart />
          </div>
        ) : (
          <Empty
            url="https://cdni.iconscout.com/illustration/premium/thumb/empty-wishlist-12057807-9824477.png?f=webp"
            title={"Hali mahsulotlar tanlanmagan!"}
            link={"Mahsulotlarni tanlash!"}
          />
        )}
      </Fragment>
    </div>
  );
};

export default CartWrapper;
