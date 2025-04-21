import React from 'react';
import Hero from './components/Hero';
import Products from './components/products/Products';
import { Helmet } from 'react-helmet';

const App = () => {
            return (
                        <>
                                    <Helmet>
                                                <title>Home | Gadget Heaven</title>
                                    </Helmet>
                                    <Hero/>
                                    <Products/>
                        </>
            );
};

export default App;