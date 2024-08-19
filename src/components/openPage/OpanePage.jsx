import React from "react";
import loading from "../../assets/images/loading.gif";
import "./openLoad.scss";

const OpenPage = () => {
  return (
    <div className="open">
      <div className="open__img">
        <img src={loading} alt="" />
      </div>
    </div>
  );
};

export default OpenPage;
