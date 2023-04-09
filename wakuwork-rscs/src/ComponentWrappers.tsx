export const ServerComponent = ({
  style,
  children,
}: {
  style?: React.StyleHTMLAttributes<HTMLDivElement>["style"];
  children: React.ReactNode;
}) => (
  <div
    style={{
      ...style,
      border: "2px dashed red",
      padding: "0.5rem",
      margin: "0.5rem",
    }}
  >
    {children}
  </div>
);

export const ClientComponent = ({
  style,
  children,
}: {
  style?: React.StyleHTMLAttributes<HTMLDivElement>["style"];
  children: React.ReactNode;
}) => (
  <div
    style={{
      ...style,
      border: "2px dashed green",
      padding: "0.5rem",
      margin: "0.5rem",
    }}
  >
    {children}
  </div>
);
