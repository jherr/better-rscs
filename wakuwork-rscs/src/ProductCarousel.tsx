import { ServerComponent } from "./ComponentWrappers.js";
import AddToCart from "./AddToCart.js";

const fetchCombinations = (
  color: string
): Promise<
  {
    name: string;
    thumbnail: string;
  }[]
> => fetch(`http://localhost:3000/${color}.json`).then((res) => res.json());

const ProductCarousel = async ({ color }: { color: string }) => {
  const combinations = await fetchCombinations(color);

  return (
    <ServerComponent>
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
    </ServerComponent>
  );
};

export default ProductCarousel;
