import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cardSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id)); // ✅ pass item id to action
  };

  const handleRemoveCart = () => {
    dispatch(clearCart());
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="m-4 p-4 text-center">
        <h1 className="text-2xl font-bold">
          Nothing in cart. Please add something 🍔
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center my-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleRemoveCart}
        >
          Clear Cart
        </button>
      </div>

      <div className="flex flex-wrap gap-4 m-4 justify-center">
        {cartItems.map((item) => (
          <div
            key={item.info.id}
            className="p-4 w-[220px] bg-gray-100 rounded-2xl hover:bg-gray-200 break-words shadow"
          >
            <img
              className="rounded-xl w-full h-40 object-cover"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.info.cloudinaryImageId
              }
              alt={item.info.name}
            />
            <h3 className="font-bold py-2 text-xl">{item.info.name}</h3>
            <h4>{item.info.cuisines.join(", ")}</h4>
            <h4>{item.info.avgRating} ⭐</h4>
            <h4>{item.info.sla.deliveryTime} minutes</h4>
            <h4 className="mt-2 font-semibold">Quantity: {item.quantity}</h4>

            <button
              className="mt-3 px-3 py-2 w-full rounded-lg bg-red-600 text-white shadow-md hover:bg-red-700 transition"
              onClick={() => handleRemoveItem(item.info.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
