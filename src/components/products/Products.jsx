import React, { useEffect, useState } from 'react';
import Product from './Product';
import Button from './../Button';

const Products = () => {

            const [products, set_products] = useState([]);
            useEffect(() => {
                        fetch("products.json")
                                    .then(response => response.json())
                                    .then(data => set_products(data))
            },
                        [])

            return (
                        <section className="w-11/12 mx-auto mt-70 mb-20 flex flex-row justify-between">
                                    <aside className="flex flex-col gap-3 justify-center h-70 bg-base-100 shadow-sm p-10 rounded-xl">
                                                <Button 
                                                            className={"btn bg-[#9538E2] text-white font-sora rounded-full"}
                                                            name={"Laptops"}></Button>
                                                <Button 
                                                            className={"btn bg-[#9538E2] text-white font-sora rounded-full"}
                                                            name={"Mobiles"}></Button>
                                                <Button 
                                                            className={"btn bg-[#9538E2] text-white font-sora rounded-full"}
                                                            name={"Watches"}></Button>
                                                <Button 
                                                            className={"btn bg-[#9538E2] text-white font-sora rounded-full"}
                                                            name={"Accessories"}></Button>
                                    </aside>
                                    <div className="grid md:grid-cols-3 gap-3">
                                                {
                                                            products.map(product =>
                                                                        <Product
                                                                                    key={product.product_id}
                                                                                    product={product}
                                                                        ></Product>
                                                            )
                                                }
                                    </div>
                        </section>
            );
};

export default Products;