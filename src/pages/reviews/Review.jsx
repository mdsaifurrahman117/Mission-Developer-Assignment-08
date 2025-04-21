import React from 'react';
import { FaStar } from "react-icons/fa";


const Review = ({ product }) => {

            const { product_title, product_image, review } = product;

            return (
                        <div className="card bg-base-100 w-[350px] mx-auto shadow-sm">
                                    <figure>
                                                <img
                                                            src={product_image}
                                                            alt="product image" 
                                                            className="w-80 h-60 object-cover"            
                                                />
                                    </figure>
                                    <div className="card-body">
                                                <h2 className="card-title">{product_title}</h2>
                                                <div className="space-y-2 border-t border-gray-400">
                                                            <h3 className="font-sora">Review from buyer : </h3>
                                                            <h3 className="font-sora">Buyer : {review.user}</h3>
                                                            <p className="font-sora">Comment:  {review.comment}</p>
                                                            <p className="font-sora flex items-center gap-2">Rating: <FaStar />{review.stars}</p>
                                                </div>
                                    </div>
                        </div>
            );
};

export default Review;