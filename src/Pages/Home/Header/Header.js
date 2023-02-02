import React, { useEffect, useState } from 'react';
import './Header.css';
import { TfiAngleRight, TfiAngleLeft } from 'react-icons/tfi';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
    const [slider, setSlider] = useState();
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        fetch('http://localhost:5000/header/slider')
            .then(res => res.json())
            .then(data => setSlider(data.data))
            .catch(err => console.log(err.message))
    }, [])

    const nextSlide = () => {
        if (slideIndex !== slider?.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === slider?.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(slider?.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className='p-16'>
            <div className='slide-container relative w-100'>

                {
                    slider?.map((obj, index) => {
                        return (
                            <div key={index} className={slideIndex === index + 1 ? `slide relative slide-content-${slideIndex} active-anim` : "slide"}>
                                <div className='slide-left'>
                                    <h4>{slider[slideIndex - 1]?.subtitle}</h4>
                                    <h1>{slider[slideIndex - 1]?.title}</h1>
                                    <Link className='flex items-center' to='/'>Shop Collection <BsArrowRight className='ml-5'/></Link>
                                </div>
                                <div className='slide-right'>
                                    <img src={slider[slideIndex - 1]?.image} alt="" border="0" />
                                </div>
                            </div>
                        )
                    })
                }
                <button
                    onClick={nextSlide}
                    className={"next btn-slide"}>
                    <TfiAngleRight />
                </button>

                <button
                    onClick={prevSlide}
                    className={"prev btn-slide"}>
                    <TfiAngleLeft />
                </button>

                <div className="container-dots">
                    {slider?.map((item, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;