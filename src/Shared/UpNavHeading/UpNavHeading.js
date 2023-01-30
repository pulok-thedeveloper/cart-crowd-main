import React from 'react';
import { Link } from 'react-router-dom';
import './UpNavHeading.css'

const UpNavHeading = () => {
    return (
        <div>
            <p className='up-nav-heading uppercase'>Free Shipping World wide for all orders over $199! <Link className='font-semibold' to='/'>Shop Now</Link></p>
        </div>
    );
};

export default UpNavHeading;