import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="flex justify-between bg-pink-100 shadow-xl ">
      <div className="logo-container">
        <img className="w-30"
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
          <li className="px-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;