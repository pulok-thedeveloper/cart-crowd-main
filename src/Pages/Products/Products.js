import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./Products.css";
import ProductsCard from "./ProductsCard";
import { AuthContext } from "../../Context/AuthProvider";

const Products = () => {
  const params = useParams();
  const category = params.category;
  const { categories } = useContext(AuthContext);
  const [products, setProducts] = useState();
  const [catData, setcatData] = useState();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);

  const handlePriceFilter =(e) =>{
    e.preventDefault();
    setMinPrice(e.target.minimum.value)
    setMaxPrice(e.target.maximum.value)
  }

  useEffect(() => {
    fetch(`https://cart-crowd-server.vercel.app/shop/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setcatData(data.catData);
      })
      .catch((error) => console.log(error));
  }, [category]);


  return (
    <div className="products-container p-8 md:p-16">
      <div
        className="products-header"
        style={{ backgroundImage: `url(${catData?.image}})` }}
      >
        <div className="products-header-details py-12 text-center">
          <div>
            <h1>{category}</h1>
            <p>Add to cart, whatever you want.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-20 pt-16">
        <div className="sidebar col-span-4 min-[480px]:col-span-3">
          <div className="sticky top-32">
            <h2 className="text-2xl font-semibold mb-5">
              FILTER BY CATEGORIES
            </h2>
            <div>
              <div className="grid gap-2 mb-10">
                {categories?.map((category) => (
                  <div className="flex gap-5 text-2xl" key={category._id}>
                    <Link to={`/shop/${category.name}`} className="hover:text-primary">
                      {category?.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-5">FILTER BY PRICE</h2>
                <form onSubmit={handlePriceFilter}>
                  <div className="grid grid-cols-3">
                    <input
                      type="text"
                      id="minimum"
                      defaultValue="0"
                      name="minimum"
                      className="text-2xl py-2 px-3 outline-none border focus:border-primary"
                    />
                    <input
                      type="text"
                      id="maximum"
                      defaultValue="9999"
                      name="maximum"
                      className="text-2xl py-2 px-3 outline-none border focus:border-primary"
                    />
                    <input
                      className="py-2 px-3 bg-primary text-secondary text-2xl cursor-pointer"
                      type="submit"
                      value="FILTER"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="products-cards-container col-span-8 min-[480px]:col-span-9 grid min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products?.filter((product) => {
              return product.price.disPrice >= minPrice && product.price.disPrice <= maxPrice;
            }).map((product) => (
            <ProductsCard key={product._id} product={product}></ProductsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
