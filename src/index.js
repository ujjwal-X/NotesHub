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

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/NotesHub",
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
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
