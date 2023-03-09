import React from 'react';
import './Trendings.css'
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Trendings = () => {
    return (
        <div className='trendings-container grid grid-cols-2 p-16 gap-16 min-h-screen'>
            <div className='trend relative p-16'>
                <div>
                    <h4>New Season</h4>
                    <h1>Big patterns are back in fashion</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    <Link className='flex items-center' to='/'>Shop Now <BsArrowRight className='ml-5' /></Link>
                </div>
                <div className='w-100 h-full absolute top-0 right-0 flex justify-end'>
                    <img className='w-100 h-full right-0' src='	https://i.postimg.cc/QCQXPvrW/banner-01-removebg-preview.png' alt="" border="0" />
                </div>
            </div>
            <div className='grid gap-16'>
                <div className='trend trend-right relative p-16'>
                    <div>
                        <h4>New Season</h4>
                        <h1>The latest men's trends this season</h1>
                        <p>Don't miss the opportunity</p>
                        <Link className='flex items-center' to='/'>Shop Now <BsArrowRight className='ml-5' /></Link>
                    </div>
                    <div className='w-100 h-full absolute top-0 right-0 flex justify-end'>
                        <img className='w-100 h-full right-0' src='https://i.postimg.cc/wTTNLd8r/pexels-chris-shafer-1805853-removebg-preview.png' alt="" border="0" />
                    </div>
                </div>
                <div className='trend trend-right relative p-16'>
                    <div>
                        <h4>New Season</h4>
                        <h1>Show your fashion with winter dresses</h1>
                        <p>Don't miss the opportunity</p>
                        <Link className='flex items-center' to='/'>Shop Now <BsArrowRight className='ml-5' /></Link>
                    </div>
                    <div className='w-100 h-full absolute top-0 right-0 flex justify-end'>
                        <img className='w-100 h-full right-0' src='https://i.postimg.cc/hPdSBpB0/pexels-jeff-denlea-2922264-removebg-preview-1.png' alt="" border="0" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trendings;