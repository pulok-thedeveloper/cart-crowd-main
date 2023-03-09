import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='news-letter px-16 py-24'>
            <h3 className='title mb-5'>Get our emails info on <br/> new items, sales and more.</h3>
            <p className='description'>We'll email you a voucher worth $10 off your first order over $50.</p>
            <form className='mt-10'>
                <input className='w-1/3 p-6 text-2xl outline-none' type="email" placeholder='Enter your email address'/>
                <input className='subscribe-btn px-8 py-6 text-2xl' type="submit" value="Subscribe"/>
                <p className='mt-5 text-lg'>By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
            </form>
        </div>
    );
};

export default NewsLetter;