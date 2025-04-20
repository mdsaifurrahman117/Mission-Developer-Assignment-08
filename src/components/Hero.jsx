import React from 'react';
import Banner from "../assets/banner.jpg";

const Hero = () => {
            return (
                        <>
                                    <section className="w-11/12 h-screen mx-auto py-20 rounded-2xl my-20 bg-primary flex flex-col justify-center items-center">
                                                <div className="space-y-7 flex flex-col justify-center items-center">
                                                            <h1 className="w-9/12 mx-auto text-white text-2xl md:text-5xl text-center font-sora font-semibold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                                                            <p className="w-8/12 mx-auto text-white text-center font-sora">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                                                            <button className=" font-sora bg-white text-[#9538E2] py-2 px-4 cursor-pointer rounded-full ">Shop Now</button>
                                                </div>
                                    </section>
                                    <figure className="md:w-8/12 md:h-96 mx-auto absolute top-[500px] md:top-[90%] md:left-[17%] 
                                                border border-white bg-[rgba(255,255,255,0.30)] p-5 rounded-xl"
                                    >
                                                <img src={Banner} alt="banner image" className="w-full h-full object-cover rounded-xl" />
                                    </figure>
                        </>
            );
};

export default Hero;