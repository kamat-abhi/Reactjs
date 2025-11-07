import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import Header from "./components/Header.js";
//import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Error from "./components/Error.js"; 
import Home from "./pages/Home.js";
//import Grocery from "./components/Grocery.js";

const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import('./pages/About.js'));

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
    ],
    errorElement: <Error />,
  },
]);


const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
