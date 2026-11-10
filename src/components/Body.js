import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useHomePageRest from "../utils/useHomePageRest";

const Body = () => {
  // const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [filteredRest, setFilteredRest] = useState([]);

  // console.log(navigator.onLine);


  // const fetchdata = async () => {
  //   const response = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5849324&lng=77.38699&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const jsonData = await response.json();
  //   // console.log(jsonData);
  //   setListOfRes(
  //     jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  //   setFilteredRest(
  //     jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  // };

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  const [listOfRes, setListOfRes, filteredRest, setFilteredRest] = useHomePageRest();

  
  const onlineStatus = useOnlineStatus();
  if(!onlineStatus){
    return (<h1>🔴 Offline, Please check your internet connection!!</h1>);
  }
  

 

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if(e.target.value === "") {
                setFilteredRest(listOfRes);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log("enter pressed");
                
                const filteredList = listOfRes.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRest(filteredList);
              }
            }}
          />
          <button
            onClick={() => {
              const filteredList = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRest(filteredList);
            }}>
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRes(filteredList);
          }}>
          Filter Restaurants by rating
        </button>
      </div>
      <div className="res-container">
        {filteredRest.map((restaurant) => {
          return (
           <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}> <RestaurantCard  resData={restaurant} /></Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
