import React, { useEffect } from "react";
import "./createCategory.scss";
import { useGetValue } from "../../../hooks/useGetValue";
import { useNavigate } from "react-router-dom";
import { useCreateCategoryMutation } from "../../../context/api/categoryApi";

const initialState = {
  title: "",
};

const CreateCategory = () => {
  const { formData, setFormData, handleChange } = useGetValue(initialState);
  const navigate = useNavigate();

  const [createCategory, { data, isSuccess }] = useCreateCategoryMutation();
  const createHandleCategory = (e) => {
    e.preventDefault();
    createCategory(formData);
    console.log(formData);
    setFormData(initialState);
    // navigate("/admin/manageCategory");
  };

  return (
    <div className="createCategory">
      <h2>Create Category</h2>
      <form onSubmit={createHandleCategory} action="">
        <input
          required
          value={formData.title}
          onChange={handleChange}
          name="title"
          placeholder="category"
          type="text"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateCategory;
