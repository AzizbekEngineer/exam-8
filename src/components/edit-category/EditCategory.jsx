import React, { useState, useEffect } from "react";
import { useUpdateCategoryMutation } from "../../context/api/categoryApi";

const EditCategory = ({ data, close }) => {
  const [updateCategory, { isSuccess, isLoading }] =
    useUpdateCategoryMutation();

  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updateCategoryData = {
      title: formData.title,
    };
    updateCategory({ id: formData.id, body: updateCategoryData });
  };

  useEffect(() => {
    if (isSuccess) {
      close(false);
    }
  }, [isSuccess, close]);

  return (
    <div className="edit-Category">
      <h3 className="edit-Category__title">Kategoriyani tahrirlash</h3>
      <form className="edit-Category__form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <span>Kategoriya nomi:</span>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="title"
          />
        </label>
        <button type="submit">{isLoading ? "Loading..." : "Save"}</button>
      </form>
    </div>
  );
};

export default EditCategory;
