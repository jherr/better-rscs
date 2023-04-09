import {
  ServerComponent,
  ClientComponent,
} from "../components/ComponentWrappers";
import JacketColorSelector from "../components/JacketColorSelector";

export default function Home() {
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
        <h1>Header for Customer</h1>
        <JacketColorSelector />
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
}
