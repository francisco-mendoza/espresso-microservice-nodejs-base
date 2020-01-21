const Mongoose = require('mongoose');
const logger = require('../logger/app-logger');
const config = require('../config/config.dev');

Mongoose.Promise = global.Promise;

const connectToDb = async () => {
    try {
        await Mongoose.connect(config.database_url_dev);
        logger.info('Conectado a mongoDB!');
    }
    catch (err) {
        logger.error('No se pudo conectar a MongoDB', err);
    }
}
module.exports = connectToDb;