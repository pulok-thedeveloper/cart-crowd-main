import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Products.css';
import ProductsCard from './ProductsCard';

const Products = () => {
    const params = useParams();
    const category = params.category;

    const [products, setProducts] = useState();
    const [catData, setcatData] = useState();

    useEffect(() => {
        fetch(`https://cart-crowd-server.vercel.app/shop/${category}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.data);
                setcatData(data.catData);
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
            <div className='grid grid-cols-12 pt-16'>
                <div className='sidebar col-span-4 min-[480px]:col-span-3'>

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

export default Products;