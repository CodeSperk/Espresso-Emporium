import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/Add/AddCoffee";

const Routes = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>404 error</div>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/addCoffee",
        element:<AddCoffee></AddCoffee>
      }
    ]
  }
])

export default Routes;