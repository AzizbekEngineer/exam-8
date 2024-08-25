import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import "./manageCategory.scss";

import Modal from "../../../components/Modal/Modal";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "../../../context/api/categoryApi";

const ManageCategory = () => {
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const { data, isLoading } = useGetCategoryQuery();
  const [categoryDelete] = useDeleteCategoryMutation();
  const [editCategory, { isLoading: isUpdating, error: updateError }] =
    useUpdateCategoryMutation();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      categoryDelete(id);
    }
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setUpdatedTitle(category.title);
    setShow(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (selectedCategory) {
      try {
        await editCategory({
          id: selectedCategory._id,
          title: updatedTitle,
        }).unwrap();
        setShow(false);
      } catch (error) {
        console.error("Failed to update category: ", error);
      }
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      setUpdatedTitle(selectedCategory.title);
    }
  }, [selectedCategory]);

  return (
    <div className="manage__category">
      <h2 className="manage__category__name">Manage Category</h2>
      {isLoading ? (
        <div className="manage__loading__cards">
          <div className="manage__loading__card bg__animation"></div>
          <div className="manage__loading__card bg__animation"></div>
          <div className="manage__loading__card bg__animation"></div>
          <div className="manage__loading__card bg__animation"></div>
          <div className="manage__loading__card bg__animation"></div>
        </div>
      ) : (
        <div className="manage__category__cards">
          {data?.payload?.map((el) => (
            <div key={el._id} className="manage__category__card">
              <h3 className="manage__category__title">{el.title}</h3>
              <div className="manage__category__btns">
                <button
                  className="manage__category__delete"
                  onClick={() => handleDelete(el._id)}
                >
                  <RiDeleteBinLine />
                </button>
                <button
                  onClick={() => handleEdit(el)}
                  className="manage__category__edit"
                >
                  <FaEdit />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {show && selectedCategory && (
        <Modal close={() => setShow(false)}>
          <form onSubmit={handleSave}>
            <label htmlFor="title">
              <span>Title</span>
              <input
                type="text"
                id="title"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
            </label>
            <button type="submit" disabled={isUpdating}>
              {isUpdating ? "Saving..." : "Save"}
            </button>
            {updateError && <p className="error">Failed to update category.</p>}
          </form>
        </Modal>
      )}
    </div>
  );
};

export default ManageCategory;
