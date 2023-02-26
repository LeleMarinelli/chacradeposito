import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import { NavBar2 } from "./components/NavBar/NavBar2";
import Whatsapp from "./components/Whatsapp/Whatsapp";

import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Whatsapp />
      <NavBar2 />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
