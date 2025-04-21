import React from 'react';
import Button from '../Button';
import { add_to_cart } from '../../utility/add_to_cart';

const Wishlist_product = ({ item }) => {

            const handle_add_to_cart = (id) => {
                        add_to_cart(id);
            }

            const { product_id, product_title, product_image, description, price } = item;

            return (
                        <div className="card md:flex-row bg-base-100 shadow-sm mt-10">
                                    <figure className="m-5 bg-base-200 shadow-sm">
                                                <img
                                                            src={product_image}
                                                            alt="Shoes"
                                                            className="rounded-xl md:w-52 p-2" />
                                    </figure>
                                    <div className="card-body">
                                                <h2 className="card-title font-sora">{product_title}</h2>
                                                <p className="font-sora">{description}</p>
                                                <span className="font-sora">Price:  ${price}</span>
                                                <Button
                                                            name={"Add to Cart"}
                                                            onClick={ () => handle_add_to_cart(product_id) }
                                                            className={"btn bg-primary text-white font-sora w-40 px-5 py-3 rounded-full"}
                                                ></Button>
                                    </div>
                        </div>
            );
};

export default Wishlist_product;