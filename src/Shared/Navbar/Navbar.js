import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { BsSearch, } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';


const Navbar = () => {
    const [categories, setCategories] = useState();
    const [menProducts, setMenProducts] = useState();
    const [womenProducts, setWomenenProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data))
            .catch(err=>{
                console.log(err.message)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/categories/men')
            .then(res => res.json())
            .then(data => setMenProducts(data.data))
            .catch(err=>{
                console.log(err.message)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/categories/women')
            .then(res => res.json())
            .then(data => setWomenenProducts(data.data))
            .catch(err=>{
                console.log(err.message)
            })
    }, [])

    return (
        <div className='nav-bar grid grid-cols-4 px-16'>
            <div className='logo grid items-center justify-start'>
                <h1 className='logo-title'>CartCrowd</h1>
            </div>
            <div className='nav-menu grid items-center justify-center col-span-2'>
                <ul className='h-full flex items-center gap-10'>
                    <li className='h-full flex items-center'>
                        <Link className='h-full flex items-center' to='/'>HOME</Link>
                    </li>
                    <li id='shop' className='h-full flex items-center relative'>
                        <Link className='h-full flex items-center' to='/'>SHOP <IoIosArrowDown className='ml-2'/></Link>
                        <div className='dropdown-menu absolute top-full text-left p-10'>
                            <p className='mb-5'>PRODUCT CATEGORIES</p>
                            <ul className='grid grid-cols-2 gap-4'>
                                {
                                    categories?.map(category => <li><Link className='hover-underline' to=''>{category.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </li>
                    <li id='men' className='h-full flex items-center relative'>
                        <Link className='h-full flex items-center' to='/'>MEN <IoIosArrowDown className='ml-2'/></Link>
                        <div className='dropdown-menu absolute top-full text-left p-10'>
                            <p className='mb-5'>MEN'S FASHION</p>
                            <ul className='grid grid-cols-2 gap-4'>
                                {
                                    menProducts?.map(category => <li><Link className='hover-underline' to=''>{category.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </li>
                    <li id='women' className='h-full flex items-center relative'>
                        <Link className='h-full flex items-center' to='/'>WOMEN <IoIosArrowDown className='ml-2'/></Link>
                        <div className='dropdown-menu absolute top-full text-left p-10'>
                            <p className='mb-5'>WOMEN'S FASHION</p>
                            <ul className='grid grid-cols-2 gap-4'>
                                {
                                    womenProducts?.map(category => <li><Link className='hover-underline' to=''>{category.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </li>
                    <li className='h-full flex items-center'>
                        <Link className='h-full flex items-center' to='/'>BLOG</Link>
                    </li>
                    <li className='h-full flex items-center'>
                        <Link className='h-full flex items-center' to='/'>CONTACT</Link>
                    </li>
                </ul>
            </div>
            <div className='nav-right grid items-center justify-end'>
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