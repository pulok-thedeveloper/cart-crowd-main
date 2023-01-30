import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { BsSearch, } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';


const Navbar = () => {
    return (
        <div className='grid grid-cols-4'>
            <div className='logo'>
                <h1 className='logo-title'>CartCrowd</h1>
            </div>
            <div className='nav-menu grid items-center justify-center col-span-2'>
                <ul className='h-full flex items-center gap-10'>
                    <li className='h-full flex items-center'>
                        <Link className='h-full flex items-center' to='/'>HOME</Link>
                    </li>
                    <li className='h-full flex items-center'>
                        <Link className='h-full flex items-center' to='/'>SHOP <IoIosArrowDown className='ml-2'/></Link>
                        <ul></ul>
                    </li>
                    <li className='h-full flex items-center'>
                        <Link className='h-full flex items-center' to='/'>MEN <IoIosArrowDown className='ml-2'/></Link>
                    </li>
                    <li className='h-full flex items-center'>
                        <Link className='h-full flex items-center' to='/'>WOMEN <IoIosArrowDown className='ml-2'/></Link>
                    </li>
                    <li className='h-full flex items-center'>
                        <Link className='h-full flex items-center' to='/'>KIDS</Link>
                    </li>
                    <li className='h-full flex items-center'>
                        <Link className='h-full flex items-center' to='/'>BLOG</Link>
                    </li>
                    <li className='h-full flex items-center'>
                        <Link className='h-full flex items-center' to='/'>CONTACT</Link>
                    </li>
                </ul>
            </div>
            <div className='nav-right grid items-center justify-end mx-10'>
                <ul className='flex gap-10'>
                    <li><FaRegHeart /></li>
                    <li><FiShoppingCart /></li>
                    <li><FaRegUser /></li>
                    <li><BsSearch /></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;