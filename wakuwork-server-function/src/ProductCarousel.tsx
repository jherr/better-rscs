"use client";
import { useState, useEffect } from "react";
import { ClientComponent } from "./ComponentWrappers.js";
import AddToCart from "./AddToCart.js";

const ProductCarousel = ({
  color,
  fetchCombinations,
}: {
  color: string;
  fetchCombinations: (color: string) => Promise<
    {
      name: string;
      thumbnail: string;
    }[]
  >;
}) => {
  const [combinations, setCombinations] = useState<
    {
      name: string;
      thumbnail: string;
    }[]
  >([]);

  useEffect(() => {
    (async () => {
      setCombinations(await fetchCombinations(color));
    })();
  }, [color]);

  return (
    <ClientComponent>
      <div
        style={{
          display: "flex",
        }}
      >
        {combinations.map((combination) => (
          <div
            key={combination.name}
            style={{
              padding: "1rem",
              margin: "1rem",
              flex: "33%",
            }}
          >
            <img src={combination.thumbnail} style={{ width: "100%" }} />
            <h4>{combination.name}</h4>
            <AddToCart product={combination} />
          </div>
        ))}
      </div>
    </ClientComponent>
  );
};

export default ProductCarousel;
