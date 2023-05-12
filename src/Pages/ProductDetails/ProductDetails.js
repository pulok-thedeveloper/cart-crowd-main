import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "./ProductDetails.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import SimilarProducts from "./SimilarProducts/SimilarProducts";

const ProductDetails = () => {
  const router = useParams();
  const { id } = router;
  const [product, setProduct] = useState();
  const [pSize, setPsize] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const dataTabs = ["Description", "Additional Information", "Reviews"];
  const [dataTab, setDataTab] = useState(dataTabs[0]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const {addToDb} = useContext(AuthContext);


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleProductSize = (index) => {
    setPsize(index);
  };

  const handleDecrease = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    if (quantity !== product?.available) {
      setQuantity(quantity + 1);
    }
  };

  const handleDataTab = (index) => {
    setDataTab(dataTabs[index]);
  };


  const handleAddToCart = (id, quantity) =>{
    const location = "cart"
    addToDb(id, quantity, location);
  }

  const handleAddToWishlist = (id, quantity) =>{
    const location = "wishlist"
    addToDb(id, quantity, location);
  }

  useEffect(() => {
    fetch(`https://cart-crowd-server.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div className="p-8 md:p-16">
      <nav className="mb-10">
        <ol className="breadcrumb flex gap-2">
          <li className="breadcrumb-item">
            <a href="/">Home</a> /
          </li>
          <li className="breadcrumb-item">
            <a href={`/shop/${product?.categories[0]}`}>
              {" "}
              {product?.categories[0]}
            </a>{" "}
            /
          </li>
          <li className="breadcrumb-item">
            <a href={`/${product?.categories[0]}/${product?.categories[1]}`}>
              {" "}
              {product?.categories[1]}
            </a>{" "}
            /
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product?.title}
          </li>
        </ol>
      </nav>
      <div className="grid grid-cols-12 text-left gap-14">
        <div className="col-span-12 sm:col-span-5 product-slider">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {product?.image.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-12 sm:col-span-7">
          <h1 className="product-title mb-5">{product?.title}</h1>
          <div className="product-detail-price mb-10">
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
              <p className="discount-price">${product?.price?.disPrice}</p>
            )}
          </div>
          <p className="product-detail mb-10">{product?.detail}</p>

          {product?.colors?.length > 0 && (
            <p className="product-colors mb-10">
              <span>Color: </span>
              {product?.colors?.map((color, index) => (
                <span key={index}>{color}, </span>
              ))}
            </p>
          )}

          <div className="product-sizes mb-10">
            <p className="mb-5">Size: {product?.sizes[pSize]}</p>
            <ul className="product-size-list flex flex-wrap gap-5">
              {product?.sizes?.map((size, index) => (
                <li
                  key={index}
                  className={`product-size-box ${
                    index === pSize ? "active" : ""
                  }`}
                  onClick={() => handleProductSize(index)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>

          <div className="product-stock-status mb-10">
            {product?.available !== 0 ? (
              <span className="in-stock px-5 py-2">In Stock</span>
            ) : (
              <span className="out-stock px-5 py-2">Out of Stock</span>
            )}
          </div>

          <div className="fixed max-[640px]:bottom-0 max-[640px]:left-0 max-[640px]:px-10 max-[640px]:py-5 max-[640px]:z-30 max-[640px]:bg-white w-full sm:static flex gap-5 sm:mb-10">
            <div className="quantity py-7 px-4 flex justify-between items-center">
              <span
                onClick={handleDecrease}
                className="decrease cursor-pointer"
              >
                <AiOutlineMinus />
              </span>
              <span className="qty">{quantity}</span>
              <span
                onClick={handleIncrease}
                className="increase cursor-pointer"
              >
                <AiOutlinePlus />
              </span>
            </div>
            <div>
              <button onClick={()=>handleAddToCart(id, quantity)} className="add-to-cart px-28 py-7 sm:px-40">Add to cart</button>
            </div>
          </div>
          <div className="flex mb-10">
            <button onClick={()=>handleAddToWishlist(id, quantity)} className="flex justify-center items-center cursor-pointer add-to-wishlist gap-2">
              <FaRegHeart className="text-3xl" /> Add to Wishlist
            </button>
          </div>
          <hr className="mb-10" />
          <div>
            <p className="product-colors mb-10">
              <span>Categories: </span>
              {product?.categories?.map((category, index) => (
                <span key={index}>{category}, </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="my-20">
        <div className="data-tabs flex gap-12 mb-10">
          {dataTabs.map((tab, index) => (
            <h3
              onClick={() => {
                handleDataTab(index);
              }}
              key={index}
              className={`data-tab cursor-pointer ${
                tab === dataTab ? "active" : ""
              }`}
            >
              {tab}
            </h3>
          ))}
        </div>
        <hr className="mb-10" />
        <div className="data text-left">
          {dataTab === "Description" && <p>{product?.description}</p>}
          {dataTab === "Reviews" && (
            <div className="add-review">
              <h2 className="mb-5">Add a review</h2>
              <hr className="mb-10" />
              <div className="mb-8">
                <p>Your rating*</p>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p className="mb-5">Your review*</p>
                <textarea className="w-full h-72 outline-none px-8 py-5 review mb-8" {...register("review", { required: true })}></textarea>
                <input className="submit-btn py-3 px-8 cursor-pointer" type="submit" />
              </form>
            </div>
          )}
        </div>
      </div>
      <SimilarProducts mainProduct={product}></SimilarProducts>
    </div>
  );
};

export default ProductDetails;
