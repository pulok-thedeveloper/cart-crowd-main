import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsCard from "../../Products/ProductsCard";
import "./BestSellers.css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

const BestSellers = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://cart-crowd-server.vercel.app/shop/Best%20Sellers")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="best-sellers text-center p-8 md:p-16">
      <h1 className="mb-3 title">Best Sellers</h1>
      <p className="description">Bringing you the best deals every day.</p>
      <div className="mt-16">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
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
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {products?.map((product) => (
            <SwiperSlide className="grid" key={product._id} >
              <ProductsCard product={product}></ProductsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
