import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsCard from "../../Products/ProductsCard";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

const SimilarProducts = ({mainProduct}) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch(`https://cart-crowd-server.vercel.app/shop/${mainProduct?.categories[0]}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.log(error));
  }, [mainProduct?.categories]);
  return (
    <div className="new-arrival text-center p-8 md:p-16">
      <h1 className="mb-3 title text-[4rem]">Similar Products</h1>
      <p className="description">Creating a world of happy shoppers.</p>
      <div className="mt-16">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          breakpoints={{
            "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@2.00": {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {products?.filter((product) => {
            return product._id !== mainProduct?._id
          }).map((product) => (
            <SwiperSlide key={product._id} >
              <ProductsCard product={product}></ProductsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarProducts;
