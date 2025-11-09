import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";

const RestaurantCard = (props) => {
  const { resData } = props;
  const dispatch = useDispatch();
  const handleAddItem = (resData) => {
    dispatch(addItem(resData));
  };
  return (
    <div className="m-4 p-4 w-[220px] bg-gray-100 rounded-2xl hover:bg-gray-200 wrap-break-word">
      <img
        className="rounded-xl "
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3 className="font-bold py-2 text-xl">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.map((cuisen) => cuisen + ", ")}</h4>
      <h4>{resData.info.avgRating} ⭐</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <button
        className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg cursor-pointer"
        onClick={() => handleAddItem(resData)}
      >
        Add+
      </button>
    </div>
  );
};

export const withPromatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
