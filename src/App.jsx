import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import DetailProduct from "./pages/detailProduct/DetailProduct";
import WishlistWrapper from "./pages/wishlist-wrapper/WishlistWrapper";
import CartWrapper from "./pages/cart-wrapper/CartWrapper";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/createProduct/CreateProduct";
import CreateCategory from "./pages/admin/createCategory/CreateCategory";
import ManageCategory from "./pages/admin/manageCategory/ManageCategory";
import ManageProduct from "./pages/admin/manageProduct/ManageProduct";
import Brand from "./pages/brand/Brand";
import Shop from "./pages/shop/Shop";
import Profile from "./pages/admin/profile/Profile";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/wishlist" element={<WishlistWrapper />} />
          <Route path="/cart" element={<CartWrapper />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
        <Route path="/" element={<Auth />}>
          <Route path="admin/" element={<Admin />}>
            <Route path="createProduct" element={<CreateProduct />} />
            <Route path="createCategory" element={<CreateCategory />} />
            <Route path="manageCategory" element={<ManageCategory />} />
            <Route path="manageProduct" element={<ManageProduct />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
