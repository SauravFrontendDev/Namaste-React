import RestaurantCard from "./RestaurantCard";
import restaurant from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  const [listOfRest, setListOfRest] = useState(restaurant);

  const filtering = () => {
    const filteredRestaurant = listOfRest.filter(
      (rest) => rest.info.avgRating > 4
    );
    setListOfRest((list) => filteredRestaurant);
  };

  return (
    <main className="body__container">
      <div className="filter">
        <button onClick={filtering} className="filter__btn">
          Top Rated
        </button>
      </div>
      <div className="rest__container">
        {listOfRest.map((rest) => (
          <RestaurantCard key={rest.info.id} resData={rest.info} />
        ))}
      </div>
    </main>
  );
};

export default Body;
