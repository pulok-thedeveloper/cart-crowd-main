import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductsCard from "../../Products/ProductsCard";
import "./NewArrivals.css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

const NewArrivals = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://cart-crowd-server.vercel.app/shop/New%20Arrivals")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="new-arrival text-center p-16">
      <h1 className="mb-3 title">New Arrivals</h1>
      <p className="description">Creating a world of happy shoppers.</p>
      <div className="mt-16">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {products?.map((product) => (
            <SwiperSlide>
              <ProductsCard key={product._id} product={product}></ProductsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
