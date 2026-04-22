const express = require("express");
const app = express();
const puerto = 8080;
const url = require("url");

app.use(express.static('public'));
// Evitar el almacenamiento en caché de las respuestas
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get("/Action", (request, response) => {
  const q = url.parse(request.url, true).query;

  const id = q.id;
  const password = q.password;
  response.end("HOLA: " + id + " TU PASSWORD ES:" + password);
});

app.listen(puerto, () => {
  console.log(puerto);
});