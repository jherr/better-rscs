"use client";

import { ClientComponent } from "./ComponentWrappers.js";
import { useCart } from "./store.js";

export default ({
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
