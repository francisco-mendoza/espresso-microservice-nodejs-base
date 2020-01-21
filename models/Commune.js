const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var CommuneSchema = new Schema({
    name: String,
    region: { type : Schema.ObjectId, ref : 'Region' },
});

mongoose.model('Commune', CommuneSchema);

module.exports = mongoose.model('Commune');