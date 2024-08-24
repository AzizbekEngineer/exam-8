import React from "react";
import "./empty.scss";
import { NavLink } from "react-router-dom";

const Empty = ({ url, title, link }) => {
  return (
    <div className="container empty">
      <div className="empty__img">
        <img src={url} alt="" />
      </div>
      <p className="empty__title">{title}</p>
      <NavLink className="empty__btn" to={"/"}>
        <span> {link}</span>
      </NavLink>
    </div>
  );
};

export default Empty;
