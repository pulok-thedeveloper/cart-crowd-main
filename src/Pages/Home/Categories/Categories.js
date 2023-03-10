import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("https://cart-crowd-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="category-section px-16 py-20 text-center">
      <h3 className="title mb-5">Browse by Category</h3>
      <p className="description">Your shopping companion for life.</p>
      <div className="grid grid-cols-8 justify-center justify-items-center gap-10 mt-16">
        {categories?.map((category) => (
          <div key={category._id}>
            <Link className="category-item inline-block rounded-full p-10 bg-white" to={`/shop/${category.name}`}>
              <img className="w-full" src={category.icon} alt="" />
              <p className="mt-5 text-2xl">{category.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
