import "./App.css";
import restaurant from "./data";

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

const RestaurantCard = ({ resData }) => {
  const IMGURL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  console.log(resData.sla);
  return (
    <div className="rest__card">
      <img
        src={`${IMGURL}${resData.cloudinaryImageId}`}
        alt={resData.name}
        className="rest__img"
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines}</h4>
      <h4>{resData.avgRating} stars</h4>
      <h4>{resData.sla?.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <main className="body__container">
      <h5 className="search">SEARCH</h5>
      <div className="rest__container">
        {restaurant.map((rest) => (
          <RestaurantCard resData={rest.info} key={rest.info.id} />
        ))}
      </div>
    </main>
  );
};

const App = () => {
  console.log(restaurant[0]);
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
