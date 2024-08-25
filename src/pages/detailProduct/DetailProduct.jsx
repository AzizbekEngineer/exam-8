import React, { useEffect, useState } from "react";
import "./detailProduct.scss";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { NavLink, useParams } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import Tabs from "../../components/Tab/Tab";
import RatingReviews from "../../components/ratingRewies/RaitingRawview";
import Faqs from "../../components/faq/Faqs";
import Products from "../../components/products/Products";
import LoadingSingle from "../../components/loadingSingle/LoadingSingle";

const DetailProduct = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  const { data: dataProducts, isLoading } = useGetProductsQuery();
  const [index, setIndex] = useState(0);

  console.log(dataProducts);

  useEffect(() => {
    window.scroll(0, 0);
  }, [id]);
  const dataInfo = [
    "Yaxshi sifatli mahsulot",
    "Arzon va qulay narxlarda",
    "Xar qanday olchamda",
  ];

  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <div className="detail">
      <div className="container">
        {isLoading ? (
          <LoadingSingle />
        ) : (
          <div className="detail__cards">
            <div className="detail__card__img">
              <div className="detail__card__imgs">
                {data?.payload?.urls?.map((el, inx) => (
                  <div key={inx}>
                    <img src={el} alt="" onClick={() => setIndex(inx)} />
                  </div>
                ))}
              </div>
              <div className="detail__img">
                <img
                  src={data?.payload?.urls?.[index]}
                  alt={data?.payload?.title}
                />
              </div>
            </div>
            <div className="detail__card__info">
              <h3 className="detail__title">{data?.payload?.title}</h3>
              <div className="detail__stars">
                <GoStarFill color="gold" />
                <GoStarFill color="gold" />
                <GoStarFill color="gold" />
                <GoStarFill color="gold" />
                <GoStarFill color="gold" />
                {data?.payload?.rating}/5
              </div>
              <div className="detail__card__price">
                <p className="detail__card__price-new">
                  ${data?.payload?.price}
                </p>
                {data?.payload?.oldPrice - data?.payload?.price > 0 ? (
                  <p className="products__card__price-old">
                    ${data?.payload?.oldPrice}
                  </p>
                ) : (
                  <></>
                )}

                {data?.payload?.oldPrice - data?.payload?.price > 0 ? (
                  <button className="products__card__price__off">
                    -
                    {(
                      ((data?.payload?.oldPrice - data?.payload?.price) /
                        data?.payload?.price) *
                      100
                    ).toFixed(0)}
                    %
                  </button>
                ) : (
                  <></>
                )}
              </div>
              <p className="detail__desc">{data?.payload?.desc}</p>
              <hr />
              <div className="detail__size">
                <NavLink className="detail__link" to={"#"}>
                  Small
                </NavLink>
                <NavLink className="detail__link" to={"#"}>
                  Medium
                </NavLink>
                <NavLink className="detail__link" to={"#"}>
                  Large
                </NavLink>
                <NavLink className="detail__link" to={"#"}>
                  SmX-Largeall
                </NavLink>
              </div>
              <hr />
              <div className="detail__buttons">
                <button>Add to Cart</button>
                <button>Add to Heart</button>
              </div>
              <hr />
              <div className="detail__info">
                <h3>Product haqida to'liq malumot</h3>
                {data?.payload?.info ? (
                  <div>
                    {data?.payload?.info.map((el, inx) => (
                      <div key={inx}>
                        <p>-{el}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {dataInfo.map((el, inx) => (
                      <div key={inx}>
                        <p>-{el}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <Tabs activeTab={activeTab} onTabClick={setActiveTab} />
        <div className="tab-content">
          {activeTab === "reviews" && <RatingReviews />}
          {activeTab === "faqs" && <Faqs />}
        </div>
        <h3 className="detail__like__title">You might also like</h3>
        <div className="top__products">
          <Products data={dataProducts?.payload} />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
