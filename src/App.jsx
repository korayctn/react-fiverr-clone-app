import { useState } from "react";
import "./App.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { Homepage } from "./pages/homepage/Homepage";
import { Add } from "./pages/add/Add";
import { Gig } from "./pages/gig/Gig";
import { Gigs } from "./pages/gigs/Gigs";
import { Login } from "./pages/login/Login";
import { MyGigs } from "./pages/myGigs/myGigs";
import { Messages } from "./pages/messages/Messages";
import { Message } from "./pages/message/Message";
import { Orders } from "./pages/orders/Orders";
import { Register } from "./pages/register/Register";
import { Footer } from "./components/Footer/Footer";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/gig/123",
          element: <Gig />,
        },
        {
          path: "/gigs/",
          element: <Gigs />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/mygigs",
          element: <MyGigs />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
