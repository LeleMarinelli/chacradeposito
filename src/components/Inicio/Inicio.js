import React from "react";
import { Carrusel } from "./Carrusel";
import { Footer } from "../Footer/Footer";
import { Beneficios } from "../Beneficios/Beneficios";
import { Mapa } from "../Mapa/Mapa";
import { Marquesina1 } from "../Marquesina/Marquesina1";

import { BannerFotoBlur } from "../BannerFotoBlur/BannerFotoBlur";

export const Inicio = () => {
  return (
    <div>
      <Carrusel />
      <Marquesina1 />
      <BannerFotoBlur />
      <Beneficios />
      <Mapa />
      <Footer />
    </div>
  );
};
