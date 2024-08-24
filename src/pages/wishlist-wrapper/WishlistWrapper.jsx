import React, { Fragment, useEffect } from "react";
import Wishlist from "../../components/wishlist/Wishlist";
import { useSelector } from "react-redux";
import Empty from "../../components/empty/Empty";

const WishlistWrapper = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="wishlist container">
      <Fragment>
        {wishlist.length ? (
          <div>
            <h2 style={{ textAlign: "center", padding: "20px 0" }}>
              Sevimlilar
            </h2>
            <Wishlist data={wishlist} />
          </div>
        ) : (
          <Empty
            url="https://cdni.iconscout.com/illustration/premium/thumb/empty-wishlist-12057806-9824476.png?f=webp"
            title={"Hali sevimlilar mavjud emas!"}
            link={"sevimlilarni tanlash!"}
          />
        )}
      </Fragment>
    </div>
  );
};

export default WishlistWrapper;
