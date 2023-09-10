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
      <nav className="nav__list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <h1>Body</h1>
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
