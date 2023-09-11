import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  // console.log(resData.sla);

  if (!resData) return;
  else
    return (
      <div className="rest__card">
        <img
          src={`${CDN_URL}${resData.cloudinaryImageId}`}
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

export default RestaurantCard;
