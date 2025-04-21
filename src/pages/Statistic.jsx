import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { get_stored_cart } from '../utility/add_to_cart';
import { Helmet } from 'react-helmet';

const Statistic = () => {

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
                        const list = product.filter(item => stored_cart.includes(item.product_id))
                        set_cart(list)
            }, [data])

            return (
                        <section className="w-11/12 mx-auto my-20">
                                    <Helmet>
                                                <title>Statistic | Gadget Heaven</title>
                                    </Helmet>
                                    <div className="bg-primary rounded-xl py-20 space-y-4">
                                                <h1 className="font-sora text-4xl text-white text-center">Statistic</h1>
                                                <p className="w-8/12 mx-auto text-center text-white font-sora">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                                    </div>
                                    <div className="w-8/12 mx-auto mt-10 overflow-y-scroll">
                                                <BarChart
                                                            width={800}
                                                            height={300}
                                                            data={cart}
                                                            margin={{
                                                                        top: 5,
                                                                        right: 30,
                                                                        left: 20,
                                                                        bottom: 5,
                                                            }}
                                                >
                                                            <CartesianGrid strokeDasharray="3 3" />
                                                            <XAxis dataKey="product_title" />
                                                            <YAxis />
                                                            <Tooltip />
                                                            <Legend />
                                                            <Bar dataKey="price" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                                                </BarChart>
                                    </div>
                        </section>
            )
}

export default Statistic