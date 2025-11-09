import { useState, useEffect } from "react";
import useRestaurantCard from "../hooks/useRestaurantCard.js";
import Shimmer from "./Shimmer.js";
import RestaurantCard, { withPromatedLabel } from "./RestaurantCard.js";
import useOnlineStatus from "../hooks/useOnlineStatus.js";



const Body = () => {
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const ListOfRestaurants = useRestaurantCard([]);
  let onlineStatus = useOnlineStatus();
  let RestaurantCardPromoted = withPromatedLabel(RestaurantCard);
  useEffect(() => {
    setfilteredRestaurants(ListOfRestaurants);
  }, [ListOfRestaurants]);
  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  if (!onlineStatus) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          You are offline. Please turn on the internet
        </h1>
      </div>
    );
  }
  return (
    <div className="">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-xl text-shadow-xs text-center shadow-xl focus:ring-2"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-2xl text-xl cursor-pointer shadow-xl"
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
        <div className="m-4 p-4 flex items-center ">
          <button
            className="px-4 py-1 bg-gray-100 rounded-2xl text-xl shadow-xl hover:bg-gray-200 cursor-pointer"
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
            className="px-4 py-1 m-2 bg-gray-100 rounded-2xl text-xl shadow-xl  hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              setfilteredRestaurants(ListOfRestaurants);
            }}
          >
            All Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return restaurant.info.isOpen ? (
            <RestaurantCardPromoted key={restaurant.info.id} resData={restaurant} />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )
        })}
      </div>
    </div>
  );
};

export default Body;