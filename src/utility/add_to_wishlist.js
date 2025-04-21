import { toast } from "react-toastify";

// get wishlist item
const get_stored_wishlist = () => {
            const stored_wishlist_string = localStorage.getItem("wishlist-item");
            if (stored_wishlist_string) {
                        const stored_wishlist = JSON.parse(stored_wishlist_string);
                        return stored_wishlist;
            } else {
                        return [];
            }
}

// add to wishlist 
const add_to_wishlist = (id) => {
            const add_wishlist_item = get_stored_wishlist();

            if(add_wishlist_item.includes(id)) {
                        toast.error("Already in wishlist")
            } else {
                        add_wishlist_item.push(id);
                        const stored_wishlist_string = JSON.stringify(add_wishlist_item);
                        localStorage.setItem("wishlist-item", stored_wishlist_string);
                        toast("Added to wishlist")
            }
}

export {get_stored_wishlist, add_to_wishlist}