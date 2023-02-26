import React from "react";
import { useRoutes } from "react-router";

import { Inicio } from "../components/Inicio/Inicio";
import { QuienesSomos } from "../components/QuienesSomos/QuienesSomos";

export const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <Inicio /> },

    { path: "/quienes-somos", element: <QuienesSomos /> },

    { path: "*", element: "/" },
  ]);

  return routes;
};
