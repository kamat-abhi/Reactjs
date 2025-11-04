import { useState, useEffect } from "react"
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {resid} = useParams()
    const [resDataList, setresDataList] = useState(null);
    useEffect(() => {
        fetchData();
    }, [resid])
    const fetchData = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4274878&lng=86.106201&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`);
        console.log(resData);
        const json = await data.json()
        setresDataList(json?.data?.cards[2]?.card?.card?.info)
    }
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


export default RestaurantMenu