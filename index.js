import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favourites from "./src/components/Favourites";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/favourites",
    element: <Favourites />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
