import React from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import "./LastDealProductCard.css";
import { BsArrowRight } from "react-icons/bs";

const LastDealProductCard = ({ product }) => {
  return (
    <div className="last-deal-product-card grid grid-cols-5 p-7 gap-7">
      <div className="h-full col-span-2">
        <img className="h-full" src={product.image[0]} alt="" />
      </div>
      <div className="col-span-3">
        <h3 className="product-title mb-3">{product.title}</h3>
        <p className="product-price mb-5">
          <span className="general-price mr-3 line-through">
            ${product.price.general}
          </span>{" "}
          <span className="discount-price">${product?.price?.disPrice}</span>
        </p>
        <p className="text-2xl mb-8 text-gray-700">{product.details}</p>
        <p className="offer-para mb-3">Offer end in:</p>
        <Countdown
          className="text-3xl timer"
          date={Date.now() + 2592000000}
        />
        <p className="text-2xl my-5">
          Available: {product.available} - Sold: {product.sold}
        </p>
        <div className="flex">
          <Link
            className="last-deal-shop-btn text-2xl flex items-center gap-2 border py-2 px-5 border-black"
            to={`/product/${product.title}/${product._id}`}
          >
            Shop Now <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LastDealProductCard;
