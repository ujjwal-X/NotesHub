import React from "react";
import ReactDOM from "react-dom/client";
import School from "./Components/Class/School";
import College from "./Components/College";
import Compitative from "./Components/Compitative";
import App from "./App";
import Home from "./Components/Home";
import Error from "./Components/Error";
import Tenth from "./Components/Class/Tenth";
import Jee from "./Components/Class/Jee";
import Neet from "./Components/Class/Neet";
import Twelth from "./Components/Class/Twelth";
import ContactUs from "./Components/ContactUs";

import { HashRouter, RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = HashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/school",
        element: <School />,
        children: [
          {
            path: "tenth",
            element: <Tenth />,
          },
          {
            path: "twelth",
            element: <Twelth />,
          },
          {
            path: "jee",
            element: <Jee />,
          },
          {
            path: "Neet",
            element: <Neet />,
          },
        ],
      },
      {
        path: "/college",
        element: <College />,
      },
      {
        path: "/compitative",
        element: <Compitative />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);
root.render(

    <RouterProvider router={appRouter}/>
   
 
);
