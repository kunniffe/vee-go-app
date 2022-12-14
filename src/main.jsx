import React from "react";
import ReactDOM from "react-dom/client";

import "normalize.css";
import "./main.css";

// Routing.
import { RouterProvider } from "react-router-dom";
import router from "./services/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
