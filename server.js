const express = require('express');
const logger = require('./libs/logger/app-logger');
const config = require('./libs/config/config.dev');
const cors = require('cors');
const router_api = require('./routes/routes_api');
const router_user = require('./routes/routes_user');

const app = express();

//Descomentar para usar Base de datos Mongodb
//connectToDb();

require('dotenv').config()
const port = config.serverPort;

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  },
};


app.use(cors());

//Rutas api 
app.use('/api', router_api);
app.use('/api', router_user);

//Index route
app.get('/', (req, res) => {
    res.status(200).send({
        response:"Hello Espresso!"
    });
});

app.listen(port, function() {
    logger.info('Servidor corriendo - ', port);
});

