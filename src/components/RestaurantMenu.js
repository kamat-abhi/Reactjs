import React from "react";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { useParams } from "react-router";

const RestaurantMenu = () => {

    // route param name is `resid` (defined in App.js)
    const { resid } = useParams();
  const { menu, loading, error } = useRestaurantMenu(resid);

  if (loading) return <p className="text-gray-500">Loading menu...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  const info = menu?.data?.cards?.find(
    (card) => card.card?.card?.info
  )?.card?.card?.info;

  return (
    <div className="p-6 bg-gray-50 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-2">{info?.name}</h1>
      <p className="text-gray-600">{info?.cuisines?.join(", ")}</p>
      <p className="text-gray-600">{info?.areaName}</p>
      <p className="text-gray-800 font-semibold">
        ⭐ {info?.avgRatingString} ({info?.totalRatingsString})
      </p>
    </div>
  );
};

export default RestaurantMenu;
