import React from 'react';
import { useLoaderData } from 'react-router';
import Button from '../Button';
import { FaHeart, FaStar } from 'react-icons/fa6';
import { add_to_cart } from '../../utility/add_to_cart';
import { add_to_wishlist } from '../../utility/add_to_wishlist';

const Product_details = () => {

            const product = useLoaderData();

            // destructuring products product
            const { product_id, product_title, product_image, price, description, Specification, availability, rating } = product;

            // handle add to cart
            const handle_add_to_cart = (id) => {
                        add_to_cart(id)
            }

            // handle add to wishlist
            const handle_add_to_wishlist = (id) => {
                        add_to_wishlist(id)
            }

            return (
                        <section className="w-11/12 mx-auto my-20 bg-primary rounded-xl pt-20 pb-50">
                                    <h1 className="text-4xl font-sora text-center text-white">Product Details</h1>
                                    <p className="text-lg font-sora w-8/12 mx-auto my-5 text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                                    <div className="w-10/12 md:w-8/12 mx-auto bg-base-200 shadow-sm rounded-xl absolute md:top-[50%] left-[8.5%] md:left-[17%]">
                                                <div className="hero-content flex-col lg:flex-row">
                                                            <img
                                                                        src={product_image}
                                                                        className="md:max-w-sm rounded-lg shadow-sm"
                                                            />
                                                            <div className="space-y-2">
                                                                        <h1 className="text-3xl font-sora font-semibold">{product_title}</h1>
                                                                        <h3 className="font-sora">Price : ${price}</h3>
                                                                        <h3>{availability ?
                                                                                    <span className="badge badge-soft border badge-success font-sora">In stoke</span>
                                                                                    :
                                                                                    <span className="badge badge-soft badge-error font-sora">Out of stoke</span>}
                                                                        </h3>
                                                                        <p className="py-6 font-sora">{description}</p>
                                                                        <h3 className="font-sora font-semibold">Specification : </h3>
                                                                        <ol className="ml-5">
                                                                                    {
                                                                                                Specification.map( (item, idx) => 
                                                                                                            <li key={idx}>{item}</li>
                                                                                                )
                                                                                    }
                                                                        </ol>
                                                                        <div className="font-sora flex flex-row gap-2 items-center"><span>Rating :</span> <FaStar />{rating}</div>
                                                                        <div className="flex flex-row gap-3">
                                                                                    <Button
                                                                                                name={"Add to Cart"}
                                                                                                onClick={() => handle_add_to_cart(product_id)}
                                                                                                className={"btn bg-base-100 border-[#9538E2] text-[#9538E2] font-sora rounded-full"}
                                                                                    ></Button>
                                                                                    <Button
                                                                                                name={<FaHeart />}
                                                                                                onClick={ () => handle_add_to_wishlist(product_id) }
                                                                                                className={"btn bg-base-100 border-[#9538E2] text-[#9538E2] font-sora rounded-full"}
                                                                                    ></Button>
                                                                        </div>
                                                            </div>
                                                </div>
                                    </div>
                        </section>
            );
};

export default Product_details;