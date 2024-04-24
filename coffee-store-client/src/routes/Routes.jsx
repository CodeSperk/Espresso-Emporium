import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/Add/AddCoffee";
import UpdateCoffee from "../pages/update/UpdateCoffee";
import Register from "../pages/register/Register";
import Login from "../login/Login";
import PrivateRout from "./PrivateRout";
import Users from "../pages/users/Users";

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
        element:<PrivateRout><AddCoffee></AddCoffee></PrivateRout>
      },
      {
        path:"/updateCoffee/:id",
        element:<PrivateRout> <UpdateCoffee></UpdateCoffee> </PrivateRout>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/users",
        element:<Users></Users>,
        loader: () => fetch("http://localhost:5000/users")
      }
    ]
  }
])

export default Routes;