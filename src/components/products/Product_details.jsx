import React from 'react';
import { useLoaderData } from 'react-router';
import Button from '../Button';
import { FaHeart, FaStar } from 'react-icons/fa6';

const Product_details = () => {

            const product = useLoaderData();

            // destructuring products data
            const { product_title, product_image, price, description, Specification, availability, rating } = product;

            return (
                        <section className="w-11/12 mx-auto my-20 bg-primary rounded-xl pt-20 pb-50">
                                    <h1 className="text-4xl font-sora text-center text-white">Product Details</h1>
                                    <p className="text-lg font-sora w-8/12 mx-auto my-5 text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                                    <div className="w-8/12 mx-auto bg-base-200 shadow-sm rounded-xl absolute top-[50%] left-[17%]">
                                                <div className="hero-content flex-col lg:flex-row">
                                                            <img
                                                                        src={product_image}
                                                                        className="max-w-sm rounded-lg shadow-2xl"
                                                            />
                                                            <div>
                                                                        <h1 className="text-5xl font-bold">{product_title}</h1>
                                                                        <p className="py-6">{description}</p>
                                                                        <h3>Specification</h3>
                                                                        <ol>
                                                                                    {
                                                                                                Specification.map( ( spec, idx ) => 
                                                                                                            <li
                                                                                                                        key={idx}
                                                                                                            >{spec}</li>
                                                                                                )
                                                                                    }
                                                                        </ol>
                                                                        <span><FaStar/> {rating}</span>
                                                                        <Button
                                                                                    name={"Add to Cart"}
                                                                                    className={"btn bg-base-100 border-[#9538E2] text-[#9538E2] font-sora rounded-full"}
                                                                        ></Button>
                                                                        <Button
                                                                                    name={<FaHeart/>}
                                                                                    className={"btn bg-base-100 border-[#9538E2] text-[#9538E2] font-sora rounded-full"}
                                                                        ></Button>
                                                            </div>
                                                </div>
                                    </div>
                        </section>
            );
};

export default Product_details;