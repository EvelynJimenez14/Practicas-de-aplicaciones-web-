import React from "react";
import { createRoot } from "react-dom/client";

const estilos = `
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f6f8;
  color: #222;
}
.encabezado, .encabezado-html {
  background: #6A0F1B;
  color: white;
  text-align: center;
  padding: 24px 16px;
}
.encabezado h1 {
  margin: 0 0 8px 0;
}
.contenedor-principal {
  width: min(1100px, 94%);
  margin: 28px auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 22px;
}
.tarjeta, .panel-lateral {
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.tarjeta h2, .panel-lateral h3 {
  color: #6A0F1B;
  margin-top: 0;
}
.grupo-campo {
  margin-bottom: 14px;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 6px;
}
input, select, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #777;
  border-radius: 6px;
  font-size: 15px;
}
button {
  width: 100%;
  background: #6A0F1B;
  color: white;
  border: none;
  padding: 13px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  background: #4d0a13;
}
.panel-lateral ul {
  line-height: 1.9;
  font-weight: bold;
}
.pie, .pie-html {
  background: #222;
  color: white;
  text-align: center;
  padding: 16px;
  margin-top: 30px;
}
@media (max-width: 800px) {
  .contenedor-principal {
    grid-template-columns: 1fr;
  }
}
`;

class Application extends React.Component {
  render() {
    return (
      <>
        <style>{estilos}</style>
        <header className="encabezado">
          <h1>Formulario de Registro</h1>
          <p>Aplicación Web REST con React, Webpack, Babel y Express.js</p>
        </header>

        <main className="contenedor-principal">
          <section className="panel-formulario">
            <article className="tarjeta">
              <h2>Datos del estudiante</h2>

              <form method="get" action="/Action">
                <div className="grupo-campo">
                  <label htmlFor="nombre">Nombre(s):</label>
                  <input id="nombre" type="text" name="nombre" required />
                </div>

                <div className="grupo-campo">
                  <label htmlFor="apellidoPaterno">Apellido paterno:</label>
                  <input id="apellidoPaterno" type="text" name="apellidoPaterno" required />
                </div>

                <div className="grupo-campo">
                  <label htmlFor="apellidoMaterno">Apellido materno:</label>
                  <input id="apellidoMaterno" type="text" name="apellidoMaterno" required />
                </div>

                <div className="grupo-campo">
                  <label htmlFor="boleta">Boleta:</label>
                  <input id="boleta" type="text" name="boleta" required />
                </div>

                <div className="grupo-campo">
                  <label htmlFor="grupo">Grupo:</label>
                  <input id="grupo" type="text" name="grupo" required />
                </div>

                <div className="grupo-campo">
                  <label htmlFor="carrera">Carrera:</label>
                  <select id="carrera" name="carrera" required>
                    <option value="">Selecciona una opción</option>
                    <option value="Ingeniería en Sistemas Computacionales">Ingeniería en Sistemas Computacionales</option>
                    <option value="Ingeniería en Inteligencia Artificial">Ingeniería en Inteligencia Artificial</option>
                    <option value="Licenciatura en Ciencia de Datos">Licenciatura en Ciencia de Datos</option>
                  </select>
                </div>

                <div className="grupo-campo">
                  <label htmlFor="correo">Correo institucional:</label>
                  <input id="correo" type="email" name="correo" required />
                </div>

                <div className="grupo-campo">
                  <label htmlFor="semestre">Semestre:</label>
                  <input id="semestre" type="text" name="semestre" required />
                </div>

                <div className="grupo-campo">
                  <label htmlFor="comentarios">Comentarios:</label>
                  <textarea id="comentarios" name="comentarios" rows="4" required></textarea>
                </div>

                <button type="submit">Enviar datos al Back-End</button>
              </form>
            </article>
          </section>

          <aside className="panel-lateral">
            <h3>Etiquetas HTML5 utilizadas</h3>
            <ul>
              <li>&lt;header&gt;</li>
              <li>&lt;main&gt;</li>
              <li>&lt;section&gt;</li>
              <li>&lt;article&gt;</li>
              <li>&lt;aside&gt;</li>
              <li>&lt;footer&gt;</li>
            </ul>
            <p>Al enviar el formulario, Express.js recupera los parámetros y genera una página dinámica.</p>
          </aside>
        </main>

        <footer className="pie">
          <p>Práctica 2 | Front-End React montado en Back-End Express | Puerto 8080</p>
        </footer>
      </>
    );
  }
}

const rootElement = document.getElementById("contenedor");
const root = createRoot(rootElement);
root.render(<Application />);
