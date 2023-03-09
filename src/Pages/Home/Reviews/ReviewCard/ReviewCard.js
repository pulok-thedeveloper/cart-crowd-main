import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card pb-5">
      <p className="review p-16 rounded-lg">"{review?.review}"</p>
      <div className="author flex items-center gap-8 mt-20">
        <div
          style={{ backgroundImage: `url(${review.img})` }}
          className="author-image bg-cover bg-top w-24 h-24 rounded-lg"
        ></div>
        <div className="author-detail text-left">
          <p className="author-name">{review?.name}</p>
          <p className="author-title">Customer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
