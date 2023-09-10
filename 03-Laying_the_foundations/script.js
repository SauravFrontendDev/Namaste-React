import React from "react";

import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h2",
//   {},
//   "I have created an h2 tag using React Library"
// );

/*
    <div id="parent"> 
      <div id="child1">
        <h1>I am an H1 Tag of child 1</h1>
        <h1>I am an H2 Tag of child 1</h1>
      </div>
      <div id="child2">
        <h1>I am an H1 Tag of child 2</h1>
        <h1>I am an H2 Tag of child 2</h1>
      </div>
    </div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Namaste React 🚀🌈"),
    React.createElement("h2", {}, " I am an H2 Tag of CHild 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, " I am an H1 Tag of CHild 2"),
    React.createElement("h2", {}, " I am an H2 Tag of CHild 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
