import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import Root from './layout/Root';
import Error_page from "./pages/Error_page.jsx";
import Statistic from "./pages/Statistic.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Product_details from "./components/products/Product_details.jsx";
import Cart from "./components/cart/Cart.jsx";
import Wishlist from "./components/wishlist/Wishlist.jsx";

const router = createBrowserRouter([
            {
                        path: "/",
                        element: <Root />,
                        errorElement: <Error_page />,
                        children: [
                                    {
                                                path: "/",
                                                element: <App />
                                    },
                                    {
                                                path: "/statistic",
                                                element: <Statistic />
                                    },
                                    {
                                                path: "/dashboard",
                                                element: <Dashboard />
                                    },
                                    {
                                                path: "/product-details/:product_id",
                                                element: <Product_details />,
                                                loader: async ({ params }) => {
                                                            const response = await fetch("/products.json");
                                                            const data = await response.json();
                                                            const product = data.find(product => product.product_id === params.product_id);

                                                            if (!product) {
                                                                        return <p>product is not found</p>
                                                            }

                                                            return product;
                                                }
                                    },
                                    {
                                                path: "/cart",
                                                element: <Cart />,
                                    },
                                    {
                                                path: "/wishlist",
                                                element: <Wishlist />
                                    }
                        ]
            },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
            <RouterProvider router={router} />
);
