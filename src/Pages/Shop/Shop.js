import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import CategoryCard from './CategoryCard';
import './Shop.css'

const Shop = () => {
    const {categories} =useContext(AuthContext);
    return (
        <div className='shop-container p-16'>
            <div className='shop-header'>
                <div className='shop-header-details'>
                    <div>
                        <h1>Shop</h1>
                        <p>Add to cart, whatever you want.</p>
                    </div>
                </div>
            </div>
            <div className='shop-categories grid grid-cols-3 gap-10 pt-10'>
            {
                categories?.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
            }
            </div>
        </div>
    );
};

export default Shop;