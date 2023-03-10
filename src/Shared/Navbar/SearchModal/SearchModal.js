import React, { useEffect, useState } from "react";
import "./SearchModal.css";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ closeModal }) => {
  const [products, setProducts] = useState();
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const handleNavigate = (product) => {
    navigate(`/product/${product.title}/${product._id}`);
    closeModal();
  };

  useEffect(() => {
    fetch("https://cart-crowd-server.vercel.app/shop")
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <div onClick={closeModal} className="modal-wrapper z-10"></div>
      <div className="modal-container w-full bg-white px-16 py-24 z-10 absolute top-0 left-0">
        <p className="uppercase font-bold text-gray-400 flex justify-between">
          What are you looking for?{" "}
          <button onClick={closeModal} className="cross-btn text-3xl font-bold">
            <RxCross2 />
          </button>
        </p>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="w-full search-input py-6 font-semibold"
          type="text"
          placeholder="Search Products ..."
        />

        <div className="filtered-products-wrapper grid grid-cols-4 justify-center gap-10 mt-10">
          {products
            ?.filter((product) => {
              return search?.toLowerCase() === ""
                ? []
                : product?.title.toLowerCase().includes(search);
            })
            .map((product) => (
              <div
                onClick={() => handleNavigate(product)}
                className="flex gap-5 cursor-pointer"
              >
                <div>
                  <img
                    className="w-28 rounded-xl"
                    src={product.image[0]}
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{product.title}</h3>
                  <div className="mt-3 text-xl">
                    {product?.price?.general !== product?.price?.disPrice ? (
                      <p>
                        <span className="general-price mr-3 line-through">
                          ${product.price.general}
                        </span>{" "}
                        <span className="discount-price">
                          ${product?.price?.disPrice}
                        </span>
                      </p>
                    ) : (
                      <p className="discount-price">
                        ${product?.price?.disPrice}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
