import React from "react";
import Product from "../product/Product";

const Products = ({ data, isBtn }) => {
  // console.log(data);

  return (
    <>
      {data?.map((product) => (
        <Product isBtn={isBtn} product={product} key={product._id} />
      ))}
    </>
  );
};

export default Products;
