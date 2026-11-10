import { useEffect, useState } from "react";

const useHomePageRest = () => {

  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  // Custom Hook logic here
    const fetchdata = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5849324&lng=77.38699&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
  
      const jsonData = await response.json();
      // console.log(jsonData);
      setListOfRes(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRest(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };
  
    useEffect(() => {
      fetchdata();
    }, []);

    return [listOfRes, setListOfRes, filteredRest, setFilteredRest];
  
}
export default useHomePageRest;