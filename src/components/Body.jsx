import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import ViewMovie from "./viewMovie";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "browse", element: <Browse /> },
     { path: "watch-movie/:id", element: <ViewMovie /> },
  ]);

  return (
    <div className="bg-[#141414] ">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
