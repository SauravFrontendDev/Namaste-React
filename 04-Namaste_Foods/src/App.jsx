import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo__container">
        <img
          src="https://img.freepik.com/premium-vector/food-play-logo-design-template_145155-1051.jpg?w=2000"
          alt="company logo"
          className="logo"
        />
      </div>
      <nav>
        <ul className="nav__list">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="rest__card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sludnbblldmevxug95kt"
        alt="Biryani Blues Card"
        className="rest__img"
      />
      <h3>Biryani Blues</h3>
      <h4>Biryani, Hyderabadi</h4>
      <h4>4.3 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <main className="body__container">
      <h5 className="search">SEARCH</h5>
      <div className="rest__container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </main>
  );
};

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
