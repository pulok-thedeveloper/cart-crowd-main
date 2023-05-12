import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import { AuthContext } from '../../Context/AuthProvider';

const WomenProducts = () => {
    const params = useParams();
    const category = params.category;
    const {categories} = useContext(AuthContext);
    const [products, setProducts] = useState();
    const [catData, setcatData] = useState();

    useEffect(() => {
        fetch(`https://cart-crowd-server.vercel.app/shop/women/${category}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.data);
                setcatData(data.catData)
            })
            .catch(error => console.log(error))
    }, [category])

    return (
        <div className='products-container p-8 md:p-16'>
            <div className='products-header' style={{backgroundImage: `url(${catData?.image}})`}}>
                <div className='products-header-details py-12 text-center'>
                    <div>
                        <h1>{category}</h1>
                        <p>Add to cart, whatever you want.</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-20 pt-16'>
            <div className="sidebar col-span-4 min-[480px]:col-span-3">
          <div className="sticky top-32">
            <h2 className="text-2xl font-semibold mb-5">
              FILTER BY CATEGORIES
            </h2>
            <div>
              <form>
                <div className="grid gap-2 mb-10">
                  {categories?.map((category) => (
                    <div className="flex gap-5 text-2xl" key={category._id}>
                      <input
                        type="checkbox"
                        id={category?.name}
                        name={category?.name}
                        value={category?.name}
                      />
                      <label className="cursor-pointer" for={category?.name}>
                        {category?.name}
                      </label>
                    </div>
                  ))}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-5">
                    FILTER BY PRICE
                  </h2>
                  <div className="grid grid-cols-3">
                    <input
                      type="text"
                      id="minimum"
                      value="0"
                      className="text-2xl py-2 px-3 outline-none border focus:border-primary"
                    />
                    <input
                      type="text"
                      id="maximum"
                      value="9999"
                      className="text-2xl py-2 px-3 outline-none border focus:border-primary"
                    />
                    <input className="py-2 px-3 bg-primary text-secondary text-2xl cursor-pointer" type="submit" value="FILTER"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
                <div className='products-cards-container col-span-8 min-[480px]:col-span-9 grid min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    products?.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default WomenProducts;