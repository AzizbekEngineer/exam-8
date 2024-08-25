import React from "react";
import "./newProducts.scss";
import Products from "../products/Products";
import { useGetProductsQuery } from "../../context/api/productApi";
import Loading from "../loading/Loading";

const NewProducts = () => {
  const { data, isLoading } = useGetProductsQuery({ limit: 4 });
  console.log(data);

  return (
    <section id="new">
      <div className="container">
        <div className="new">
          <h2 className="section-title">NEW ARRIVALS</h2>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="new__products">
              <Products data={data?.payload} />
            </div>
          )}
          <button className="view-all__btn">View All</button>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
