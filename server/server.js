const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 8001;

app.get('/', () => {
    console.log(`Funcionando!`);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});