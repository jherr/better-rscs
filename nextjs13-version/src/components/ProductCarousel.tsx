import { ClientComponent } from "./ComponentWrappers";
import { useCombinations } from "../store";
import AddToCart from "./AddToCart";

const ProductCarousel = () => {
  const combinations = useCombinations();

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
