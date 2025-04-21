import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCircleXmark } from "react-icons/fa6";

const Error_page = () => {
            return (
                        <section className="w-11/12 mx-auto my-20">
                                    <Helmet>
                                                <title>404 | Gadget Heaven</title>
                                    </Helmet>
                                    <div className="flex flex-col justify-center items-center gap-5">
                                                <FaCircleXmark 
                                                            className="w-20 h-20 text-red-600"
                                                />
                                                <h1 className="text-red-600 text-6xl font-sora">404</h1>
                                                <p className="font-sora text-xl">Page or product not found</p>
                                    </div>
                        </section>
            );
};

export default Error_page;