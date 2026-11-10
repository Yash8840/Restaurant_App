import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    cuisines,
    costForTwo,
    area,
  } = resData?.info;

  

  return (
    
    <div className="res-card">
      <div className="res-card-inner">
        <div className="res-card-img">
          <img
            src={
              CDN_URL +
              cloudinaryImageId
            }
            alt="restaurant"
            className="res-logo"
          />
        </div>
        <div className="res-card-data">
          <h3>{name}</h3>
          <h4>
            {avgRating} ✨ {sla.slaString}⏰
          </h4>
          <h4>{cuisines.join(",")}</h4>
          <h4>{costForTwo}</h4>
          <h4>{area}</h4>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;