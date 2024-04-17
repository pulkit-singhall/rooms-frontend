import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './screens/home';
import Room from './screens/room';
import Error from './screens/error'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <Error/>
  },
  {
    path: "/room",
    element: <Room />,
    // errorElement: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
