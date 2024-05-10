import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../Page/Home/Home';
import ErrorPage from '../Page/ErrorPage';
import AboutUs from '../Page/AboutUs/AboutUs';



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      },
      
    ],
  },

])
