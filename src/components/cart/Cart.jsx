import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { get_stored_cart } from '../../utility/add_to_cart';
import Cart_product from './Cart_product';

const Cart = () => {

            const data = useLoaderData();
            const product = data;

            const [cart, set_cart] = useState([]);

            useEffect(() => {
                        const stored_cart = get_stored_cart();

                        const stored_cart_item = product.filter(item => stored_cart.includes(item.product_id))
                        set_cart(stored_cart_item)
            }, []);

            return (
                        <section className="w-11/12 mx-auto my-20">
                                    <div className="flex flex-col gap-5">
                                                {
                                                            cart.map((item, idx) =>
                                                                        <Cart_product
                                                                                    key={idx}
                                                                                    item={item}
                                                                        ></Cart_product>)
                                                }
                                    </div>
                        </section>
            );
};

export default Cart;