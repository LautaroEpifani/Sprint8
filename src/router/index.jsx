import { createBrowserRouter } from "react-router-dom";
import Landing from "../components/Starships/Starships";
import NotFound from "../components/NotFound/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import StarshipDetail from "../components/StarshipDetail/StarshipDetail";
import Starships from "../components/Starships/Starships";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import ProtectRoute from "../components/ProtectRoute";
import Pilots from "../components/Pilots/Pilots";
import Movies from "../components/Movies/Movies";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
      path: "/starships/",
        element: 
          <ProtectRoute>
            <Starships/>
          </ProtectRoute>

      },
      {
      path: "/starships/:id",
        element: <StarshipDetail/>

      },
      {
      path: "/login",
        element: <Login/>

      },
      {
      path: "/signup",
        element: <SignUp/>

      }
      
    ],
  },
]);
