const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  nombre:{
    type: String,
    require:true

  },

  url:{
    type: String,
    require:true
  },

  title:{
    type:String,
    require:true
  },

  descripcion:{
    type: String,
    require:true

  }
})


module.exports = mongoose.model('photo', photoSchema)

