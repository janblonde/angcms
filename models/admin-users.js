var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AdminUser = new Schema({
  username: String,
  password: String
})

var AdminUser = mongoose.model('AdminUser', AdminUser);
module.exports = AdminUser;