import { useState, useEffect } from "react";

const useRestaurantMenu = (resid) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, [resid]);
  const fetchData = async () => {
    const data = fetch("https://www.google.com");
    const response = data.json();
    setresInfo(response);
  };
  return resInfo;
};

export default useRestaurantMenu;
