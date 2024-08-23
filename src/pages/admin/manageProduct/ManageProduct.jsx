import React, { useState } from "react";
import Products from "../../../components/products/Products";
import { useGetProductsQuery } from "../../../context/api/productApi";
import "./manageProduct.scss";

const ManageProduct = () => {
  const [isBtn, setIsBtn] = useState(true);
  const { data } = useGetProductsQuery({ limit: 4 });

  return (
    <div>
      <div className="manageProduct">
        <Products data={data?.payload} isBtn={isBtn} />
      </div>
    </div>
  );
};

export default ManageProduct;
