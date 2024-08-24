import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import "./search.scss";
import { useNavigate } from "react-router-dom";
import { useGetProductSearchQuery } from "../../context/api/productApi";

const Search = ({ close }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const { data, isFetching } = useGetProductSearchQuery({ value, limit: 3 });

  const handleDetail = (el) => {
    navigate(`/product/${el._id}`);
    setValue("");
  };

  return (
    <div className="search">
      <div className="search__top">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={value}
            name="value"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..."
          />
          <IoSearch />
        </form>
      </div>
      {value && (
        <div className="search__data">
          {isFetching ? (
            <p>Loading...</p>
          ) : data && data.payload?.length === 0 ? (
            <p>Not Found</p>
          ) : (
            data?.payload?.map((el) => (
              <div
                key={el._id}
                className="search__item"
                onClick={() => handleDetail(el)}
              >
                <div className="search__img">
                  <img src={el.urls?.[0]} alt={el.title} />
                </div>
                <h3 className="search__title">{el.title}</h3>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
