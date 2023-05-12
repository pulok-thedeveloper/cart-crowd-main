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
import AdminLogin from "../Pages/AdminLogin/AdminLogin";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Orders from "../Pages/Dashboard/Orders/Orders";
import DashboardProducts from "../Pages/Dashboard/DashboardProducts/DashboardProducts";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import EditProduct from "../Pages/Dashboard/EditProduct/EditProduct";

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
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/wishlist',
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
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
    {
        path: '/admin-login',
        element: <AdminLogin></AdminLogin>
    },
    {
        path: '/dashboard',
        element: <AdminRoute><Dashboard></Dashboard></AdminRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/products',
                element: <DashboardProducts></DashboardProducts>
            },
            {
                path: '/dashboard/orders',
                element: <Orders></Orders>
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/edit-product/:id',
                element: <EditProduct></EditProduct>
            },
        ]
    }
])