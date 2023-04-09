"use client";

import { ClientComponent } from "./ComponentWrappers";
import { useCart } from "../store";

const AddToCart = ({
  product,
}: {
  product: { name: string; thumbnail: string };
}) => {
  const [cart, setCart] = useCart();
  return (
    <ClientComponent>
      <button
        onClick={() => {
          setCart([...cart, product]);
        }}
        style={{
          width: "100%",
        }}
      >
        Add to cart
      </button>
    </ClientComponent>
  );
};

export default AddToCart;
