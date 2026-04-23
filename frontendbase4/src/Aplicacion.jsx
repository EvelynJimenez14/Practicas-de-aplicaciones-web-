import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

class Application extends React.Component {
  render() {
    return (

      <div>
        <h1>Formulario de Registro</h1>
        <form method="get" action="http://localhost:8080/Action">

          <fieldset>
            <legend>Datos Personales</legend>

            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required /><br />

            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required /><br />

            <label htmlFor="fecha">Fecha de nacimiento:</label>
            <input type="date" id="fecha" name="fecha" /><br />

            <label htmlFor="genero">Género:</label>
            <select id="genero" name="genero">
              <option value="femenino">Femenino</option>
              <option value="masculino">Masculino</option>
              <option value="otro">Otro</option>
            </select><br />


            <label htmlFor="correo">Correo electronico:</label>
            <input type="email" id="correo" name="correo" /><br />

            <label htmlFor="ciudad">Ciudad:</label>
            <input type="text" id="ciudad" name="ciudad" list="listaCiudades" />
            <datalist id="listaCiudades">
              <option value="Ciudad de Mexico" />
              <option value="Guadalajara" />
              <option value="Monterrey" />
              <option value="Puebla" />
              <option value="Tijuana" />
            </datalist><br />
          </fieldset>

          <fieldset>
            <legend>Informacion Academica</legend>
            <label htmlFor="boleta">Boleta:</label>
            <input type="text" id="boleta" name="boleta" required /><br />

            <label htmlFor="carrera">Carrera:</label>
            <select id="carrera" name="carrera">
              <optgroup label="Ingenieria">
                <option value="ISC">Ingenieria en Sistemas Computacionales</option>
                <option value="IIA">Ingenieria en Inteligencia Artificial</option>
                <option value="LCD">Licenciatura en Ciencia de Datos</option>
              </optgroup>
              <optgroup label="Ciencias">
                <option value="FIS">Fisica</option>
                <option value="MAT">Matematicas</option>
              </optgroup>
            </select><br />

            <label htmlFor="semestre">Semestre:</label>
            <input type="number" id="semestre" name="semestre" min="1" max="12" /><br />
          </fieldset>

          <fieldset>
            <legend>Comentarios</legend>

            <label htmlFor="observaciones">Observaciones:</label><br />
            <textarea id="observaciones" name="observaciones" rows="4" cols="40"></textarea><br />
          </fieldset>

          <button type="submit">Enviar</button>

        </form>
      </div>
    );
  }
}

export default Application;

const rootElement = document.getElementById("contenedor");
const root = createRoot(rootElement);
root.render(<Application />);
