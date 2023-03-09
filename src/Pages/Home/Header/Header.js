import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Pagination } from "swiper";
import "./Header.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const Header = () => {
  return (
    <div className="header-container w-full p-16">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
      <SwiperSlide>
          <div className="slide slide-3 w-full h-full px-32 grid grid-cols-3 items-center" style={{ backgroundImage: `url("https://i.postimg.cc/MKB444Vj/banner-Covid.jpg")` }}>
            <div className="text-left">
              <h4>Innovative Electronics</h4>
              <h1>Shop Our Extensive Electronics Collection</h1>
              <Link className="mt-5 flex items-center gap-3" to="/shop">
                Shop Now <BsArrowRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-2 w-full h-full px-32 grid grid-cols-2 items-center" style={{ backgroundImage: `url("https://i.ibb.co/HVRjLQ7/7046077-1528.jpg")` }}>
            <div className="text-left">
              <h4>Crafting Comfort</h4>
              <h1>Discover Your Perfect Piece of Furniture</h1>
              <Link className="mt-5 flex items-center gap-3" to="/shop">
                Shop Now <BsArrowRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide-1 w-full h-full px-32 grid grid-cols-2 items-center">
            <div className="text-left">
              <h4>Unleash Your Style</h4>
              <h1>Shop Our Clothing and Feel Confident in Your Style</h1>
              <Link className="mt-5 flex items-center gap-3" to="/shop">
                Shop Now <BsArrowRight />
              </Link>
            </div>
            <div>
              <img className="w-full" src="https://i.ibb.co/yFrTCcF/Clothing-items.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

//

export default Header;
