const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var RegionSchema = new Schema({
    name: String,
    communes: Array,
    ordinal: String
});
let RegionModel = mongoose.model('Region', RegionSchema);

RegionModel.addRegion = (region) => {
    return region.save();
}
module.exports = mongoose.model('Region');