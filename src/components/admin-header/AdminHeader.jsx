import { IoIosMenu } from "react-icons/io";
import React from "react";
import "./adminHeader.scss";

const AdminHeader = ({ setClose }) => {
  return (
    <div className="admin__header">
      <button
        onClick={() => setClose((p) => !p)}
        className="admin__header__btn"
      >
        <IoIosMenu className="admin__header__humburger" />
      </button>
      <div>
        <p>Azizbek Tolipov</p>
      </div>
    </div>
  );
};

export default AdminHeader;
