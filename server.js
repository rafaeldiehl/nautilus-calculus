const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require('./routes/admin');
app.use('/', routes);

app.use(express.static(`${__dirname}/client`));

const port = 8001;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});