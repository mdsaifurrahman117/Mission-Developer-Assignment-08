import React from 'react';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
            return (
                        <footer className="flex flex-col justify-center items-center gap-10 bg-base-200 text-base-content p-10">
                                    <div className="flex flex-col items-center gap-2">
                                                <h1 className="font-sora text-2xl">Gadget Heaven</h1>
                                                <p className="font-sora">Leading the way in cutting-edge technology and innovation.</p>
                                    </div>
                                    <div className="w-full flex flex-col md:flex-row justify-around">
                                                <nav className="flex flex-col items-center font-sora">
                                                            <h6 className="footer-title">Services</h6>
                                                            <a className="link link-hover">Branding</a>
                                                            <a className="link link-hover">Design</a>
                                                            <a className="link link-hover">Marketing</a>
                                                            <a className="link link-hover">Advertisement</a>
                                                </nav>
                                                <nav className="flex flex-col items-center font-sora">
                                                            <h6 className="footer-title">Company</h6>
                                                            <a className="link link-hover">About us</a>
                                                            <a className="link link-hover">Contact</a>
                                                            <a className="link link-hover">Jobs</a>
                                                            <a className="link link-hover">Press kit</a>
                                                </nav>
                                                <nav className="flex flex-col items-center font-sora">
                                                            <h6 className="footer-title">Legal</h6>
                                                            <a className="link link-hover">Terms of use</a>
                                                            <a className="link link-hover">Privacy policy</a>
                                                            <a className="link link-hover">Cookie policy</a>
                                                </nav>
                                    </div>
                                    <p className="font-sora flex flex-row justify-center items-center gap-1">
                                                <FaRegCopyright />
                                                <span> All right 2025 reserved by </span>
                                                <a
                                                            href="https://github.com/mdsaifurrahman117"
                                                            className=" text-purple-600"
                                                >
                                                            MD Saifur Rahman
                                                </a>
                                    </p>
                        </footer>
            );
};

export default Footer;