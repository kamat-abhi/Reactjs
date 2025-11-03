import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";



const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLI_uxIDAxCCK46tTEBxgIbto8Znd9-GBfQ&s" alt="Description of image" />
            </div>
            <div className="nav-items"> 
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() =>{
                        btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>    

        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.map((cuisen) => cuisen)}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )    
};

const Body = () => {
    //Locla state variable
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);

    const [searchText, setsearchText] = useState("")

    console.log("Abhishek");
    
    // Whenever state variable update, react triggers a reconciliation cycle(re-render the component)
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        const restaurantList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurantList || []);
        setfilteredRestaurants(restaurantList || []);
        
    };

    useEffect(() => {
        fetchData();
    }, [])
    if(ListOfRestaurants.length === 0){
        return <Shimmer />;
    }

    return (
         <div className="body">
                    <div className="filter">
                        <div className="search">
                            <input type="text" className="search-box" value={searchText} onChange={(e) => {
                                setsearchText(e.target.value)
                            }}/>
                            <button className="search-btn"onClick={() => {
                                const filteredRest = ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                                setfilteredRestaurants(filteredRest);
                            }}>Search</button>

                        </div>
                        <div className="btn-container">
                            <button className="my-btn" onClick={() => {
                            const filteredList = ListOfRestaurants.filter((res) => res.info && res.info.avgRating>4.5);
                            setfilteredRestaurants(filteredList)
                            console.log(ListOfRestaurants)
                        }}>
                            Top Rated Restaurant
                        </button>
                        <button className="my-btn" onClick={() => {
                            setfilteredRestaurants(ListOfRestaurants)
                            console.log(ListOfRestaurants);
                        }}>All Restaurants</button>
                        </div>
                    </div>
                    <div className="res-container">
                        {filteredRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                        })}
                    </div>
                </div>
    )
}

const AppLayout = () => {
    return (
        <div className="App">
            {Header(0)}
            <Body/>


        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)

//Hooks in React keep sync the ui with the data.
// Whenever a state variable is updated, react re-renders the component to reflect the changes in the UI.
// Hooks are special functions which let us "hook into" React features.
// Examples of hooks are useState, useEffect, useContext etc.
// Custom hooks are normal JavaScript functions whose names start with "use" and that may call other hooks.
// Custom hooks allow us to extract component logic into reusable functions.
