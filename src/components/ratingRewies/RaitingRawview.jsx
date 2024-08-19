import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "./review.scss";

const RatingReviews = () => {
  const data = [
    {
      id: 1,
      title: "Sarah M.",
    },
    { id: 2, title: "Alex K." },
    { id: 3, title: "James L." },
    {
      id: 4,
      title: "Sarah M.",
    },
    {
      id: 5,
      title: "Alex K.",
    },
    {
      id: 6,
      title: "James L.",
    },
  ];

  const ReviewItem = data?.map((el) => (
    <div className="review__card" key={el.id}>
      <div className="review__stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="review__info">
        <h3 className="review__name">{el?.title}</h3>
        <div className="review__icon">
          <FaCheck />
        </div>
      </div>
      <p className="review__desc">
        "Finding clothes that align with my personal style used to be a
        challenge until I discovered Shop.co. The range of options they offer is
        truly remarkable, catering to a variety of tastes and occasions.”
      </p>
    </div>
  ));

  return (
    <div className="review">
      <div className=" container">
        <div className="review__cards">{ReviewItem}</div>
      </div>
    </div>
  );
};

export default RatingReviews;
