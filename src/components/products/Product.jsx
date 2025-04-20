import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {

            const { product_id, product_title, product_image, price } = product;

            return (
                        <div className="card bg-base-100 w-80 shadow-sm">
                                    <figure className="px-10 pt-10">
                                                <img
                                                            src={product_image}
                                                            alt="Shoes"
                                                            className="w-90 h-40 object-cover"
                                                />
                                    </figure>
                                    <div className="card-body">
                                                <h2 className="card-title font-sora">{product_title}</h2>
                                                <h2 className="text-[15px] font-sora">Price : {price}</h2>
                                                <div className="card-actions">
                                                            <Link
                                                                        to={`/product-details/${product_id}`}
                                                                        className={"btn bg-base-100 border-[#9538E2] text-[#9538E2] font-sora rounded-full"}
                                                            >View Details</Link>
                                                </div>
                                    </div>
                        </div>
            );
};

export default Product;