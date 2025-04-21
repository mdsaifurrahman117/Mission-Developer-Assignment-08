import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router';
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import Button from './Button';

const Header = () => {

            const location = useLocation();
            useEffect( () => {location}, [] );

            return (
                        <header className={` fixed top-0 z-[999] w-full mx-auto shadow-sm ${location.pathname === "/" ? "bg-primary top-0 " : "bg-base-100 "} `}>
                                    <nav className="w-11/12 mx-auto flex flex-row py-3">
                                                <div className="navbar-start">
                                                            <NavLink 
                                                                        to={"/"}
                                                                        className={` md:ml-3 font-sora font-semibold text-xl 
                                                                        ${location.pathname === "/" ? "text-white" : "text-black"}`}
                                                            >Gadget Heaven</NavLink>
                                                </div>
                                                <div className="navbar-center hidden lg:flex">
                                                            <ul className="menu menu-horizontal gap-10 px-1">
                                                                        <NavLink
                                                                                    to={"/"}
                                                                                    className={` font-sora 
                                                                                                ${location.pathname === "/" ? "text-white" : "text-black"}
                                                                                    `}
                                                                        >Home</NavLink>
                                                                        <NavLink
                                                                                    to={"/statistic"}
                                                                                    className={` font-sora 
                                                                                                ${location.pathname === "/" ? "text-white" : "text-black"}
                                                                                    `}
                                                                        >Statistic</NavLink>
                                                                        <NavLink
                                                                                    to={"/dashboard"}
                                                                                    className={` font-sora 
                                                                                                ${location.pathname === "/" ? "text-white" : "text-black"}
                                                                                    `}
                                                                        >Dashboard</NavLink>
                                                            </ul>
                                                </div>
                                                <div className="navbar-end flex flex-row gap-3">
                                                            <div className="flex gap-3 items-center justify-center">
                                                                        <Button
                                                                                    name={<FaCartShopping />}
                                                                                    className={` cursor-pointer p-2 rounded-full shadow-sm ${location.pathname === "/" ? "bg-white" : "bg-base-200 "}`}
                                                                        ></Button>
                                                                        <Button
                                                                                    name={<FaHeart />}
                                                                                    className={` cursor-pointer p-2 rounded-full shadow-sm ${location.pathname === "/" ? "bg-white" : "bg-base-200"}`}
                                                                        ></Button>
                                                            </div>
                                                            <div className="dropdown dropdown-end">
                                                                        <div
                                                                                    tabIndex={0}
                                                                                    role="button"
                                                                                    className="bg-white p-2 rounded-full lg:hidden"
                                                                        >
                                                                                    <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                className="h-4 w-4"
                                                                                                fill="none" viewBox="0 0 24 24"
                                                                                                stroke="currentColor"
                                                                                    >
                                                                                                <path
                                                                                                            strokeLinecap="round"
                                                                                                            strokeLinejoin="round"
                                                                                                            strokeWidth="2"
                                                                                                            d="M4 6h16M4 12h8m-8 6h16"
                                                                                                />
                                                                                    </svg>
                                                                        </div>
                                                                        <ul
                                                                                    tabIndex={0}
                                                                                    className="menu menu-sm dropdown-content bg-base-100
                                                                                                 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
                                                                        >
                                                                                    <NavLink
                                                                                                to={"/"}
                                                                                                className="font-sora text-black"
                                                                                    >Home</NavLink>
                                                                                    <NavLink
                                                                                                to={"/statistic"}
                                                                                                className="font-sora text-black"
                                                                                    >Statistic</NavLink>
                                                                                    <NavLink
                                                                                                to={"/dashboard"}
                                                                                                className="font-sora text-black"
                                                                                    >Dashboard</NavLink>
                                                                        </ul>
                                                            </div>
                                                </div>
                                    </nav>
                        </header>
            );
};

export default Header;