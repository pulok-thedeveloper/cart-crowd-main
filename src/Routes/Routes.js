import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MenProducts from "../Pages/Products/MenProducts";
import Products from "../Pages/Products/Products";
import WomenProducts from "../Pages/Products/WomenProducts";
import Shop from "../Pages/Shop/Shop";

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
            }
        ]
    }
])