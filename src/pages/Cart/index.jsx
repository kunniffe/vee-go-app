import { useState } from "react";
import { Helmet } from "react-helmet";

import {
  getCart,
  nukeCart,
  addItemToCart,
  removeItemFromCart,
} from "../../services/cart";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Deck from "../../components/Deck";
import Layout from "../../components/Layout";
import Page from "../../components/Page";
//cart initialized as empty
//items added to cart from single recipe pages
//cart created is summarized so we don't have a basket listing same tjing 5 times
function CartPage() {
  const storedCart = getCart();
  const [cart, setCart] = useState(storedCart);
  //to completely empty the cart
  const handleClear = () => {
    setCart([]);
    nukeCart();
  };

  const handleAdd = (id) => {
    const newCart = addItemToCart(id);
    setCart(newCart);
  };
  //to remove unwanted items from the cart.
  const handleRemove = (id) => {
    const newCart = removeItemFromCart(id);
    setCart(newCart);
  };

  return (
    <Layout>
      <Helmet>
        <title>Cart | Veego</title>
      </Helmet>
      <Page title="Cart">
        {cart.length > 0 && (
          <>
            <Button onClick={handleClear}>Clear Cart</Button>
            <Deck>
              {cart.map((item, index) => (
                <Card
                  key={index}
                  title={item.raw[0].name}
                  subtitle={`Quantity: ${item.count}`}
                  image={item.raw[0].image}
                >
                  <Button onClick={() => handleAdd(item.id)}>Add</Button>
                  <Button onClick={() => handleRemove(item.id)}>Remove</Button>
                </Card>
              ))}
            </Deck>
          </>
        )}
        {cart.length === 0 && <p>Your cart is empty!</p>}
      </Page>
    </Layout>
  );
}

export default CartPage;
