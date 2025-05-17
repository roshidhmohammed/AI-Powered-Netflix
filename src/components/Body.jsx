import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import WatchMovie from "./WatchMovie";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "browse", element: <Browse /> },
     { path: "watch-movie/:movieId", element: <WatchMovie /> },
  ]);

  return (
    <div className="bg-[#141414] ">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
