import React from "react";
import "./empty.scss";
import { NavLink } from "react-router-dom";

const Empty = ({ url, title }) => {
  return (
    <div className="container empty">
      <h3 className="empty__title">{title}</h3>
      <div className="empty__img">
        <img src={url} alt="" />
      </div>
      <NavLink className="empty__btn" to={"/"}>
        Home
      </NavLink>
    </div>
  );
};

export default Empty;
