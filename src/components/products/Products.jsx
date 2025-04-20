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

            const handle_click = () => {
                        console.log("hello world")
            }

            return (
                        <section className="w-11/12 mx-auto mt-80 mb-20">
                                    <h1 className="text-4xl text-center font-sora">Explore Cutting-Edge Gadgets</h1>
                                    <div className="flex flex-col md:flex-row justify-between gap-5 mt-10">
                                                <aside className="overflow-y-scroll md:overflow-hidden flex md:flex-col gap-3 md:justify-center  md:h-90 bg-base-100 shadow-sm p-10 rounded-xl">
                                                            <Button
                                                                        className={"btn bg-[#9538E2] text-white font-sora rounded-full"}
                                                                        name={"All Products"}
                                                                        onClick={handle_click}
                                                            ></Button>
                                                            <Button
                                                                        className={"btn bg-[#9538E2] text-white font-sora rounded-full"}
                                                                        name={"Laptops"}
                                                                        onClick={handle_click}
                                                            ></Button>
                                                            <Button
                                                                        className={"btn bg-[#9538E2] text-white font-sora rounded-full"}
                                                                        name={"Mobiles"}
                                                                        onClick={handle_click}
                                                            ></Button>
                                                            <Button
                                                                        className={"btn bg-[#9538E2] text-white font-sora rounded-full"}
                                                                        name={"Tablets"}
                                                                        onClick={handle_click}
                                                            ></Button>
                                                            <Button
                                                                        className={"btn bg-[#9538E2] text-white font-sora rounded-full"}
                                                                        name={"Watches"}
                                                                        onClick={handle_click}
                                                            ></Button>
                                                            <Button
                                                                        className={"btn bg-[#9538E2] text-white font-sora rounded-full"}
                                                                        name={"Accessories"}
                                                                        onClick={handle_click}
                                                            ></Button>
                                                </aside>
                                                <div className="grid md:grid-cols-3 gap-3 justify-center">
                                                            {
                                                                        products.map(product =>
                                                                                    <Product
                                                                                                key={product.product_id}
                                                                                                product={product}
                                                                                    ></Product>
                                                                        )
                                                            }
                                                </div>
                                    </div>
                        </section>
            );
};

export default Products;