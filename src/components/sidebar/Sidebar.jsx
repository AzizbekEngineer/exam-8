import React, { memo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { FaChevronCircleLeft } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../../context/slice/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="sidebar">
      <div>
        <h2 className="sidebar__logo">
          <Link to={"/"}>
            <FaArrowAltCircleLeft />
          </Link>
          <span>Dashboard</span>
        </h2>
        <ul className="sidebar__collection">
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"createProduct"}>
              <IoCreateOutline />
              <span>Create Product</span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"manageProduct"}>
              <MdManageAccounts />
              <span>Manage Product</span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"createCategory"}>
              <IoCreateOutline />
              <span>Create Category</span>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink className={"sidebar__link"} to={"manageCategory"}>
              <MdManageAccounts />
              <span>Manage Category</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <button className="logout__link" onClick={handleLogOut}>
        <BiLogOut className="log__out__icon" />
        <span>Log out</span>
      </button>
    </div>
  );
};

export default memo(Sidebar);
