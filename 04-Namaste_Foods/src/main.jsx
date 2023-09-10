import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*

## Low Level Design

- Header
  ** - Logo
  ** - Navbar
- Body
  ** - Search Bar
  ** - RestaurantContainer
  **\*** -- RestaurantCard
- Footer
  ** - Copyright
  ** - Links
  ** - Address
  ** - Contact

*/
