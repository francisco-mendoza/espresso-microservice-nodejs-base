const Mongoose = require('mongoose');
const config = require('../config/config.dev');

Mongoose.Promise = global.Promise;

const connectToDb = async () => {
	try {
		await Mongoose.connect(config.database_url_dev);
		console.log('Conectado a mongoDB!');
	}
	catch (err) {
		console.log('No se pudo conectar a MongoDB', err);
	}
}
module.exports = connectToDb;