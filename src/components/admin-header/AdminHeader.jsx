import { IoIosMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import React from "react";
import "./adminHeader.scss";
import { useGetProfileQuery } from "../../context/api/adminApi";
import { NavLink } from "react-router-dom";

const AdminHeader = ({ setClose }) => {
  const { data } = useGetProfileQuery();
  return (
    <div className="admin__header">
      <button
        onClick={() => setClose((p) => !p)}
        className="admin__header__btn"
      >
        <IoIosMenu className="admin__header__humburger" />
      </button>
      <div className="admin__header__profile">
        <NavLink to={"profile"}>
          <CgProfile />
        </NavLink>
      </div>
    </div>
  );
};

export default AdminHeader;
