import { useState, useEffect } from "react";

const useRestaurantMenu = (resid) => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resid) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
  const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4156008&lng=86.0886366&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`);
  const json = await res.json(); // await response JSON
  // store the full JSON returned by the proxy so callers can access `data` correctly
  setMenu(json);
      } catch (err) {
        setError(err.message || "Error fetching menu");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [resid]);

  return { menu, loading, error };
};

export default useRestaurantMenu;
