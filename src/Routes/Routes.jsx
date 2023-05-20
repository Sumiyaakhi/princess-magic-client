import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import ErrorPage from '../ErrorPage/ErrorPage';
import Blog from '../Pages/Blog/Blog';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/registration',
            element:<Registration></Registration>
        },
        {
          path:'/blogs',
          element:<Blog></Blog>
        }
        
      ]
    },
  ]);



export default router;