const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    enum:["Maria","Raul","Juan","Silvia"]
  
  },
  surname: {
    type: String,
    require:true
  },
  dateOfBirth: {
    type: Date,
    
  },
  comments: {
    type: String,
    
  },
  rol: {
    type: String,
    
  }
  
});

module.exports= mongoose.model('Profile', profileSchema);