import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { get_stored_cart } from '../../utility/add_to_cart';
import Cart_product from './Cart_product';

const Cart = () => {

/**
 * step for get cart data
 * 1. get all data from loader 
 * 2. receive via useLoaderData
 * 3. declare a state to hold the value of the item 
 * 4. call the get stored function on inside the useEffect
 * 5. filter out the item from data
 * 6. set filtered item to the state
 * 7. loop the item and create a component for each item
 */

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
                                    <div className="bg-primary rounded-xl py-20 space-y-4">
                                                <h1 className="text-4xl text-center text-white font-sora">Cart</h1>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                                {
                                                            cart.map((item, idx) =>
                                                                        <Cart_product
                                                                                    key={idx}
                                                                                    item={item}
                                                                        ></Cart_product>
                                                            )
                                                }
                                    </div>
                        </section>
            );
};

export default Cart;