var mongoose = require('mongoose');

var ActivitySchema = new mongoose.Schema({
 description: String,
 rainy: Boolean,
 outdoor: Boolean,
 indoor: Boolean,
 user: Boolean
});

module.exports = mongoose.model('Activity', ActivitySchema);