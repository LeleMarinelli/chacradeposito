import React from "react";
import "./QuienesSomos.scss";

// FOTOS
import foto6 from "../../media/6.jpg";
import foto7 from "../../media/1.gif";
import { Footer } from "../Footer/Footer";

export function QuienesSomos() {
  return (
    <div>
      <div className="quienes-somos-container">
        <section className="quienes-somos-banner">
          <h3>Llegó la solución a tus problemas de espacio</h3>
        </section>

        {/* :nth-child(2) */}
        <section>
          <p>
            Te acercamos una propuesta practica y confiable de almacenamiento.
          </p>
          <div className="bloque1">
            <img className="" src={foto6} alt="exterior de chacra deposito" />
            <div>
              <h4>
                ¿Por qué <strong> Chacra Deposito</strong> es tu mejor opción?
              </h4>
              <p>
                Somos la solución ideal para guardar pertenencias o mercaderia y
                así pueda recuperar espacio en su hogar o lugar de trabajo.{" "}
                <br />
                Ubicado a 4 cuadras de la Avenida Villegas, disponemos de
                unidades de almacenamiento de multiples tamaños que se adaptan a
                sus necesidades.
                <br /> Tanto para personas como para empresas, contamos con
                altas medidas de seguridad y facilidades para la carga y
                descarga de todo tipo de pertenencias.
              </p>
            </div>
          </div>
          <div className="bloque2">
            <img className="" src={foto7} alt="Muchas cajas" />
            <p>
              Nos enfocamos en ofrecer precios convenientes y asegurar la mejor
              experiencia en nuestros depósitos y atención con nuestros
              clientes.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
