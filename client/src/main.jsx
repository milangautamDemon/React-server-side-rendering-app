import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/* 
//client-side rendering
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
*/

//server-side rendering
const domRootContainer = document.getElementById("root");
hydrateRoot(container, <App />);
