import { useState, useEffect } from "react"
import { useParams } from "react-router";
import Shimmer from "./Shimmer.js";
import useRestaurantMenu from "../hooks/useRestaurantMenu.js";

const RestaurantMenu = () => {
    const {resid} = useParams()
    const resDataList = useRestaurantMenu(resid);
    if (!resDataList) {
        return <Shimmer />;
    }
    return (
        <div class="restaurant-card">
        <div class="card-header">
            <h3 class="restaurant-name">{resDataList.name}</h3>
        </div>

        <div class="card-info">
            <span class="rating">
            ⭐ {resDataList.avgRatingString} <span class="ratings">{" (" + resDataList.totalRatingsString + " )"}</span>
            </span>
            <span class="dot">•</span>
            <span class="price">{resDataList.costForTwoMessage}</span>
        </div>

        <div class="cuisine">
            <h2>{resDataList?.lables[2]?.message}</h2>
        </div>

        <div class="outlet">
            <div class="line"></div>
            <div class="outlet-info">
            <p><strong>Outlet</strong> {resDataList.city} Locality</p>
            <p>{resDataList?.sla?.minDeliveryTime}–{resDataList?.sla?.maxDeliveryTime} mins</p>
            </div>
        </div>
        </div>
    )

}


export default RestaurantMenu;