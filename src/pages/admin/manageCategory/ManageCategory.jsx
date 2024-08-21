import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import "./managCategory.scss";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../../context/api/categoryApi";
import Modal from "../../../components/Modal/Modal";
import EditCategory from "../../../components/edit-category/EditeCategory";

const ManageCategory = () => {
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data, isLoading } = useGetCategoryQuery();
  const [categoryDelete] = useDeleteCategoryMutation();

  const handleDelete = (id) => {
    if (window.confirm("ochirmoqchimisiz")) {
      categoryDelete(id);
    }
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setShow(true);
  };

  return (
    <div className="manage__category">
      <h2 className="manage__category__name">Manage Category</h2>
      <div className="manage__category__cards">
        {data?.map((el) => (
          <div key={el.id} className="manage__category__card">
            <h3 className="manage__category__title">{el.title}</h3>
            <div className="manage__category__btns">
              <button
                className="manage__category__delete"
                onClick={() => handleDelete(el.id)}
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
      {show && selectedCategory && (
        <Modal close={setShow}>
          <EditCategory data={selectedCategory} close={setShow} />
        </Modal>
      )}
    </div>
  );
};

export default ManageCategory;
