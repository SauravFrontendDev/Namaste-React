import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <h1>Footer</h1>
    </div>
  );
};

export default App;

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
