var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MapPinSchema = new Schema({
  mapid: String,
  posX: String,
  posY: String
});


var MapPin = mongoose.model('MapPin', MapPinSchema);

module.exports = MapPin;