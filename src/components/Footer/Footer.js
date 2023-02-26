import "./Footer.scss";
import logo from "../../logoFINALblanco.png";

import React from "react";

// icons
import { GoHome, GoMail } from "react-icons/go";
import { GiSmartphone, GiCardboardBoxClosed } from "react-icons/gi";
import { IoTimeSharp } from "react-icons/io5";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="footerContainer">
      {/* //COLUMNAS */}
      <section className="columnContainer">
        <div className="footerColumn">
          <img className="topLogo" src={logo} alt="Logo Depositos" />
        </div>
        <div className="footerColumn footerColumn-none">
          <GiCardboardBoxClosed className="iconGrande" />
        </div>
        <div className="footerColumn">
          <ul>
            <li>
              <h4>Información</h4>
            </li>
            <li>
              <GoHome className="icon" />
              <p>Cnel. Lagos 10 bis, Trenque Lauquen.</p>
            </li>
            <li>
              <GiSmartphone className="icon" /> <p>+54 2392 123456</p>
            </li>
            <li>
              <GoMail className="icon" /> <p>Chacradeposito@gmail.com</p>
            </li>
            <li>
              <IoTimeSharp className="icon" />
              <p>Lunes a Viernes - 8:00/13:00hs 16:00/20:00hs</p>
            </li>
          </ul>
        </div>
      </section>
      {/* //REDES SOCIALES */}
      <section className="rowRedes">
        <hr className="linea" />
        <div className="flexRedes">
          <a href="https://www.instagram.com">
            <BsInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com">
            <BsFacebook className="icon" />
          </a>
          <a href="https://www.facebook.com">
            <BsWhatsapp className="icon" />
          </a>
        </div>
      </section>
    </div>
  );
};
