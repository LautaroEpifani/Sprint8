import { RouterProvider } from "react-router";
import LayoutPublic from "./layout/LayoutPublic";
import {router} from './router'


function App() {
  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  );
}

export default App;
