import React from 'react';

const Wishlist_product = ({ item }) => {

            const { product_title, product_image, description, price } = item;

            return (
                        <div className="card md:flex-row bg-base-100 shadow-sm mt-10">
                                    <figure className="m-5 bg-base-200 shadow-sm">
                                                <img
                                                            src={product_image}
                                                            alt="Shoes"
                                                            className="rounded-xl md:w-32 p-2" />
                                    </figure>
                                    <div className="card-body">
                                                <h2 className="card-title font-sora">{product_title}</h2>
                                                <p className="font-sora">{description}</p>
                                                <span className="font-sora">Price:  ${price}</span>
                                    </div>
                        </div>
            );
};

export default Wishlist_product;