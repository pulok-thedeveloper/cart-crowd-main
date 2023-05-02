import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsCard.css";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();


  const handleNavigate = (id) => {
    navigate(`/product/${product.title}/${product._id}`);
  };

  return (
    <div className="relative product-card">
      <img
        onClick={() => handleNavigate(product._id)}
        className="product-card-image cursor-pointer object-cover"
        src={product.image}
        alt=""
      />
      <div className="product-card-detail text-left mt-5">
        <h3
          onClick={() => handleNavigate(product._id)}
          className="mb-3 cursor-pointer"
        >
          {product.title}
        </h3>
        <div className="product-price">
          {product?.price.general !== product.price.disPrice ? (
            <p>
              <span className="general-price mr-3 line-through">
                ${product.price.general}
              </span>{" "}
              <span className="discount-price">${product.price.disPrice}</span>
            </p>
          ) : (
            <p className="discount-price">${product.price.disPrice}</p>
          )}
        </div>
      </div>
      {product.price.discount !== 0 && (
        <p className="absolute discount px-3 top-3 left-3">
          - {product.price.discount}%
        </p>
      )}
      <ul className="product-card-icons absolute p-5 grid gap-5">
        <li onClick={() => handleNavigate(product._id)} className="product-card-icon"><FaRegHeart /></li>
        <li onClick={() => handleNavigate(product._id)} className="product-card-icon"><FiShoppingCart/></li>
      </ul>
    </div>
  );
};

export default ProductsCard;
