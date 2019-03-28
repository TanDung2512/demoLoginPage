const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userInfoSchema = new Schema(
  {
      name : {type : String, require : true ,max:20},
      email : {type: String, require : true , max:20},
      password : {type : String, require : true}
  }
);

module.exports = mongoose.model('info',userInfoSchema);
