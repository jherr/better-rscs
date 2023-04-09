import { ServerComponent, ClientComponent } from "./ComponentWrappers.js";
import JacketColorSelector from "./JacketColorSelector.js";

import { fetchCombinations } from "./fetchCombinations.js";

const App = ({ name = "Customer" }) => {
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: 800,
        padding: "1em",
        fontFamily: "arial, verdana, sans-serif",
      }}
    >
      <ServerComponent>
        <h1>Header for {name}</h1>
        <JacketColorSelector fetchCombinations={fetchCombinations} />
      </ServerComponent>

      <h5
        style={{
          marginTop: "1rem",
        }}
      >
        Key
      </h5>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <ServerComponent>Server Component</ServerComponent>
        <ClientComponent>Client Component</ClientComponent>
      </div>
    </div>
  );
};

export default App;
