import { useContext } from "react";

import { Button } from "@bigbinary/neetoui";
import { without } from "ramda";
import CartItemsContext from "src/contexts/CartItemsContext";

const AddToCart = ({ slug }) => {
  const [cartItems, setCartItems] = useContext(CartItemsContext);

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setCartItems(prevCartItems =>
      prevCartItems.includes(slug)
        ? without([slug], cartItems)
        : [slug, ...cartItems]
    );
  };

  return (
    <Button
      label={cartItems.includes(slug) ? "Remove from cart" : "Add to cart"}
      size="large"
      onClick={handleClick}
    />
  );
};
export default AddToCart;
