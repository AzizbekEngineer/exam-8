import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import logo from "../../../assets/images/logo.png";
import { BsCart2 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

import "./header.scss";
import Search from "../../search/Search";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [close, setClose] = useState(true);
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  let isLogin = useSelector((state) => state.auth.token);
  const cartData = useSelector((state) => state.cart.value);
  const wishlistData = useSelector((state) => state.wishlist.value);

  const handleOverlayClick = () => {
    setShow(false);
  };

  return (
    <>
      {close ? (
        <div className="header__top">
          <div className="header__top__info container">
            <div></div>
            <div className="header__top__info__desc">
              <p>
                Sign up and get 20% off your first order.{" "}
                <span>Sign Up Now</span>
              </p>
            </div>
            <button
              onClick={() => setClose(false)}
              className="header__top__close"
            >
              <IoCloseSharp />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <header className="header">
        <nav className="header__nav container">
          <div className="header__nav__logo">
            <button
              onClick={() => setShow(true)}
              className="header__nav__logo-menu"
            >
              <RxHamburgerMenu />
            </button>
            <NavLink to={"/"}>
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <ul className={`header__nav__link ${show ? "header__show" : ""}`}>
            <li onClick={() => setShow(false)} className="header__nav__close">
              <IoCloseSharp />
            </li>
            <li className="header__nav__item">
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li className="header__nav__item">On Sale</li>
            <li className="header__nav__item">
              <NavLink to={"/brand"}>Brands</NavLink>
            </li>
          </ul>
          <div className="header__nav__form">
            <Search />
          </div>

          <div className="header__nav__btns">
            <div className="header__nav__btns-search">
              <IoSearchOutline onClick={() => setShowSearch((prev) => !prev)} />
            </div>
            {showSearch ? (
              <div className="header__nav__form__new">
                <Search />
              </div>
            ) : (
              <></>
            )}
            <NavLink to={"/wishlist"} className="header__likes">
              <FaRegHeart />
              <sup>{wishlistData?.length ? wishlistData?.length : 0}</sup>
            </NavLink>
            <NavLink to={"/cart"} className="header__likes">
              <BsCart2 />
              <sup>{cartData?.length ? cartData?.length : 0}</sup>
            </NavLink>
            <NavLink to={isLogin ? "/admin/createProduct" : "/login"}>
              <VscAccount />
            </NavLink>
          </div>
        </nav>
      </header>
      <div
        className={`header__overlay ${show ? "header__overlay__show" : ""}`}
        onClick={handleOverlayClick}
      ></div>
    </>
  );
};

export default Header;
