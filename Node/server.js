const express = require("express");
const app = express();
const port = 3000;

// Rota com status 200 (OK)
app.get("/", (req, res) => {
  res.status(200).send("Requisição bem-sucedida!");
});

// Rota com status 404 (Not Found)
app.get("/erro", (req, res) => {
  res.status(404).send("Recurso não encontrado!");
});

// Rota com status 500 (Erro Interno)
app.get("/falha", (req, res) => {
  res.status(500).send("Erro no servidor!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
