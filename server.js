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
          "_id": "5e27671996b66cd04308d757",
          "name": "Winifred",
          "lastname": "Dixon",
          "age": 30,
          "gender": "female"
        },
        {
          "_id": "5e2767191ae8beb862c43ca6",
          "name": "Crawford",
          "lastname": "Herman",
          "age": 35,
          "gender": "male"
        },
        {
          "_id": "5e2767198b98de1b0a0e4f9d",
          "name": "Shepherd",
          "lastname": "Adams",
          "age": 34,
          "gender": "male"
        },
        {
          "_id": "5e2767193e95b33957526764",
          "name": "Pauline",
          "lastname": "Richardson",
          "age": 23,
          "gender": "female"
        },
        {
          "_id": "5e2767199f0262d8a2f0e768",
          "name": "Charity",
          "lastname": "Avery",
          "age": 26,
          "gender": "female"
        },
        {
          "_id": "5e276719ede49eb4e2389a23",
          "name": "Hopkins",
          "lastname": "Johnson",
          "age": 26,
          "gender": "male"
        },
        {
          "_id": "5e2767192391b77af5c1d015",
          "name": "Marshall",
          "lastname": "Madden",
          "age": 29,
          "gender": "male"
        },
        {
          "_id": "5e2767195f2e4ed79b979492",
          "name": "Michelle",
          "lastname": "Floyd",
          "age": 40,
          "gender": "female"
        },
        {
          "_id": "5e27671905fe4eef836931ee",
          "name": "Maxine",
          "lastname": "Paul",
          "age": 33,
          "gender": "female"
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

