import React, { Fragment, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/home/Home"));
const Layout = lazy(() => import("./components/layout/Layout"));
const DetailProduct = lazy(() => import("./pages/detailProduct/DetailProduct"));
const WishlistWrapper = lazy(() =>
  import("./pages/wishlist-wrapper/WishlistWrapper")
);
const CartWrapper = lazy(() => import("./pages/cart-wrapper/CartWrapper"));
const Login = lazy(() => import("./pages/login/Login"));
const Auth = lazy(() => import("./pages/auth/Auth"));
const Admin = lazy(() => import("./pages/admin/Admin"));
const CreateProduct = lazy(() =>
  import("./pages/admin/createProduct/CreateProduct")
);
const CreateCategory = lazy(() =>
  import("./pages/admin/createCategory/CreateCategory")
);
const ManageCategory = lazy(() =>
  import("./pages/admin/manageCategory/ManageCategory")
);
const ManageProduct = lazy(() =>
  import("./pages/admin/manageProduct/ManageProduct")
);
const Brand = lazy(() => import("./pages/brand/Brand"));
const Shop = lazy(() => import("./pages/shop/Shop"));
const Profile = lazy(() => import("./pages/admin/profile/Profile"));

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
