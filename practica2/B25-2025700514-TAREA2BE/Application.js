const express = require("express");
const path = require("path");

const app = express();
const puerto = 8080;

app.use((request, response, next) => {
  response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  response.setHeader("Pragma", "no-cache");
  response.setHeader("Expires", "0");
  response.setHeader("Surrogate-Control", "no-store");
  next();
});

app.use(express.static(path.join(__dirname, "public")));

function limpiar(valor) {
  return String(valor || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

app.get("/Action", (request, response) => {
  const datos = {
    nombre: limpiar(request.query.nombre),
    apellidoPaterno: limpiar(request.query.apellidoPaterno),
    apellidoMaterno: limpiar(request.query.apellidoMaterno),
    boleta: limpiar(request.query.boleta),
    grupo: limpiar(request.query.grupo),
    carrera: limpiar(request.query.carrera),
    correo: limpiar(request.query.correo),
    semestre: limpiar(request.query.semestre),
    comentarios: limpiar(request.query.comentarios)
  };

  response.send(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Respuesta del Back-End</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: #f4f6f8;
      color: #222;
    }
    header {
      background: #6A0F1B;
      color: white;
      text-align: center;
      padding: 24px 16px;
    }
    main {
      width: min(1050px, 94%);
      margin: 28px auto;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 22px;
    }
    section, aside {
      background: white;
      border: 1px solid #ddd;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    article {
      border-left: 6px solid #6A0F1B;
      padding-left: 16px;
    }
    h2, h3 { color: #6A0F1B; margin-top: 0; }
    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
    }
    th, td {
      border: 1px solid #bbb;
      padding: 10px;
      text-align: left;
    }
    th { background: #eeeeee; }
    a.boton {
      display: inline-block;
      margin-top: 18px;
      padding: 12px 16px;
      background: #6A0F1B;
      color: white;
      text-decoration: none;
      border-radius: 6px;
    }
    footer {
      background: #222;
      color: white;
      text-align: center;
      padding: 16px;
      margin-top: 30px;
    }
    @media (max-width: 800px) {
      main { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Datos recuperados por el Back-End</h1>
    <p>Respuesta dinámica generada con Express.js en el puerto 8080.</p>
  </header>

  <main>
    <section>
      <article>
        <h2>Información enviada desde el formulario</h2>
        <table>
          <tr><th>Campo</th><th>Valor recuperado</th></tr>
          <tr><td>Nombre(s)</td><td>${datos.nombre}</td></tr>
          <tr><td>Apellido paterno</td><td>${datos.apellidoPaterno}</td></tr>
          <tr><td>Apellido materno</td><td>${datos.apellidoMaterno}</td></tr>
          <tr><td>Boleta</td><td>${datos.boleta}</td></tr>
          <tr><td>Grupo</td><td>${datos.grupo}</td></tr>
          <tr><td>Carrera</td><td>${datos.carrera}</td></tr>
          <tr><td>Correo institucional</td><td>${datos.correo}</td></tr>
          <tr><td>Semestre</td><td>${datos.semestre}</td></tr>
          <tr><td>Comentarios</td><td>${datos.comentarios}</td></tr>
        </table>
        <a class="boton" href="/">Regresar al formulario</a>
      </article>
    </section>

    <aside>
      <h3>Estructura semántica utilizada</h3>
      <p>Esta respuesta utiliza las etiquetas solicitadas por la práctica:</p>
      <ul>
        <li>&lt;header&gt;</li>
        <li>&lt;main&gt;</li>
        <li>&lt;section&gt;</li>
        <li>&lt;article&gt;</li>
        <li>&lt;aside&gt;</li>
        <li>&lt;footer&gt;</li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>Back-End Express.js | Archivo Application.js | Puerto 8080</p>
  </footer>
</body>
</html>`);
});

app.listen(puerto, () => {
  console.log("Servidor Express ejecutándose en http://localhost:" + puerto);
  console.log("También disponible en http://127.0.0.1:" + puerto);
});
