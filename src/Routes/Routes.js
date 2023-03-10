import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MenProducts from "../Pages/Products/MenProducts";
import Products from "../Pages/Products/Products";
import WomenProducts from "../Pages/Products/WomenProducts";
import Shop from "../Pages/Shop/Shop";
import Signup from "../Pages/Signup/Signup";
import Wishlist from "../Pages/Wishlist/Wishlist";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/shop/:category',
                element: <Products></Products>
            },
            {
                path: '/Men/:category',
                element: <MenProducts></MenProducts>
            },
            {
                path: '/Women/:category',
                element: <WomenProducts></WomenProducts>
            },
            {
                path: '/product/:title/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/wishlist',
                element: <Wishlist></Wishlist>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            }
        ]
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
])