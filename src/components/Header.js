import { useState, useContext } from "react";
import { Link } from "react-router";
import UserContext from "./useContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-xl ">
      <div className="logo-container">
        <img
          className="w-30"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLI_uxIDAxCCK46tTEBxgIbto8Znd9-GBfQ&s"
          alt="Description of image"
        />
      </div>
      <div className="flex items-center text-xl">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <button
            className="px-4 cursor-pointer"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 cursor-pointer text-2xl ">
            <Link to={"/cart"}>🛒-{cartItems.reduce((total, item) => total+item.quantity, 0)}</Link>
          </li>
          <li className="px-4 cursor-pointer">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
