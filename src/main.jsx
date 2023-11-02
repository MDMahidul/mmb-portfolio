import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import Error from './Pages/Error/Error.jsx';
import Feedback from './Pages/Feedback/Feedback.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error/>,
  },
  {
    path: "/feedback",
    element: <Feedback/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster/>
  </>
);
