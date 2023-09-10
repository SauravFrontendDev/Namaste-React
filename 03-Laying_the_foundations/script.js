import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>This is My SImple Heading JSX</h1>;

const HeadingComponent = () => (
  <div id="child1">
    <h1>This is My Primary Heading Component</h1>
  </div>
);

const ContainerContainer = () => (
  <div id="parent">
    {heading}
    <HeadingComponent />

    <div id="child2">
      <h2>This is second Heading</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla
        eaque doloribus doloremque temporibus nihil nemo! Quaerat consequatur
        veritatis cumque quasi doloribus dolorum totam quia, vel maxime nemo
        harum incidunt.
      </p>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ContainerContainer />);

// React Components
// Class based Components , Functional Components
