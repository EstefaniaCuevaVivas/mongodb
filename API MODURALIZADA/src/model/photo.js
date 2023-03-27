const {Schema,model} = require("mongoose");

const photoSchema = new Schema({
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


module.exports = model('photo', photoSchema)