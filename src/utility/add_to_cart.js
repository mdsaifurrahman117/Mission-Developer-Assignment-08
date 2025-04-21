import { toast } from "react-toastify";

// getting stored cart data
const get_stored_cart = () => {
            const stored_cart_string = localStorage.getItem("cart_item")
            if (stored_cart_string) {
                        const stored_list = JSON.parse(stored_cart_string);
                        return stored_list;
            } else {
                        return [];
            }
}

// add to cart 
const add_to_cart = ( id ) => {
            const stored_cart = get_stored_cart();

            if ( stored_cart.includes(id) ) {
                        toast.error("Already in cart")
            } else {
                        stored_cart.push(id);
                        const stored_cart_string = JSON.stringify(stored_cart);
                        localStorage.setItem("cart_item", stored_cart_string);
                        toast("Added to cart")
            }
}

export { get_stored_cart, add_to_cart }