import React, { useEffect, useState } from "react";
import LastDealProductCard from "./LastDealProductCard/LastDealProductCard";
import './LastDeals.css';

const LastDeals = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://cart-crowd-server.vercel.app/products/lastdeals")
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="last-deals px-16 py-20">
      <h3 className="title mb-5 text-center">Don't Miss The Last Deals</h3>
      <p className="description text-center">Smart shopping. Happy savings.</p>
      <div className="mt-20 grid grid-cols-2 gap-16">
        {
            products?.map(product => <LastDealProductCard key={product._id} product={product}></LastDealProductCard>)
        }
      </div>
    </div>
  );
};

export default LastDeals;
