import { ClientComponent } from "./ComponentWrappers";
import AddToCart from "./AddToCart";

import { useCombinations } from "@/store";

const ProductCarousel = () => {
  const combinations: {
    name: string;
    thumbnail: string;
  }[] = useCombinations();

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
