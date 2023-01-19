import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LoggedInProvider } from "./context/LoginContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoggedInProvider>
  <BrowserRouter>
   <App />
 </BrowserRouter>
</LoggedInProvider>
);
