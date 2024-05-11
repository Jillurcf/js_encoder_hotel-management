import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../Page/Home/Home';
import ErrorPage from '../Page/ErrorPage';
import AboutUs from '../Page/AboutUs/AboutUs';
import SignIn from '../Page/Login/Login';
import Signup from '../Page/Signup/Signup';
import RoomDetails from '../Page/RoomDetails/RoomDetails';
import BookedRoom from '../Page/BookedRoom/BookedRoom';



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
      {
        path: '/roomDetails/:id',
        element: <RoomDetails></RoomDetails>
      },
      {
        path: '/bookedRoom',
        element: <BookedRoom></BookedRoom>
      }
      
    ],
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  }

])
