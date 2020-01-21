var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    name: String,
    description: String,
    id_category: Number
});

mongoose.model('Category', CategorySchema);

module.exports = mongoose.model('Category');