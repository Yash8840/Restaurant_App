import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";


const RestaurantMenu = () => {

  const params = useParams();

  //custom hook to fetch the rest data

  const resInfo = useRestMenu(params.resId);
 
  if(resInfo === null){
    return (<Shimmer/>);
  }
  const {name,cuisines,costForTwoMessage, avgRating, locality} = resInfo?.cards[2]?.card?.card?.info;
  const offersArray = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
  console.log(offersArray);
  let groupedArray = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(groupedArray);
  groupedArray = groupedArray.filter(card => card.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
  console.log(groupedArray);
  
  

  return (
    <div className="rest-container-outer">
      <div className="rest-container-inner">
        <div className="path">
          <p>Home/Noida/{name}</p>
        </div>
        <div className="res-name-card">
          <h1>{name}</h1>
        </div>
        <div className="order-online-card">
          <span>Order Online</span>
          <span>Dineout</span>
        </div>
        <div className="res-detail-card">
          <div className="res-detail">
            <div className="res-detail-top">
              <h3>{avgRating}⭐{costForTwoMessage}</h3>
            </div>
            <p>{cuisines.join(',')}</p>
            <p style={{ color: "#FF5200", fontWeight: "bold" }}>
              {locality}
            </p>
          </div>
        </div>
        <div className="deals-for-u-outer">
          <h4>DEALS FOR YOU</h4>
          <div className="deals-cards">
            {offersArray.map((offer)=>{
              return(<div className="deals-card" key={offer.info.offerIds[0]}>
              <div className="offer-logo">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day"
                  alt="offer"
                />
              </div>
              <div className="offer-details">
                <h3>{offer.info.header}</h3>
                <p>{offer.info.description}</p>
              </div>
            </div>);
            })}
          </div>
        </div>

        <div className="menu-logo-card">
          <hr />
          <span>MENU</span>
          <hr />
        </div>
        <div className="search-dishes-card">
          <input className="search-rest" type="text" placeholder="Search for dishes" />
          {/* <button>Search</button> */}
        </div>
        <div className="veg-non-veg-card">
          <div className="veg">Veg</div>
          <div className="non-veg">Non-Veg</div>
          <div className="besteller-icon">Besteller</div>
          <div className="guilt-icon">Guiltfree</div>
        </div>
 


        {groupedArray.map((itemCategory)=>{
          return(<div className="dish-card">
          <h4 className="category-h4">{itemCategory.card.card.title}</h4>
          <hr style={{marginBottom:"10px"}}/>
          {itemCategory.card.card.itemCards.map((dish)=>{
            return(
              <div className="dish-card-inner">
          <div className="dish-detail">
            <h3>{dish.card.info.name}</h3>
            <h4>{dish.card.info.itemAttribute.vegClassifier}</h4>
            <p>{dish.card.info.description}</p>
            <p>{"₹" + +dish.card.info.price / 100}</p>
          </div>
          <div className="dish-logo">
            <img
              src={CDN_URL + dish.card.info.imageId}
              alt="dish"
            />
            <div><button  className="add-btn">ADD+</button></div>
          </div>
        </div>
            );
          })}
        
        </div>)
        })}
        
      </div>
    </div>
  );
};

export default RestaurantMenu;
