import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { get_stored_wishlist } from '../../utility/add_to_wishlist';
import Wishlist_product from './Wishlist_product';

const Wishlist = () => {

            /**
             * step for get cart data
             * 1. get all data from loader 
             * 2. receive via useLoaderData
             * 3. declare a state to hold the value of the item 
             * 4. call the get stored function on inside useEffect
             * 5. filter out the item from data
             * 6. set filtered item to the state
             * 7. loop the item and create a component for each item
             */

            const data = useLoaderData();
            const product = data;

            const [wishlist, set_wishlist] = useState([]);
            useEffect(() => {
                        const stored_wishlist = get_stored_wishlist();
                        const stored_wishlist_item = product.filter(item => stored_wishlist.includes(item.product_id));
                        set_wishlist(stored_wishlist_item);
            }, [])

            return (
                        <div className="flex flex-col gap-5">
                                                <h1 className="font-sora text-2xl mt-10">Wishlist</h1>
                                    {
                                                wishlist.map((item, idx) =>
                                                            <Wishlist_product
                                                                        key={idx}
                                                                        item={item}
                                                            ></Wishlist_product>
                                                )
                                    }
                        </div>
            );
};

export default Wishlist;