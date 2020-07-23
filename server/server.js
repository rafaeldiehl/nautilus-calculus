const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 5000;
const host = 'localhost';

app.get('/', () => {
  console.log('Funcionando!');
});

app.listen(port, host, () => {
  console.log(`Servidor rodando em http://${host}:${port}`);
});
