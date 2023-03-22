const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    require:true
    
  },
  password: {
    type: String,
    require:true,
    validate:[
      function(password){
        return password.length >=8;
      },
      'El password deberia de ser mas largo'],
      select:false

  }
});

module.exports = mongoose.model('User', userSchema);