
import { observer } from "mobx-react";
import { Console } from "./Console";

export const ConsoleView = observer(({ c }: { c: Console }) => (
  <section
    style={{
      background: "#fff0f0",
      width: "100%",
      border: "black 14px solid",
      padding: "1rem",
    }}
    className="console"
  >
    {c.getMessages().map((message, index) => (
      <p key={index}>{message}</p>
    ))}
  </section>
));