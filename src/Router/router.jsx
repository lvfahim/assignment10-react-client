import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Navbar from "../Componetn/Fiex/Navbar";
import Auth from "../Root/Auth";
import Login from "../Page/Login";
import Register from "../Page/Register";
import User from "../Page/User";
import PrivetRouter from "../Provider/PrivetRouter";
import EditUser from "../Page/EditUser";
import Home from "../Componetn/Fiex/Home";
import AboutUS from "../Componetn/About/AboutUS";
import BuyCar from "../Componetn/Car/BuyCar";
import Blog from "../Componetn/Fiex/Blog";
import OurServis from "../Componetn/About/OurServis";
import AddCar from "../Page/AddCar";
import BrowseCar from "../Page/BrowseCar";
import CarDetails from "../Componetn/Car/CarDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/user',
          element:<PrivetRouter><User></User></PrivetRouter>
        },
        {
          path:'/editUser',
          element:<PrivetRouter><EditUser></EditUser></PrivetRouter>
        },
        {
          path:'/aboutUs',
          element:<AboutUS></AboutUS>
        },
        {
          path:'/buyCar',
          element:<BuyCar></BuyCar>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/ourServis',
          element:<OurServis></OurServis>
        },
        {
          path:'/abbCar',
          element:<PrivetRouter><AddCar></AddCar></PrivetRouter>
        },
        {
          path:'/browseCar',
          element:<BrowseCar></BrowseCar>
        },
        {
          path:'/carDetails/:id',
          element:<CarDetails></CarDetails>
        }
    ]
  },
  {
    path:'/auth',
    element:<Auth></Auth>,
    errorElement:<Error></Error>,
    children:[
        {
            path:'/auth/login',
            element:<Login></Login>
        },
        {
            path:'/auth/register',
            element:<Register></Register>
        }
    ]
  }
]);
export default router