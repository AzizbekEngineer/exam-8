import React from "react";
import { Link } from "react-router-dom";
import "./product.scss";
import { GoStarFill } from "react-icons/go";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slice/wishlistSlice";
import { add } from "../../context/slice/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);

  return (
    <div className="products__card">
      <div className="products__card__img">
        <Link to={`/product/${product?._id}`}>
          <img src={product?.urls?.[0]} alt="card-img" />
        </Link>
        <div className="products__card__btns">
          <button onClick={() => dispatch(toggleHeart(product))}>
            {wishlist.some((el) => el._id === product?._id) ? (
              <FaHeart color="#FF4858" />
            ) : (
              <FaRegHeart />
            )}
          </button>
          <button
            onClick={() => {
              dispatch(add(product));
            }}
          >
            {cartData.some((el) => el._id === product?._id) ? (
              <FaShoppingCart color="black" />
            ) : (
              <IoCartOutline />
            )}
          </button>
        </div>
      </div>
      <div className="products__card__content">
        <h3>{product.title}</h3>
        <div className="products__card__rating">
          <div className="products__card__stars">
            <GoStarFill color="gold" />
            <GoStarFill color="gold" />
            <GoStarFill color="gold" />
            <GoStarFill color="gold" />
            <GoStarFill color="gold" />
          </div>
          <p>{product.rating}/5</p>
        </div>
        <div className="products__card__price">
          <p className="products__card__price-new">${product.price}</p>
          <p className="products__card__price-old">${product.oldPrice}</p>
          <button className="products__card__price__off">
            -
            {(
              ((product.oldPrice - product.price) / product.price) *
              100
            ).toFixed(0)}
            %
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
