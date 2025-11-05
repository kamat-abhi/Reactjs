import { useState, useEffect } from "react";

const useRestaurantCard = () => {
    const [restaurantList, setrestaurantList] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6234486&lng=85.1323779&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json()
        const data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(data)
        setrestaurantList(data)
    };
    return restaurantList;
};

export default useRestaurantCard;