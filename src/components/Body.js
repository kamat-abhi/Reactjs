import { useState, useEffect } from "react";
import useRestaurantCard from "../hooks/useRestaurantCard.js";
import Shimmer from "./Shimmer.js";
import RestaurantCard from "./RestaurantCard.js";


const Body = () => {
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const ListOfRestaurants = useRestaurantCard([]);
  console.log(ListOfRestaurants)
  useEffect(() => {
    setfilteredRestaurants(ListOfRestaurants);
  }, [ListOfRestaurants]);
  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRest = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="btn-container">
          <button
            className="my-btn"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info && res.info.avgRating > 4.5
              );
              setfilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
          <button
            className="my-btn"
            onClick={() => {
              setfilteredRestaurants(ListOfRestaurants);
            }}
          >
            All Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;