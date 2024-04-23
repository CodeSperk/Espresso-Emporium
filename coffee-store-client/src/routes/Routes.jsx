import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/Add/AddCoffee";
import UpdateCoffee from "../pages/update/UpdateCoffee";

const Routes = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout></MainLayout>,
    errorElement: <div>404 error</div>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch("http://localhost:5000/coffee")
      },
      {
        path:"/addCoffee",
        element:<AddCoffee></AddCoffee>
      },
      {
        path:"/updateCoffee/:id",
        element:<UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      }
    ]
  }
])

export default Routes;