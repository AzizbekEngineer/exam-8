import React from "react";
import "./LoadingSingle.scss";

const LoadingSingle = () => {
  return (
    <div className="">
      <div className="loadingSin__wrapper">
        <div class="loadingSin__item">
          <div class="loadingSin__img2">
            <img className="bg__animation" src="" alt="" />
            <img className="bg__animation" src="" alt="" />
            <img className="bg__animation" src="" alt="" />
          </div>
          <div class="loadingSin__img1 bg__animation"></div>
        </div>
        <div class="loadingSin__items">
          <div class="loadingSin__title bg__animation"></div>
          <div class="loadingSin__title bg__animation"></div>
          <hr />
          <div class="loadingSin__title bg__animation"></div>
          <div class="loadingSin__title bg__animation"></div>
          <div class="loadingSin__title bg__animation"></div>
          <hr />
          <div class="loadingSin__title bg__animation"></div>
          <div class="loadingSin__title bg__animation"></div>
          <hr />
          <div class="loadingSin__title bg__animation"></div>
          <div class="loadingSin__title bg__animation"></div>
          {/* <div class="loadingSin__title bg__animation"></div> */}
        </div>
      </div>
    </div>
  );
};

export default LoadingSingle;
