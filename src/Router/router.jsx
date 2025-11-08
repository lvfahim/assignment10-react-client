import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Navbar from "../Componetn/Fiex/Navbar";
import Auth from "../Root/Auth";
import Login from "../Page/Login";
import Register from "../Page/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
        {
            path:'/',
            element:<Navbar></Navbar>
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