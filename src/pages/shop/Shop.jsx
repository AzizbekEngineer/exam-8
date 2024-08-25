import React, { useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";
import Products from "../../components/products/Products";
import { FaChevronRight } from "react-icons/fa6";
import {
  useGetCategoryProductQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import "./shop.scss";
import { useGetCategoryQuery } from "../../context/api/categoryApi";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loading from "../../components/loading/Loading";

const Shop = () => {
  const [categoryValue, setCategoryValue] = useState("");

  let limit = 4;
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetProductsQuery({
    limit,
    skip: page,
    category: categoryValue,
  });

  const { data: categories } = useGetCategoryQuery();
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  let totalCount = Math.ceil(data?.total / limit) || 0;
  let categoryItems = categories?.payload?.map((el) => (
    <li key={el._id}>
      <data
        value={el._id}
        onClick={(e) => setCategoryValue(e.target.value)}
        className="shop__item"
      >
        {el.title}
      </data>
    </li>
  ));

  return (
    <div className="shop">
      <div className="container">
        <div className="shop__cards">
          <div className="shop__info">
            <div className="shop__filter">
              <h3>Filters</h3>
              <IoFilter />
            </div>
            <hr />
            <div className="shop__category">
              <ul className="shop__list">
                <li>
                  <data
                    value=""
                    onClick={(e) => setCategoryValue(e.target.value)}
                    className="shop__item"
                  >
                    All
                  </data>
                </li>
                {categoryItems}
              </ul>
            </div>
            <hr />
            <div className="shop__size">
              <h2>Size</h2>
              <div className="shop__size__cards">
                <NavLink className="shop__size__item">XX-Small</NavLink>
                <NavLink className="shop__size__item">X-Small</NavLink>
                <NavLink className="shop__size__item">Small</NavLink>
                <NavLink className="shop__size__item">Medium</NavLink>
                <NavLink className="shop__size__item">Large</NavLink>
                <NavLink className="shop__size__item">X-Large</NavLink>
                <NavLink className="shop__size__item">XX-Large</NavLink>
                <NavLink className="shop__size__item">3X-Large</NavLink>
                <NavLink className="shop__size__item">4X-Large</NavLink>
              </div>
            </div>
          </div>
          <div className="shop__product__box">
            <h3>Casual</h3>
            {isLoading ? (
              <Loading />
            ) : (
              <div className="shop__products">
                <Products data={data?.payload} />
              </div>
            )}
            <Stack spacing={2}>
              <Typography>Page: {page}</Typography>
              <Pagination
                count={totalCount}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
