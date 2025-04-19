import React from 'react';
import { NavLink } from 'react-router';
import { FaCartShopping, FaHeart } from "react-icons/fa6";

const Header = () => {

            const link = <>
                        <NavLink to={"/"} className="font-sora text-white">Home</NavLink>
                        <NavLink to={"/statistic"} className="font-sora text-white">Statistic</NavLink>
                        <NavLink to={"/dashboard"} className="font-sora text-white">Dashboard</NavLink>
            </>

            return (
                        <header className="bg-purple-700 shadow-sm">
                                    <nav className="navbar ">
                                                <div className="navbar-start">
                                                            <a className="font-sora text-xl text-white">Gadget Heaven</a>
                                                </div>
                                                <div className="navbar-center hidden lg:flex">
                                                            <ul className="menu menu-horizontal gap-10 px-1">
                                                                        {link}
                                                            </ul>
                                                </div>
                                                <div className="navbar-end">
                                                            <div className="dropdown">
                                                                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                                                                    </svg>
                                                                        </div>
                                                                        <ul
                                                                                    tabIndex={0}
                                                                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                                                                    {link}
                                                                        </ul>
                                                            </div>
                                                            <div className="flex gap-3 items-center justify-center">
                                                                        <button className="cursor-pointer bg-white p-2 rounded-full"><FaCartShopping /> </button>
                                                                        <button className="cursor-pointer bg-white p-2 rounded-full"> <FaHeart /> </button>
                                                            </div>
                                                </div>
                                    </nav>
                        </header>
            );
};

export default Header;