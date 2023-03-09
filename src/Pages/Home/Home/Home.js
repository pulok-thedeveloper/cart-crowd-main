import React from 'react';
import BestSellers from '../Best Sellers/BestSellers';
import Blogs from '../Blogs/Blogs';
import Categories from '../Categories/Categories';
import Header from '../Header/Header';
import LastDeals from '../LastDeals/LastDeals';
import NewArrivals from '../New Arrivals/NewArrivals';
import NewsLetter from '../NewsLetter/NewsLetter';
import Reviews from '../Reviews/Reviews';
import Speciality from '../Speciality/Speciality';
import Trendings from '../Trendings/Trendings';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Speciality></Speciality>
            <Trendings></Trendings>
            <Categories></Categories>
            <NewArrivals></NewArrivals>
            <LastDeals></LastDeals>
            <BestSellers></BestSellers>
            <Reviews></Reviews>
            <Blogs></Blogs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;