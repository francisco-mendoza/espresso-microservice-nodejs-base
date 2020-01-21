const express = require('express');
const logger = require('./libs/logger/app-logger');
const morgan = require('morgan');
const config = require('./libs/config/config.dev');
const connectToDb = require('./libs/db/connect')
const cors = require('cors');
const router_api = require('./routes/routes_api');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');


const app = express();

//connectToDb();

const port = config.serverPort;

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  },
};


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(multipart());


//app.use(morgan('dev', { stream: logger.stream }));

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));

//Rutas api 
app.use('/api', router_api);

//Index route
app.get('/', (req, res) => {
    res.send('Service');
});


app.get('/usuarios', (req, res) => {

    let output = [
        {
          "_id": "5e2763517b33d565e5db74d3",
          "name": "Mavis",
          "lastname": "Shepard",
          "age": 24
        },
        {
          "_id": "5e27635172b0ec59c1ee9d72",
          "name": "Geneva",
          "lastname": "Joyner",
          "age": 28
        },
        {
          "_id": "5e276351bc8bd9613b690421",
          "name": "Stewart",
          "lastname": "Reese",
          "age": 34
        },
        {
          "_id": "5e2763516e1e28ffe0f5bb15",
          "name": "Mann",
          "lastname": "Castro",
          "age": 38
        },
        {
          "_id": "5e276351c84d41245078c554",
          "name": "Melissa",
          "lastname": "Mckee",
          "age": 22
        }
      ]; 

    res.send(output);
});



//AUTH api
//var AuthController = require('./auth/AuthController');
//app.use('/api/auth', AuthController);

app.listen(port, function() {
    logger.info('Servidor corriendo - ', port);
});

