import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./BlogCard/BlogCard";
import './Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="blog-section text-center p-16">
      <h1 className="mb-3 title">Our Latest News</h1>
      <p className="description">Discover a better way to shop.</p>
      <div className="mt-16">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {blogs?.map((blog) => (
            <SwiperSlide>
              <BlogCard key={blog._id} blog={blog}></BlogCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
