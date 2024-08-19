import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import DetailProduct from "./pages/detailProduct/DetailProduct";
import WishlistWrapper from "./pages/wishlist-wrapper/WishlistWrapper";
import CartWrapper from "./pages/cart-wrapper/CartWrapper";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/wishlist" element={<WishlistWrapper />} />
          <Route path="/cart" element={<CartWrapper />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
