import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import ErrorPage from '../ErrorPage/ErrorPage';
import Blog from '../Pages/Blog/Blog';
import AllToys from '../Pages/AllToys/AllToys';
import SingleToyDetail from '../Pages/SingleToyDetail/SingleToyDetail';
import MyToys from '../Pages/MyToys/MyToys';
import AddAtoy from '../Pages/AddAToy/AddAtoy';
import PrivateRoutes from './PrivateRoutes';
  
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
        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>,
          loader:()=>fetch('http://localhost:5000/services')
        },
        {
          path:'/toy/:id',
          element:<PrivateRoutes><SingleToyDetail></SingleToyDetail></PrivateRoutes>,
          loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        
       {
        path:'/mytoys',
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>,
       },
       {
        path:'/addatoy',
        element:<AddAtoy></AddAtoy>
       }

        
      ]
    },
  ]);



export default router;