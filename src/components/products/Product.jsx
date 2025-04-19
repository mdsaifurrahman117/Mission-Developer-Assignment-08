import React from 'react';
import Button from '../Button';

const Product = ({ product }) => {


/*

{
    "product_id": "TAB4001",
    "product_title": "iPad Air 5th Gen",
    "product_image": "https://i.postimg.cc/TYqVdJvf/ipad-air-5.jpg",
    "category": "Tablet",
    "price": 599,
    "description": "Lightweight and powerful iPad with M1 chip and Apple Pencil support.",
    "Specification": [
        "Apple M1 Chip",
        "10.9\" Liquid Retina",
        "64GB Storage",
        "Touch ID",
        "Wi-Fi"
    ],
    "availability": true,
    "rating": 4.8,
    "brand": "Apple"
}

*/



            const { product_title, product_image, price } = product;

            return (
                        <div className="card bg-base-100 w-80 shadow-sm">
                                    <figure className="px-10 pt-10">
                                                <img
                                                            src={product_image}
                                                            alt="Shoes"
                                                            className="w-90 h-40 object-cover"
                                                />
                                    </figure>
                                    <div className="card-body">
                                                <h2 className="card-title font-sora">{product_title}</h2>
                                                <h2 className="text-[15px] font-sora">Price : {price}</h2>
                                                <div className="card-actions">
                                                            <Button 
                                                                        name={"View Details"}
                                                                        className={"btn bg-base-100 border-[#9538E2] text-[#9538E2] font-sora rounded-full"}
                                                            ></Button>
                                                </div>
                                    </div>
                        </div>
            );
};

export default Product;