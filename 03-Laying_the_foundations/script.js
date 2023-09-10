import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const para = React.createElement(
  "p",
  { id: "parent", style: { color: "white" } },
  "This is a React Paragraph element."
);

console.log(para);
// JSX Syntax

const jsxHeading = (
  <h1 id="parent" style={{ color: "skyblue" }}>
    {" "}
    Heading Created using JSX
  </h1>
);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
