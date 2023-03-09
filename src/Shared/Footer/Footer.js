import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="px-16 text-white">
      <div className="py-16 grid lg:grid-cols-4 justify-center gap-20">
        <div className="text-left">
          <div className="logo-container mb-5">
            <Link to="/" className="">
              <h1 className="logo-title ">CartCrowd</h1>
            </Link>
          </div>
          <p className="mb-5 leading-loose text-gray-100">
            This prodigiously grew tortoise charact stupidly pernicious jeepers
            along while accordingly under useful much salacious walking fars
            before some supp aesthetically wow shuddered.
          </p>
          <p>(+800) 1234 5678 90 – support@cartcrowd.com</p>
        </div>
        <div className="pt-6">
          <h3 className="text-2xl font-semibold pb-3 mb-7 border-b-2">
            Popular Categoies
          </h3>
          <ul className="grid gap-3">
            <li className="flex gap-3 items-center">
              <Link to="/">Men's Fashion</Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link to="/">Women's Fashion</Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link to="/">Furniture</Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link to="/">Electronics</Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link to="/">New Arrivals</Link>
            </li>
            <li className="flex gap-3 items-center">
              <Link to="/">Best Sellers</Link>
            </li>
          </ul>
        </div>
        <div className="pt-6">
          <h3 className="text-2xl font-semibold pb-3 mb-7 border-b-2">
            Information
          </h3>
          <ul className="grid gap-3">
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Returns Policy</Link>
            </li>
            <li>
              <Link to="/">Shipping Policy</Link>
            </li>
            <li>
              <Link to="/">Dropshipping</Link>
            </li>
          </ul>
        </div>
        <div className="pt-6">
          <h3 className="text-2xl font-semibold pb-3 mb-7 border-b-2">
            Account
          </h3>

          <ul className="grid gap-3">
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/">My Orders</Link>
            </li>
            <li>
              <Link to="/">My Wishlist</Link>
            </li>
            <li>
              <Link to="/">Account Details</Link>
            </li>
            <li>
              <Link to="/">Become a Seller <span className="px-2 bg-white text-cyan-900 rounded font-semibold">New</span></Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-8 border-t flex justify-between items-center">
        <div className="social-icons flex gap-3">
          <Link to="/" className="rounded-full p-2">
            <FaFacebookF className="social-icon" />
          </Link>
          <Link to="/" className="rounded-full p-2">
            <FaTwitter className="social-icon" />
          </Link>
          <Link to="/" className="rounded-full p-2">
            <FaInstagram className="social-icon" />
          </Link>
          <p className="">
          Copyright &copy; 2023 All Rights Reserved.
        </p>
        </div>
        <div className="justify-items-end bg-white p-3">
          <img src="https://klbtheme.com/clotya/wp-content/uploads/2022/06/cards.png" alt=""/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
