import { getSingleRecipe } from "../services/recipe";

const storedCart = "veego-cart";

function createCart() {
    const cart = [];
    window.localStorage.setItem(storedCart, JSON.stringify(cart)); // localStorage only supports strings.
    return cart;
}

export function getCart() {
    const cart = JSON.parse(window.localStorage.getItem(storedCart));
    const cartExists = cart !== null;
      
    if (cartExists) {
        return cart;
    } else {
        // We return a new empty cart.
        return createCart();
    }
}

export function addItemToCart(id) {
    let cart = getCart();

    // Update the quantity if the item is already in the cart.
    const existing = cart.find((item) => item.id === id);
    if (existing) {
        existing.count++;
        cart && Object.assign(cart, existing);
    } else {
        // Add a new item to the cart.
        const data = getSingleRecipe(id);
        cart = [...cart, {id, count: 1, raw: [ data ]}];
    }

    window.localStorage.setItem(storedCart, JSON.stringify(cart));
    return cart;
}

export function removeItemFromCart(id) {
    let cart = getCart();

    // Only attempt removal if the item is already in the cart.
    const existing = cart.find((item) => item.id === id);
    if (existing) {
        existing.count--;

        // If the count is now 0, we remove the item completely.
        if (existing.count <= 0) {
            // Remove the object from the list.
            cart = cart.filter((item) => item.id !== existing.id);
        } else {
            // Merge.
            cart && Object.assign(cart, existing);
        }

        window.localStorage.setItem(storedCart, JSON.stringify(cart));
    }

    return cart;
}

export function nukeCart() {
    // Delete the cart completely.
    window.localStorage.removeItem(storedCart);
}