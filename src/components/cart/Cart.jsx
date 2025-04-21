import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { get_stored_cart } from '../../utility/add_to_cart';
import Cart_product from './Cart_product';
import Button from '../Button';

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

            const total_price = cart.map(p => p.price);
            const [price] = total_price;

            const [modal, set_modal] = useState(false);

            const handle_purchase = () => {
                        set_cart([]);
                        set_modal(true)
            }

            const close_modal = () => {
                        set_modal(false)
            }

            return (
                        <div>
                                    <div className="flex flex-col md:flex-row gap-5 items-center justify-between my-10">
                                                <h1 className="font-sora text-2xl">Cart</h1>
                                                <div className="flex items-center gap-5">
                                                            <h2 className="font-sora text-xl">Price: {price}</h2>
                                                            <Button
                                                                        name={"Sort by Price"}
                                                                        className={"btn font-sora rounded-full"}
                                                            ></Button>
                                                            <Button
                                                                        name={"Purchase"}
                                                                        onClick={handle_purchase}
                                                                        className={"btn bg-primary text-white font-sora rounded-full"}
                                                            ></Button>
                                                </div>
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
                                    {
                                                modal && (
                                                            <div className="bg-base-200 p-10 w-96 mx-auto shadow-sm text-center space-y-3">
                                                                        <h1 className="text-2xl text-center">Purchase Success</h1>
                                                                        <Button
                                                                                    name={"Close"}
                                                                                    onClick={close_modal}
                                                                                    className={"btn bg-primary font-sora text-white px-8 py-4 rounded-full"}
                                                                        ></Button>
                                                            </div>
                                                )
                                    }
                        </div>
            );
};

export default Cart;