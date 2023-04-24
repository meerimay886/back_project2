import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AuthContext from "./contexts/AuthContext";
import ProductContext from "./contexts/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContext>
      <ProductContext>
        <App />
      </ProductContext>
    </AuthContext>
  </BrowserRouter>
);
