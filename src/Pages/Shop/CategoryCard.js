import React from 'react';
import './CategoryCard.css';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    return (
        <div className=''>
            <Link to={`/shop/${category.name}`}>
                <div className='category-card relative' style={{backgroundImage: `url(${category.image}})`}}>
                    <h3 className='category-title absolute top-7 left-7 px-5 py-2'>{category.name}</h3>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;