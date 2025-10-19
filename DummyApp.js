import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
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
                </ul>
            </div>    

        </div>
    )
}

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLI_uxIDAxCCK46tTEBxgIbto8Znd9-GBfQ&s" alt="Description of image" />
            <h3>{props.resName}</h3>
            <h4>Briyani, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 min</h4>
        </div>
    )    
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="kfc"/>
                <RestaurantCard resName="haldiram"/>
                <RestaurantCard resName="maharaj"/>
                <RestaurantCard resName="gangaram"/>
                

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