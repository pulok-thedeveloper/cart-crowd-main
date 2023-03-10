import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../../Context/AuthProvider";
import SearchModal from "./SearchModal/SearchModal";

const Navbar = () => {
  const { categories, menProducts, womenProducts, user, logOut } =
    useContext(AuthContext);
  const [searchModal, setSearchModal] = useState(false);

  const closeModal = () => setSearchModal(false);

  return (
    <div className="nav-bar grid grid-cols-4 px-16">
      <div className="logo grid items-center justify-start">
        <Link to="/" className="logo-title">
          CartCrowd
        </Link>
      </div>
      <div className="nav-menu grid items-center justify-center col-span-2">
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
                <Link to='/wishlist'><FaRegHeart /></Link>
              </li>
              <li className="cursor-pointer">
                <Link to='/cart'><FiShoppingCart /></Link>
              </li>
            </>
          )}
          <li className="cursor-pointer" onClick={() => setSearchModal(true)}>
            <BsSearch />
          </li>
          {user ? 
              
              <li onClick={logOut} className="cursor-pointer text-3xl">
                Sign Out
              </li>

              :
              <li className="cursor-pointer text-3xl">
                <Link to='/signup'>Sign up</Link>
              </li>
          }
        </ul>
      </div>
      {searchModal && <SearchModal closeModal={closeModal}></SearchModal>}
    </div>
  );
};

export default Navbar;
