import React from 'react';
import { useLoaderData } from 'react-router';
import Review from './Review';
import { Helmet } from 'react-helmet';

const Reviews = () => {

            const data = useLoaderData();

            return (
                        <section className="w-11/12 mx-auto my-20">
                                    <Helmet>
                                                <title>Reviews | Gadget Heaven</title>
                                    </Helmet>
                                    <div className="bg-primary rounded-xl py-20 space-y-4">
                                                <h1 className="font-sora text-white text-center text-4xl">Review</h1>
                                                <p className="w-8/12 mx-auto font-sora text-white text-center">Find out some awesome review from our client</p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-5 mt-10">
                                                {
                                                            data.map((product) =>
                                                                        <Review
                                                                                    key={product.product_id}
                                                                                    product={product}
                                                                        ></Review>
                                                            )
                                                }
                                    </div>
                        </section>
            );
};

export default Reviews;