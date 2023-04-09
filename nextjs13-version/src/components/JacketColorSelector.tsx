"use client";
import { ClientComponent } from "./ComponentWrappers";
import { useColor, useCart } from "../store";
import ProductCarousel from "./ProductCarousel";

function JacketColorSelector() {
  const [color, setColor] = useColor();
  const [cart] = useCart();

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
          <select value={color} onChange={(evt) => setColor(evt.target.value)}>
            <option value="pink">Pink</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
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
      <ProductCarousel />
    </ClientComponent>
  );
}

export default JacketColorSelector;
