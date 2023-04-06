import { createBrowserRouter } from "react-router-dom";
import { ProfilePage } from "../pages/ProfilePage.jsx";
import { MainPage } from "../pages/MainPage";
import { Login } from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element:  <Login/>,
  },
  {
    path: "/table",
    element: <MainPage />
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  }
]);