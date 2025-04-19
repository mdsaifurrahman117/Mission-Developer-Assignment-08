import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import Root from './layout/Root';
import Error_page from "./pages/Error_page.jsx";
import Statistic from "./pages/Statistic.jsx";
import Dashboard from "./pages/Dashboard.jsx";

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
                                                element: <Statistic/>
                                    },
                                    {
                                                path: "/dashboard",
                                                element: <Dashboard/>
                                    }
                        ]
            },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
            <RouterProvider router={router} />
);
