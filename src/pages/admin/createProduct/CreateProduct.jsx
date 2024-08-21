import React, { useEffect, useState } from "react";
import "./createProduct.scss";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
} from "../../../context/api/productApi";
import { useGetValue } from "../../../hooks/useGetValue";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  description: "",
  photos: [],
};

const CreateProduct = () => {
  // let navigate = useNavigate();
  const { formData, setFormData, handleChange } = useGetValue(initialState);

  // const [createData, { data, isSuccess }] = useCreateProductMutation();

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(formData);

    // navigate("/admin/manageProduct");
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success("Mahsulot yaratildi");
  //   }
  // }, [isSuccess]);

  return (
    <div className="form">
      <h2>Create Product</h2>
      <form onSubmit={handleCreate} className="form__create" action="">
        <input
          required
          value={formData.title}
          onChange={handleChange}
          name="title"
          placeholder="title"
          type="text"
        />
        <input
          required
          value={formData.price}
          onChange={handleChange}
          name="price"
          placeholder="price"
          type="text"
        />
        <input
          required
          value={formData.oldPrice}
          onChange={handleChange}
          name="oldPrice"
          placeholder="oldPrice"
          type="text"
        />
        <input
          required
          value={formData.description}
          onChange={handleChange}
          name="description"
          placeholder="descreption"
          type="text"
        />
        <input
          required
          value={formData.photos}
          onChange={handleChange}
          name="photos"
          placeholder="Images"
          type="file"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
