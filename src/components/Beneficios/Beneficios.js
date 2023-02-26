import "./Beneficios.scss";

import {
  GiKeyCard,
  GiIdCard,
  GiCctvCamera,
  GiTimeSynchronization,
  GiSpy,
  GiElevator,
} from "react-icons/gi";

import React from "react";

export const Beneficios = () => {
  return (
    <section className="beneficios">
      <h3>Caracteristicas y Beneficios</h3>
      <div className="containerBeneficios">
        {/* 1 */}
        <div className="cardBeneficios">
          <p className="logoBeneficios">
            <GiKeyCard className="icon" />
          </p>
          <h4>Alquiler de bauleras privadas</h4>
          <p>
            Ingrese y retire sus bienes con asistencia personalizada y
            profesional. <br /> Bauleras con llave unica.
          </p>
        </div>
        {/* 2 */}
        <div className="cardBeneficios">
          <p className="logoBeneficios">
            <GiIdCard className="icon" />
          </p>
          <h4>Rápido contrato mensual</h4>
          <p>
            Pocos requisitos, facilidad de pago y sin tramites complicados. Con
            tu DNI y domicilio podes empezar a guardar.
          </p>
        </div>
        {/* 3 */}
        <div className="cardBeneficios">
          <p className="logoBeneficios">
            <GiCctvCamera className="icon" />
          </p>
          <h4>Seguridad las 24 hs</h4>
          <p>
            Sistema de camaras y monitoreo las 24hs. Con las mas avanzadas
            medidas contra robos e incendios.
          </p>
        </div>
        {/* 4 */}
        <div className="cardBeneficios">
          <p className="logoBeneficios">
            <GiTimeSynchronization className="icon" />
          </p>
          <h4>Amplio horario de acceso </h4>
          <p>
            Horarios extendidos todos los días de la semana, para que puedas
            ingresar a tu baulera cuando mas lo necesites.
          </p>
        </div>
        {/* 5 */}
        <div className="cardBeneficios">
          <p className="logoBeneficios">
            <GiSpy className="icon" />
          </p>
          <h4>Privacidad absoluta</h4>
          <p>
            Acceso a garantizado exclusivamente para el cliente y sus
            autorizados.
            <br /> Total privacidad de los bienes guardados*
          </p>
        </div>
        {/* 6 */}
        <div className="cardBeneficios">
          <p className="logoBeneficios">
            <GiElevator className="icon" />
          </p>
          <h4>Accesibilidad / Ascensor</h4>
          <p>
            Espacio preparado para carga y descarga. Amplio ascensor para
            transportar todo tipo de elementos a pisos superiores.
          </p>
        </div>
      </div>
    </section>
  );
};

// 1)
// GiLockedChest;
// GiLockers; <3
// GiKeyCard;  <3

// 2)
// GiShakingHands;<3
// GiCubeforce;
// GiFiles;
// GiIdCard; <3

//  3)
// GiShieldReflect;
// GiSwordsEmblem;   <3
// GiAttachedShield;
// GiTemporaryShield;
// GiCctvCamera;   <3

//EXTINTOR DE FUEGO
// GiFireExtinguisher;

//4)
// GiTimeSynchronization;

//5)
// GiKeyLock;
// GiSpy;
// GiSightDisabled;

//6)
// GiElevator;
// GiHandTruck;

// GiEclipseFlare;
// GiEmerald;
