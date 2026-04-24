import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

class Application extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Formulario de Registro</h1>
        </div>

        <form method="get" action="http://localhost:8080/Action" className="form">

          <fieldset className="fieldset">
            <legend className="legend">Datos Personales</legend>

            <label>Nombre:</label>
            <input type="text" name="nombre" required className="input" />

            <label>Apellido:</label>
            <input type="text" name="apellido" required className="input" />

            <label>Fecha de nacimiento:</label>
            <input type="date" name="fecha" className="input" />

            <label>Género:</label>
            <select name="genero" className="input">
              <option value="femenino">Femenino</option>
              <option value="masculino">Masculino</option>
              <option value="otro">Otro</option>
            </select>

            <label>Correo electrónico:</label>
            <input type="email" name="correo" className="input" />

            <label>Ciudad:</label>
            <input type="text" name="ciudad" list="listaCiudades" className="input" />
            <datalist id="listaCiudades">
              <option value="Ciudad de México" />
              <option value="Guadalajara" />
              <option value="Monterrey" />
              <option value="Puebla" />
              <option value="Tijuana" />
            </datalist>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="legend">Información Académica</legend>

            <label>Boleta:</label>
            <input type="text" name="boleta" required className="input" />

            <label>Carrera:</label>
            <select name="carrera" className="input">
              <optgroup label="Ingeniería">
                <option value="ISC">Ingeniería en Sistemas Computacionales</option>
                <option value="IIA">Ingeniería en Inteligencia Artificial</option>
                <option value="LCD">Licenciatura en Ciencia de Datos</option>
              </optgroup>
              <optgroup label="Ciencias">
                <option value="FIS">Física</option>
                <option value="MAT">Matemáticas</option>
              </optgroup>
            </select>

            <label>Semestre:</label>
            <input type="number" name="semestre" min="1" max="12" className="input" />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="legend">Comentarios</legend>
            <label>Observaciones:</label>
            <textarea name="observaciones" rows="4" className="textarea"></textarea>
          </fieldset>

          <button type="submit" className="button">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Application;

const rootElement = document.getElementById("contenedor");
const root = createRoot(rootElement);
root.render(<Application />);