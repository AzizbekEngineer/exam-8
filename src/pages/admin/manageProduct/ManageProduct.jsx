import React, { Fragment, useEffect, useState } from "react";

import Products from "../../../components/products/Products";
import "./manageProduct.scss";
import { Pagination, Stack } from "@mui/material";
import { useGetProfileQuery } from "../../../context/api/adminApi";
import { Button } from "antd";
import Modal from "../../../components/Modal/Modal";
import { useGetCategoryQuery } from "../../../context/api/categoryApi";
import {
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../../../context/api/productApi";
import Loading from "../../../components/loading/Loading";

const ManageProduct = () => {
  const [editProduct, setEditProduct] = useState(null);
  const [isBtn, setIsBtn] = useState(true);

  const [page, setPage] = useState(1);
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  let limit = 8;

  let { data, isLoading: isLoadingProduct } = useGetProductsQuery({
    limit,
    skip: page,
  });
  const { data: categories } = useGetCategoryQuery();
  const pageCount = Math.ceil(data?.total / limit) || 0;
  let { data: profile } = useGetProfileQuery();

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleUpdatedUser = (e) => {
    e.preventDefault();
    let updatePro = {
      title: editProduct.title,
      price: editProduct.price,
      units: editProduct.units,
      categoryId: editProduct.categoryId._id,
      desc: editProduct.desc,
      adminId: profile?.payload._id,
      urls: editProduct.urls,
    };
    console.log(updatePro);
    updateProduct({ body: updatePro, id: editProduct._id });
    setEditProduct(false);
  };

  let categoryItems = categories?.payload?.map((el) => (
    <option key={el.id} value={el._id}>
      {el.title}
    </option>
  ));

  return (
    <Fragment>
      {isLoadingProduct ? (
        <Loading />
      ) : (
        <div className="products manageProduct">
          <div className="products__cards manageProduct__cards">
            <Products
              isBtn={isBtn}
              data={data?.payload}
              setEditProduct={setEditProduct}
            />
          </div>

          <div className="manage-products__pagination">
            <Stack spacing={2}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </div>

          {editProduct ? (
            <Modal width={600} close={setEditProduct}>
              <form
                action=""
                className="createProduct__form"
                onSubmit={handleUpdatedUser}
              >
                <div className="createProduct__input">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={editProduct.title}
                    onChange={(e) =>
                      setEditProduct((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="createProduct__input">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={editProduct.price}
                    onChange={(e) =>
                      setEditProduct((prev) => ({
                        ...prev,
                        price: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="createProduct__input">
                  <label htmlFor="units">Units</label>
                  <input
                    type="text"
                    name="units"
                    id="units"
                    value={editProduct.units}
                    onChange={(e) =>
                      setEditProduct((prev) => ({
                        ...prev,
                        units: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="createProduct__input">
                  <label htmlFor="category">Category</label>
                  <select
                    name="category"
                    value={editProduct.categoryId._id}
                    onChange={(e) =>
                      setEditProduct((prev) => ({
                        ...prev,
                        categoryId: e.target.value,
                      }))
                    }
                  >
                    {categoryItems}
                  </select>
                </div>
                <div className="createProduct__input">
                  <label htmlFor="desc">Desc</label>
                  <textarea
                    name="desc"
                    rows={4}
                    id="desc"
                    value={editProduct.desc}
                    onChange={(e) =>
                      setEditProduct((prev) => ({
                        ...prev,
                        desc: e.target.value,
                      }))
                    }
                  ></textarea>
                </div>

                <Button
                  style={{ minWidth: "100%" }}
                  loading={isLoading}
                  className="w-full"
                  type="dark"
                  htmlType="submit"
                >
                  {isLoading ? "" : "Save"}
                </Button>
              </form>
            </Modal>
          ) : (
            <></>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default ManageProduct;
