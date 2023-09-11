import RestaurantCard from "./RestaurantCard";
import restaurant from "../utils/mockdata";
const Body = () => {
  return (
    <main className="body__container">
      <h5 className="search">SEARCH</h5>
      <div className="rest__container">
        {restaurant.map((rest) => (
          <RestaurantCard key={rest.info.id} resData={rest.info} />
        ))}
      </div>
    </main>
  );
};

export default Body;
