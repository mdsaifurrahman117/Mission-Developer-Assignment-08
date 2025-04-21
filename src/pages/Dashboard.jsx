import React, { useState } from 'react'
import Cart from '../components/cart/Cart';
import 'react-tabs/style/react-tabs.css';
import Button from '../components/Button';
import Wishlist from '../components/wishlist/Wishlist';

const Dashboard = () => {

            const [active_component, set_active_component] = useState("cart")
            const handle_product = (component) => {
                        set_active_component(component)
            }

            return (
                        <section className="w-11/12 mx-auto my-20">
                                    <div className="bg-primary rounded-xl py-20 space-y-4">
                                                <h1 className="font-sora text-white text-center text-4xl">Dashboard</h1>
                                                <p className="w-8/12 mx-auto font-sora text-white text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                                                <div className="flex justify-center gap-5">
                                                            <Button
                                                                        name={"Cart"}
                                                                        className={`btn px-10 py5 font-sora rounded-full shadow-none 
                                                                                    ${active_component === "cart" ? "bg-base-100" : "bg-primary text-white"}
                                                                        `}
                                                                        onClick={() => handle_product("cart")}
                                                            ></Button>
                                                            <Button
                                                                        name={"Wishlist"}
                                                                        className={`btn px-10 py5 font-sora rounded-full shadow-none
                                                                                    ${active_component === "wishlist" ? "bg-base-100" : "bg-primary text-white"}
                                                                        `}
                                                                        onClick={() => handle_product("wishlist")}
                                                            ></Button>
                                                </div>
                                    </div>

                                    {
                                                active_component === "cart" ? <Cart /> : <Wishlist />
                                    }

                        </section>
            )
}

export default Dashboard
