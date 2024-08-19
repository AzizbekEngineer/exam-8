import React from "react";

import Products from "../products/Products";

const Wishlist = ({ data }) => {
  return (
    <div className="">
      <div className="top__products">
        <Products data={data} />
      </div>
    </div>
  );
};

export default Wishlist;
