import { useEffect, useState } from "react";

const useRestMenu = (resId)=>{

  const [resInfo, setResInfo] = useState(null);

    const fetchMenu = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5849324&lng=77.38699&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    setResInfo(json.data);
    
  }

  useEffect(()=>{
    fetchMenu();
  },[]);

  return resInfo;
}
export default useRestMenu;