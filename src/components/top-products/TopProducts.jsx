import React, { useState } from "react";
import { TOP_PRODUCTS } from "../../static";
import "./topProducts.scss";
import Products from "../products/Products";
import { useGetProductsQuery } from "../../context/api/productApi";
import Loading from "../loading/Loading";

const TopProducts = () => {
  const { data, isLoading } = useGetProductsQuery({ limit: 4 });
  const [isBtn, setIsBtn] = useState(false);

  return (
    <section id="top">
      <div className="container">
        <div className="top">
          <h2 className="section-title">TOP SELLING</h2>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="top__products">
              <Products isBtn={false} data={data?.payload} />
            </div>
          )}
          <button className="view-all__btn">View All</button>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
