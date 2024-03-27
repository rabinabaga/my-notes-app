import React from "react";
import ReactDOM from "react-dom/client";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "./pages/login.jsx";
import "./index.css"
import SignUp from "./pages/sign-up.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Notfound from "./pages/not-found.jsx";
import useAuthListener from "./hooks/use-auth-listener.js";
import App from "./App.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <FirebaseContext.Provider
    value={{ firebase, FieldValue }} // Access FieldValue directly
  >
    <App></App>
  </FirebaseContext.Provider>
);
