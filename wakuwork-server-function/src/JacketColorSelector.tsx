"use client";

import { ClientComponent } from "./ComponentWrappers.js";
import { useColor, useCart } from "./store.js";
import { useState, useEffect } from "react";
import { serve } from "wakuwork/client";

const ProductCarousel = serve<{ color: string }>("ProductCarousel");

export default function () {
  const [color, setColor] = useColor();
  const [cart] = useCart();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ClientComponent>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <div
          style={{
            flex: 0.5,
          }}
        >
          <img
            src={`/jacket-${color}.jpg`}
            style={{
              width: "100%",
            }}
          />
        </div>
        <div
          style={{
            flex: 0.5,
          }}
        >
          <h2>Jacket Color</h2>
          <select onChange={(evt) => setColor(evt.target.value)}>
            <option value="pink" selected={color === "pink"}>
              Pink
            </option>
            <option value="blue" selected={color === "blue"}>
              Blue
            </option>
            <option value="green" selected={color === "green"}>
              Green
            </option>
          </select>
          <h2>Cart</h2>
          <div>
            {cart.map((product, i) => (
              <div
                key={`${product.name}-${i}`}
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <img
                  src={product.thumbnail}
                  style={{
                    width: "100%",
                    maxWidth: 70,
                  }}
                />
                <div
                  style={{
                    fontSize: "18pt",
                  }}
                >
                  {product.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {mounted && <ProductCarousel color={color} />}
    </ClientComponent>
  );
}
