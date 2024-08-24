import React, { useState } from "react";
import Products from "../../../components/products/Products";
import { useGetProductsQuery } from "../../../context/api/productApi";
import "./manageProduct.scss";
import Loading from "../../../components/loading/Loading";

const ManageProduct = () => {
  const [isBtn, setIsBtn] = useState(true);
  const { data, isLoading } = useGetProductsQuery({ limit: 4 });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="manageProduct">
          <Products data={data?.payload} isBtn={isBtn} />
        </div>
      )}
    </div>
  );
};

export default ManageProduct;
