import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaRegHeart } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { AuthContext } from "../../Context/AuthProvider";
import SearchModal from "./SearchModal/SearchModal";

const Navbar = () => {
  const { categories, menProducts, womenProducts, user, logOut, cart, wishlist } =
    useContext(AuthContext);
  const [searchModal, setSearchModal] = useState(false);
  const closeModal = () => setSearchModal(false);
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="nav-bar sticky top-0 bg-secondary z-50 shadow-sm flex gap-10 min[400px]:grid grid-cols-3 md:grid-cols-4 sm:grid-cols-5 px-16 py-5 items-center justify-between">
      <div className="block sm:hidden">
        <HiBars3BottomLeft
          onClick={() => setMobileNav(!mobileNav)}
          className="text-4xl font-bold"
        />
      </div>
      <div className="logo grid items-center justify-center sm:justify-start">
        <Link to="/" className="logo-title">
          CartCrowd
        </Link>
      </div>
      {mobileNav && (
        <div
          onClick={() => setMobileNav(!mobileNav)}
          className="mobile-nav-wrapper w-full h-screen fixed left-0 top-0 z-20"
        ></div>
      )}
      <div
        className={`mobile-nav w-2/3 h-screen absolute -left-full top-0 z-20 bg-slate-500 ${
          mobileNav && "mobile-nav-active"
        }`}
      >
        <div className="flex justify-between p-10 items-center">
          <div className="logo">
            <Link to="/" className="logo-title">
              CartCrowd
            </Link>
          </div>
          <RxCross2
            className="text-5xl font-bold"
            onClick={() => setMobileNav(!mobileNav)}
          />
        </div>
      </div>

      <div className="nav-menu items-center justify-center sm:col-span-3 md:col-span-2 hidden sm:grid">
        <ul className="h-full flex items-center gap-10">
          <li className="h-full flex items-center">
            <Link className="h-full flex items-center" to="/">
              HOME
            </Link>
          </li>
          <li id="shop" className="h-full flex items-center relative">
            <Link className="h-full flex items-center" to="/shop">
              SHOP <IoIosArrowDown className="ml-2" />
            </Link>
            <div className="dropdown-menu absolute top-full text-left p-10">
              <p className="mb-5">PRODUCT CATEGORIES</p>
              <ul className="grid grid-cols-2 gap-4">
                {categories?.map((category) => (
                  <li key={category._id}>
                    <Link
                      className="hover-underline"
                      to={`/shop/${category.name}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li id="men" className="h-full flex items-center relative">
            <Link className="h-full flex items-center" to="/shop/Men">
              MEN <IoIosArrowDown className="ml-2" />
            </Link>
            <div className="dropdown-menu absolute top-full text-left p-10">
              <p className="mb-5">MEN'S FASHION</p>
              <ul className="grid grid-cols-2 gap-4">
                {menProducts?.map((category) => (
                  <li key={category._id}>
                    <Link
                      className="hover-underline"
                      to={`Men/${category.name}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li id="women" className="h-full flex items-center relative">
            <Link className="h-full flex items-center" to="/shop/Women">
              WOMEN <IoIosArrowDown className="ml-2" />
            </Link>
            <div className="dropdown-menu absolute top-full text-left p-10">
              <p className="mb-5">WOMEN'S FASHION</p>
              <ul className="grid grid-cols-2 gap-4">
                {womenProducts?.map((category) => (
                  <li key={category._id}>
                    <Link
                      className="hover-underline"
                      to={`/Women/${category.name}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="h-full flex items-center">
            <Link className="h-full flex items-center" to="/">
              BLOG
            </Link>
          </li>
          <li className="h-full flex items-center">
            <Link className="h-full flex items-center" to="/">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-right grid items-center justify-end">
        <ul className="flex gap-10 items-center">
          {user && (
            <>
              <li className="cursor-pointer">
                <Link className="relative" to="/wishlist">
                  <FaRegHeart />
                  <span className="absolute -top-2 -right-4 text-base font-medium bg-primary text-secondary rounded-full w-6 h-6 flex items-center justify-center">{wishlist.length}</span>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link className="relative" to="/cart">
                  <FiShoppingCart />
                  <span className="absolute -top-2 -right-4 text-base font-medium bg-primary text-secondary rounded-full w-6 h-6 flex items-center justify-center">{cart.length}</span>
                </Link>
              </li>
            </>
          )}
          <li className="cursor-pointer" onClick={() => setSearchModal(true)}>
            <BsSearch />
          </li>
          {user ? (
            <li
              onClick={logOut}
              className="cursor-pointer text-3xl sm:block hidden"
            >
              Sign Out
            </li>
          ) : (
            <li className="cursor-pointer text-3xl sm:block hidden">
              <Link to="/signup">Sign up</Link>
            </li>
          )}
        </ul>
      </div>
      {searchModal && <SearchModal closeModal={closeModal}></SearchModal>}
    </div>
  );
}; 

export default Navbar;
