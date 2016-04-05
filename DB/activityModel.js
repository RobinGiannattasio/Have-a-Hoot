var mongoose = require('mongoose');

var ActivitySchema = new mongoose.Schema({
 description: String,
});

module.exports = mongoose.model('Activity', ActivitySchema);