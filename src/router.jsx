import {
  createBrowserRouter,
  
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./Home/Home";
import LoginPage from "./pages/LoginPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
       element:<Home></Home>
      },
      {
        path:"/login",
        element:<LoginPage></LoginPage>
      }
    ]
  },
]);

export default router;