import React from 'react';
import './Speciality.css';
import s01 from '../../../Assests/Images/Specialty/S01.png';
import s02 from '../../../Assests/Images/Specialty/S02.png';
import s03 from '../../../Assests/Images/Specialty/S03.png';
import s04 from '../../../Assests/Images/Specialty/S04.png';

const Speciality = () => {
    return (
        <div className='specialty-container w-full px-8 md:px-16 gap-10 py-12 grid grid-cols-2 sm:grid-cols-4'>
            <div className='spec'>
                <div><img src={s01} alt='' /></div>
                <div className='spec-detail'>
                    <h3>Free Shipping</h3>
                    <p>Free Shipping for orders over £130.</p>
                </div>
            </div>
            <div className='spec'>
                <div><img src={s02} alt='' /></div>
                <div className='spec-detail'>
                    <h3>Money Guarantee</h3>
                    <p>Within 30 days for an exchange.</p>
                </div>
            </div>
            <div className='spec'>
                <div><img src={s03} alt='' /></div>
                <div className='spec-detail'>
                    <h3>Online Support</h3>
                    <p>Within 30 days for an exchange.</p>
                </div>
            </div>
            <div className='spec'>
                <div><img src={s04} alt='' /></div>
                <div className='spec-detail'>
                    <h3>Flexible Payment</h3>
                    <p>Pay with Multiple Credit Cards.</p>
                </div>
            </div>
        </div>
    );
};

export default Speciality;