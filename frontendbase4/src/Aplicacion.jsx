import React, { Component } from 'react';
import ReactDOM from "react-dom";

import { createRoot } from 'react-dom/client';
import './styles.css';
class Application extends React.Component {
  render() {
    return (
      // Formulario
      <div>
        <form method="get" action="http://localhost:8080/Action">

          <input type="text" name="id" /><br />
          <input type="password" name="password" /><br />
          <input type="submit" />

        </form>
        <button type="button" onClick={() => alert("Sesion iniciada")}>Alerta</button>
        <div>
          <p>Selecciona tu color favorito:</p>
          <input type="radio" id="rojo" name="color" value="rojo" />
          <label for="rojo">Rojo</label><br />
          <input type="radio" id="azul" name="color" value="azul" />
          <label for="azul">Azul</label><br />
          <input type="radio" id="verde" name="color" value="verde" />
          <label for="verde">Verde</label><br />
        </div>
        <texttarea name="comentarios" >Sugerencias</texttarea>
        <input type='text' name='comentarios' placeholder='Sugerencias' />
      </div>
    );
  }
}

export default Application;

//CODIGO ACTUALIZADO PAREA LA NUEVA VERSION DE REACT
const rootElement = document.getElementById("contenedor");
const root = createRoot(rootElement);
root.render(<Application />);

