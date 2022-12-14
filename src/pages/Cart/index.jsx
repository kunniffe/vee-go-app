import { useState } from "react";
import { Helmet } from "react-helmet";

import { getCart, nukeCart, addItemToCart, removeItemFromCart } from "../../services/cart";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Deck from "../../components/Deck";
import Layout from "../../components/Layout";
import Page from "../../components/Page";

function CartPage() {
  const storedCart = getCart();
  const [cart, setCart] = useState(storedCart);

  const handleClear = () => {
    setCart([]);
    nukeCart();
  }

  const handleAdd = (id) => {
    const newCart = addItemToCart(id);
    setCart(newCart);
  }

  const handleRemove = (id) => {
    const newCart = removeItemFromCart(id);
    setCart(newCart);
  }

  return (
    <Layout>
      <Helmet>
        <title>Cart | Veego</title>
      </Helmet>
      <Page title="Cart">
        {cart.length > 0 && (
          <>
            <Button onClick={handleClear}>
            Clear Cart
            </Button>
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
        {cart.length === 0 && (<p>The cart is empty!</p>)}
      </Page>
    </Layout>
  );
}

export default CartPage;