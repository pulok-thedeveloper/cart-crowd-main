import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Review.css";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard/ReviewCard";

const Reviews = () => {
    const [reviews, setReviews] = useState();

    useEffect(()=>{
        fetch('https://cart-crowd-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data.data))
        .catch(err => {
            console.log(err.message)
        })
    },[])
  return (
    <div className="px-16 py-20 review-section text-center">
      <h1 className="mb-3 title">Latest Users Reviews</h1>
      <p className="description">Unwrap happiness with every purchase.</p>
      <div className="mt-20">
      <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          >
        {
            reviews?.map(review => <SwiperSlide><ReviewCard key={review._id} review={review}></ReviewCard></SwiperSlide>)
        }
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
