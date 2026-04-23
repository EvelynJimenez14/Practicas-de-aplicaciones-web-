
const express = require("express");
const app = express();
const puerto = 8080;
const url = require("url");

app.use(express.static('public'));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});

function escaparHTML(texto) {
    return String(texto)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

app.get("/Action", (request, response) => {
    const q = url.parse(request.url, true).query;

    const nombre = q.nombre || '';
    const apellido = q.apellido || '';
    const fecha = q.fecha || '';
    const genero = q.genero || '';
    const correo = q.correo || '';
    const ciudad = q.ciudad || '';
    const carrera = q.carrera || '';
    const semestre = q.semestre || '';
    const boleta = q.boleta || '';
    const observaciones = q.observaciones || '';

    const html = `<!DOCTYPE html>
<html>
<head>
    <title>Datos del Formulario</title>
</head>
<body>
    <h1>Parametros Recibidos</h1>
    <table border="1">
        <thead>
            <tr>
                <th>Campo</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Nombre</td>
                <td>${escaparHTML(nombre)}</td>
            </tr>
            <tr>
                <td>Apellido</td>
                <td>${escaparHTML(apellido)}</td>
            </tr>
            <tr>
                <td>Fecha de nacimiento</td>
                <td>${escaparHTML(fecha)}</td>
            </tr>
            <tr>
                <td>Genero</td>
                <td>${escaparHTML(genero)}</td>
            </tr>
            <tr>
                <td>Correo electronico</td>
                <td>${escaparHTML(correo)}</td>
            </tr>
            <tr>
                <td>Ciudad</td>
                <td>${escaparHTML(ciudad)}</td>
            </tr>
            <tr>
                <td>Carrera</td>
                <td>${escaparHTML(carrera)}</td>
            </tr>
            <tr>
                <td>Semestre</td>
                <td>${escaparHTML(semestre)}</td>
            </tr>
            <tr>
                <td>Boleta</td>
                <td>${escaparHTML(boleta)}</td>
            </tr>
            <tr>
                <td>Observaciones</td>
                <td>${escaparHTML(observaciones)}</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`;

    response.send(html);
});

app.listen(puerto, () => {
    console.log(puerto);
});
