import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({blog}) => {
    return (
        <div>
            <div className='mb-10'>
                <img className='h-full' src={blog.img} alt=""/>
            </div>
            <div className='text-left'>
                <p  className='blog-data mb-5'><span className='uppercase'>{blog.category}</span> | <span>{blog.date}</span></p>
                <Link to='/' className='blog-title'>{blog.title}</Link>
                <p className='blog-details mt-5'>{blog.details.slice(0, 110)} <Link to='/' className='read-more'>Read more..</Link></p>
            </div>
        </div>
    );
};

export default BlogCard;