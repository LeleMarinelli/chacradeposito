import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logoWHAPP from "../../logowhapp.png";

export default function Whatsapp() {

  return (
      <FloatingWhatsApp phoneNumber="+54 9 2392 624008"
      accountName="Chacra Deposito"
      chatMessage="Bienvenidos a Chacra Deposito, Como podemos ayudarte?" 
      placeholder="Escribe tu consulta" 
      statusMessage="Respuesta estimada en 1 hs"
      avatar={logoWHAPP}/>
  )
}