import {
  createBrowserRouter,
  
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./Home/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Apartment from "./pages/Apartment";
import ErrorPage from "./pages/ErrorPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
       element:<Home></Home>
      },
      {
        path:"/apartment",
        element:<Apartment></Apartment>
      },
      {
        path:"/login",
        element:<LoginPage></LoginPage>
      },
      {
        path:"/register",
        element:<RegisterPage></RegisterPage>
      }
    ]
  },
]);

export default router;