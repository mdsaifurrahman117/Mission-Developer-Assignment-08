import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import Root from './layout/Root';
import Error_page from "./pages/Error_page.jsx";

const router = createBrowserRouter([
            {
                        path: "/",
                        element: <Root />,
                        errorElement: <Error_page />,
                        children: [
                                    {
                                                path: "/",
                                                element: <App />
                                    }
                        ]
            },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
            <RouterProvider router={router} />
);
